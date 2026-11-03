/* ==========================================================
   tools/test-api-client.js
   ----------------------------------------------------------
   js/api.js (browser client) ka contract test - mock PHP API ke
   against, node + vm me. Browser/PHP ki zaroorat nahi.

   Run:  node tools/test-api-client.js

   Kya check hota hai:
     - BASE/ORIGIN normalize, deviceId stable, absUrl
     - chat ensure / polling (cursor) / send (text + image multipart)
     - message edit: user route vs ADMIN route (token ho to)
     - attachment -> legacy fields (image / fileName) mapping + editedAt
     - complaints: multipart + data JSON, list -> legacy record shape
     - error classification: 401 -> AUTH, fetch fail -> CORS/NETWORK, 5xx -> SERVER
   ========================================================== */

const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CODE = fs.readFileSync(path.join(ROOT, "js/api.js"), "utf8");

/* ---------------- mock API (PHP jaisa response shape) ---------------- */
const db = { chats: {}, msgs: {}, complaints: [], failNext: null, token: "" };
const calls = [];

function jsonOut(data, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    headers: { get: (k) => (k.toLowerCase() === "content-type" ? "application/json" : null) },
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(JSON.stringify(data)),
  };
}

function fdEntries(fd) {
  const out = {};
  if (!fd || typeof fd.entries !== "function") return out;
  for (const [k, v] of fd.entries()) {
    if (v && typeof v === "object" && v.__isFile) out[k] = { file: true, name: v.name, size: v.size, type: v.type };
    else out[k] = v;
  }
  return out;
}

async function handle(method, url, opts = {}) {
  const u = new URL(url, "https://api.test");
  const p = u.pathname.replace(/^\/api/, "");
  const body = fdEntries(opts.body);
  const headers = opts.headers || {};
  calls.push({ method, path: p, query: Object.fromEntries(u.searchParams), body, headers });

  if (db.failNext && p.startsWith(db.failNext.path)) {
    const f = db.failNext; db.failNext = null;
    if (f.reject) throw new TypeError("Failed to fetch");
    return jsonOut({ ok: false, error: f.error || "boom" }, f.status || 500);
  }

  /* admin routes need a token */
  if (p.startsWith("/admin/") && p !== "/admin/login" && headers.Authorization !== "Bearer good-token") {
    return jsonOut({ ok: false, error: "Login zaroori hai" }, 401);
  }

  let m;

  if (method === "GET" && p === "/health") {
    return jsonOut({ ok: true, storage: "json-file", writable: true, admins: 1, warnings: [], telegram: { enabled: false, queueLen: 0 }, php: { version: "8.3.4" } });
  }

  if (method === "POST" && p === "/chats") {
    const j = JSON.parse(opts.body || "{}");
    db.chats[j.chatId] = db.chats[j.chatId] || { id: j.chatId, userName: j.userName || "Guest", unreadAdmin: 0, unreadUser: 0 };
    db.msgs[j.chatId] = db.msgs[j.chatId] || { seq: 0, items: [] };
    return jsonOut({ ok: true, created: true, chat: db.chats[j.chatId] }, 201);
  }

  if (method === "GET" && (m = p.match(/^\/chats\/([^/]+)\/messages$/))) {
    const st = db.msgs[m[1]] || { seq: 0, items: [] };
    const since = Number(u.searchParams.get("since") || 0);
    return jsonOut({ ok: true, items: st.items.filter((x) => x.seq > since), seq: st.seq, truncated: false, chat: db.chats[m[1]] || null });
  }

  if (method === "POST" && (m = p.match(/^\/(admin\/)?chats\/([^/]+)\/messages$/))) {
    const st = (db.msgs[m[2]] = db.msgs[m[2]] || { seq: 0, items: [] });
    st.seq += 1;
    const fileKey = Object.keys(body).find((k) => body[k] && body[k].file);
    const item = { id: "m" + st.seq, seq: st.seq, who: m[1] ? "admin" : "user", text: String(body.text || ""), at: new Date().toISOString(), name: String(body.userName || "") };
    if (fileKey) item.attachment = { kind: "image", name: body[fileKey].name, url: "/api/files/2026/10/a.jpg" };
    st.items.push(item);
    return jsonOut({ ok: true, message: item }, 201);
  }

  /* ---- EDIT: user route (sirf apna) vs admin route (koi bhi) ---- */
  if (method === "PATCH" && (m = p.match(/^\/(admin\/)?chats\/([^/]+)\/messages\/([^/]+)$/))) {
    const st = db.msgs[m[2]];
    const it = st && st.items.find((x) => x.id === m[3]);
    if (!it) return jsonOut({ ok: false, error: "message nahi mila" }, 404);

    const j = JSON.parse(opts.body || "{}");
    if (!m[1] && it.who !== "user") return jsonOut({ ok: false, error: "sirf apna message edit kar sakte ho" }, 403);

    it.text = String(j.text || "");
    it.editedAt = new Date().toISOString();
    it.editedBy = m[1] ? "4r@admin.com" : "user";
    return jsonOut({ ok: true, message: it });
  }

  if (method === "POST" && p === "/admin/login") {
    const j = JSON.parse(opts.body || "{}");
    if (j.password !== "good-pass") return jsonOut({ ok: false, error: "Email ya password galat hai" }, 401);
    return jsonOut({ ok: true, token: "good-token", expiresAt: 9999999999, admin: { email: j.email, name: "Admin", role: "admin" } });
  }

  if (method === "GET" && p === "/admin/chats") {
    return jsonOut({ ok: true, items: Object.keys(db.chats).map((k) => db.chats[k]), total: Object.keys(db.chats).length, unread: 0 });
  }

  if (method === "POST" && p === "/complaints") {
    const data = JSON.parse(body.data || "{}");
    const id = "CM-" + (1000 + db.complaints.length);
    const imgs = Object.keys(body).filter((k) => k.startsWith("image_")).map((k, i) => ({ id: "i" + i, field: k.slice(6), name: body[k].name, url: "/api/files/2026/10/i" + i + ".jpg" }));
    const rec = { id, category: body.category || "Complaint", formId: data.__formId || "", data, images: imgs, status: "pending", deviceId: headers["X-Device-Id"] || "", createdAt: new Date().toISOString() };
    db.complaints.push(rec);
    return jsonOut({ ok: true, id, complaint: rec, telegram: { sent: false, skipped: true } }, 201);
  }

  if (method === "GET" && (p === "/complaints/mine" || p === "/admin/complaints")) {
    return jsonOut({ ok: true, items: db.complaints, total: db.complaints.length });
  }

  return jsonOut({ ok: false, error: "endpoint nahi mila", path: p }, 404);
}

/* ---------------- sandbox ---------------- */
class FakeFormData {
  constructor() { this._e = []; }
  append(k, v, name) {
    if (v && typeof v === "object" && v.__isBlob) this._e.push([k, { __isFile: true, name: name || "blob", size: v.size, type: v.type }]);
    else this._e.push([k, String(v)]);
  }
  *entries() { for (const e of this._e) yield e; }
}
class FakeBlob { constructor(parts, opts) { this.__isBlob = true; this.size = (parts || []).reduce((a, x) => a + (x.length || 0), 0); this.type = (opts || {}).type || ""; } }

const store = new Map();
const sandbox = {
  console,
  setTimeout: (fn, ms) => setTimeout(fn, Math.min(ms || 0, 15)),
  clearTimeout, Promise, URL, URLSearchParams,
  atob: (s) => Buffer.from(s, "base64").toString("binary"),
  FormData: FakeFormData, Blob: FakeBlob, Uint8Array,
  CustomEvent: class { constructor(t) { this.type = t; } },
  navigator: { onLine: true },
  location: { protocol: "https:", search: "", origin: "https://site.test", host: "site.test" },
  document: { hidden: false, addEventListener() {}, createElement: () => ({ getContext: () => ({ drawImage() {} }), toDataURL: () => "data:image/jpeg;base64,AA" }) },
  localStorage: {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  },
  fetch: (url, opts) => handle(String((opts && opts.method) || "GET"), url, opts),
};
sandbox.window = sandbox;
vm.createContext(sandbox);
sandbox.window.FOURR_API = { backend: "api", base: "https://api.test", pollMs: 5, pollFastMs: 3, adminPollMs: 5, mailPollMs: 1000 };
vm.runInContext("(function(){" + CODE + "})();", sandbox, { filename: "api.js" });

const A = sandbox.window.FourRApi;
const DB = sandbox.window.FourRApiDb;
const Admin = sandbox.window.FourRApiAdmin;

/* ---------------- assertions ---------------- */
let pass = 0, fail = 0;
const eq = (n, got, want) => {
  const ok = JSON.stringify(got) === JSON.stringify(want);
  ok ? pass++ : fail++;
  console.log((ok ? "  [ OK ] " : "  [FAIL] ") + n + (ok ? "" : "\n         got : " + JSON.stringify(got) + "\n         want: " + JSON.stringify(want)));
};
const okf = (n, cond, extra = "") => {
  cond ? pass++ : fail++;
  console.log((cond ? "  [ OK ] " : "  [FAIL] ") + n + (!cond && extra ? "  -> " + extra : ""));
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async function run() {
  console.log("\njs/api.js client contract test");

  eq("BASE normalize", A.BASE, "https://api.test/api");
  eq("ORIGIN", A.ORIGIN, "https://api.test");
  okf("deviceId stable", A.deviceId() === A.deviceId());

  const cid = A.myId();
  okf("ensureChat", (await A.ensureChat(cid, "Tester")).ok === true);

  const seen = [];
  const un = A.watchMessages(cid, (l) => seen.push(l.length));
  await sleep(25);
  okf("polling cb fired", seen.length >= 1);

  okf("send text", (await A.send(cid, { who: "user", text: "hello", name: "Tester" })).ok === true);
  await sleep(30);
  eq("one message in list", seen[seen.length - 1], 1);

  /* ---- EDIT: pehle bina token (user route) ---- */
  let list = [];
  A.watchMessages(cid, (l) => { list = l; });
  await sleep(20);
  const userMsg = list.find((x) => x.text === "hello");

  const e1 = await A.editMessage(cid, userMsg.id, "hello edited");
  okf("user edit ok", e1.ok === true, JSON.stringify(e1));
  const c1 = calls.filter((c) => c.method === "PATCH").pop();
  eq("user edit -> public route", c1.path, "/chats/" + cid + "/messages/" + userMsg.id);
  okf("editedAt mapped to client", !!(list.find((x) => x.id === userMsg.id) || {}).editedAt);

  /* ---- admin message: user route se edit 403 hona chahiye ---- */
  await A.send(cid, { who: "user", text: "second", name: "Tester" });
  await sleep(25);
  const st = db.msgs[cid];
  st.seq += 1;
  st.items.push({ id: "mADM", seq: st.seq, who: "admin", text: "admin reply", at: new Date().toISOString(), name: "4r@admin.com" });

  const e2 = await A.editMessage(cid, "mADM", "nope");
  okf("admin msg edit blocked without token (403)", e2.ok === false, JSON.stringify(e2));

  /* ---- login -> ab admin route use ho ---- */
  const lg = await Admin.login("4r@admin.com", "good-pass");
  okf("login ok", lg.ok === true && Admin.token() === "good-token");

  const e3 = await A.editMessage(cid, "mADM", "admin reply (edited)");
  okf("admin edit ok", e3.ok === true, JSON.stringify(e3));
  const c3 = calls.filter((c) => c.method === "PATCH").pop();
  eq("admin edit -> admin route", c3.path, "/admin/chats/" + cid + "/messages/mADM");
  eq("editedBy from server", e3.message && e3.message.editedBy, "4r@admin.com");

  /* user ka message bhi admin edit kar sake */
  const e4 = await A.editMessage(cid, userMsg.id, "admin ne user ka message edit kiya");
  okf("admin can edit user message", e4.ok === true, JSON.stringify(e4));

  /* ---- complaints ---- */
  const saved = await DB.saveComplaint({
    id: "l1", category: "Deposit Problem", formId: "deposit-form",
    data: { userName: "Ram", password: "Secret@1" },
    images: [{ field: "aadhaarFront", name: "a.jpg", dataUrl: "data:image/jpeg;base64,AAAA" }],
    status: "pending", submittedAt: new Date().toISOString(),
  });
  okf("saveComplaint", saved.ok === true, JSON.stringify(saved));
  const cc = calls.find((c) => c.method === "POST" && c.path === "/complaints");
  okf("image_<field> multipart", !!cc.body.image_aadhaarFront);
  okf("data JSON field", JSON.parse(cc.body.data).userName === "Ram");

  const mine = await DB.listComplaints();
  okf("admin token -> admin complaints route", calls.filter((c) => c.path === "/admin/complaints").length >= 1);
  okf("record legacy shape", mine.length === 1 && mine[0].data.userName === "Ram");
  okf("image url absolute", /^https:\/\/api\.test/.test(mine[0].images[0].dataUrl), mine[0].images[0].dataUrl);

  /* ---- error classification ---- */
  db.failNext = { path: "/health", status: 503, error: "volume read-only" };
  await A.health();
  eq("5xx -> SERVER", A.why(), "SERVER");

  db.failNext = { path: "/health", reject: true };
  await A.health();
  eq("fetch fail (online) -> CORS", A.why(), "CORS");
  sandbox.navigator.onLine = false;
  db.failNext = { path: "/health", reject: true };
  await A.health();
  eq("fetch fail (offline) -> NETWORK", A.why(), "NETWORK");
  sandbox.navigator.onLine = true;

  un();
  console.log("\nRESULT: " + pass + " pass, " + fail + " fail\n");
  process.exit(fail ? 1 : 0);
})().catch((e) => { console.error("HARNESS ERROR", e); process.exit(2); });
