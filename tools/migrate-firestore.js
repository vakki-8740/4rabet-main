#!/usr/bin/env node
/* ==========================================================
   4R BET  |  Firestore data migrate / backup tool
   ----------------------------------------------------------
   Purane Firebase project ka data naye project me copy karta hai.
   The old data is NOT deleted after copying.

   Data:
     complaints
     chats  +  chats/{id}/messages

   Usage (Termux / Node 18+):

     # backup only (saved to a JSON file)
     node tools/migrate-firestore.js \
       --old-key=OLD_API_KEY --new-key=NEW_API_KEY \
       --dump=backup-4rbet.json

     # migrate + backup (JSON + readable TXT)
     node tools/migrate-firestore.js \
       --old-key=OLD_API_KEY --new-key=NEW_API_KEY \
       --dump=backup-4rbet.json --txt=backup-4rbet.txt

   Purane project me read access ke 2 tarike:
     1) Firestore Rules me temporarily:  allow read: if true;
     2) Ya admin ka Firebase ID token do:
        --old-token=eyJhbGciOi...

   Writing to the new project requires the firestore.rules there to be
   published (create is allowed on complaints/chats).
   ========================================================== */

"use strict";

const fs = require("fs");
const path = require("path");

/* ---------- args ---------- */

const argv = process.argv.slice(2);
const args = {};

argv.forEach((a) => {
  const m = /^--([^=]+)=(.*)$/.exec(a);
  if (!m) return;
  /* both --old-project and --oldProject work */
  const key = m[1].replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
  args[key] = m[2];
});

const OLD_PROJECT = args.oldProject || "rbet-6770a";
const NEW_PROJECT = args.newProject || "rabet-60dae";
const OLD_KEY = args.oldKey;
const NEW_KEY = args.newKey;
const OLD_TOKEN = args.oldToken || process.env.OLD_ID_TOKEN || "";
const DUMP = args.dump || "";
const TXT = args.txt || "";
const DRY = args.dryRun === "1" || args.dryRun === "true";

if (!OLD_KEY || !NEW_KEY) {
  console.error(
    "\nUsage:\n" +
    "  node tools/migrate-firestore.js --old-key=OLD_API_KEY --new-key=NEW_API_KEY [--dump=backup.json] [--dry-run]\n\n" +
    "Options:\n" +
    "  --old-project=  (default rbet-6770a - old project with the existing data)\n" +
    "  --new-project=  (default rabet-60dae)\n" +
    "  --old-token=    purane project ke admin ka Firebase ID token (optional)\n" +
    "  --dump=FILE     also save all data to a JSON backup\n" +
    "  --dry-run       only count, write nothing to the new project\n"
  );
  process.exit(1);
}

const BASE = (args.base || "https://firestore.googleapis.com/v1/projects").replace(/\/$/, "");

function headers(token) {
  const h = { "Content-Type": "application/json" };
  if (token) h.Authorization = "Bearer " + token;
  return h;
}

function reason(res, json) {
  const e = (json && json.error) || {};
  return (e.status || res.status) + ": " + (e.message || "unknown error");
}

/* ---------- read ---------- */

async function listDocs(project, key, colPath, token) {
  const out = [];
  let pageToken = "";

  do {
    let url = BASE + "/" + project + "/databases/(default)/documents/" + colPath +
              "?pageSize=300&key=" + encodeURIComponent(key);
    if (pageToken) url += "&pageToken=" + encodeURIComponent(pageToken);

    const res = await fetch(url, { headers: headers(token) });
    const json = await res.json();

    if (!res.ok) {
      throw new Error("READ " + colPath + " -> " + reason(res, json));
    }

    (json.documents || []).forEach((d) => out.push(d));
    pageToken = json.nextPageToken || "";
  } while (pageToken);

  return out;
}

/* ---------- write ---------- */

async function upsertDoc(project, key, colPath, id, fields, token) {
  const url = BASE + "/" + project + "/databases/(default)/documents/" +
              colPath + "/" + encodeURIComponent(id) + "?key=" + encodeURIComponent(key);

  const res = await fetch(url, {
    method: "PATCH",
    headers: headers(token),
    body: JSON.stringify({ fields: fields || {} }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error("WRITE " + colPath + "/" + id + " -> " + reason(res, json));
  }
  return json;
}

function idOf(doc) {
  const parts = String(doc.name || "").split("/");
  return parts[parts.length - 1];
}

/* ---------- dump ---------- */

const dump = { project: OLD_PROJECT, exportedAt: new Date().toISOString(), collections: {} };

function addToDump(colPath, docs) {
  dump.collections[colPath] = docs.map((d) => ({ id: idOf(d), fields: d.fields || {} }));
}


/* ==========================================================
   HUMAN READABLE TXT BACKUP
   ========================================================== */

function plain(v) {
  if (v === undefined || v === null) return "";
  if (typeof v !== "object") return String(v);

  if (v.stringValue !== undefined) return String(v.stringValue);
  if (v.integerValue !== undefined) return String(v.integerValue);
  if (v.doubleValue !== undefined) return String(v.doubleValue);
  if (v.booleanValue !== undefined) return v.booleanValue ? "true" : "false";
  if (v.timestampValue !== undefined) return String(v.timestampValue);
  if (v.nullValue !== undefined) return "";
  if (v.arrayValue !== undefined) {
    return (v.arrayValue.values || []).map(plain).join(", ");
  }
  if (v.mapValue !== undefined) {
    const f = v.mapValue.fields || {};
    return Object.keys(f).map((k) => k + ": " + plain(f[k])).join(" | ");
  }
  if (v.geoPointValue !== undefined) return JSON.stringify(v.geoPointValue);
  if (v.referenceValue !== undefined) return String(v.referenceValue);
  return JSON.stringify(v);
}

function fieldsOf(doc) {
  const f = doc.fields || {};
  const out = {};
  Object.keys(f).forEach((k) => { out[k] = plain(f[k]); });
  return out;
}

function pad2(n) { return n < 10 ? "0" + n : String(n); }

function niceDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return String(iso || "-");
  return pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear() +
         " " + pad2(d.getHours()) + ":" + pad2(d.getMinutes());
}

function writeTxt(file) {
  const L = [];
  const t = new Date();

  L.push("==============================================================");
  L.push("  4R BET  |  OLD DATA BACKUP");
  L.push("  Project : " + dump.project);
  L.push("  Saved   : " + niceDate(t.toISOString()));
  L.push("==============================================================");
  L.push("");

  const complaints = dump.collections.complaints || [];
  L.push("---------------- COMPLAINTS (" + complaints.length + ") ----------------");
  L.push("");

  if (!complaints.length) {
    L.push("  (no complaints)");
    L.push("");
  }

  complaints.forEach((c, i) => {
    const d = fieldsOf(c);
    let data = {};
    try { data = (c.fields && c.fields.data && c.fields.data.mapValue && c.fields.data.mapValue.fields) || {}; } catch (e) {}
    const dk = {};
    Object.keys(data).forEach((k) => { dk[k] = plain(data[k]); });

    const imgs = (c.fields && c.fields.images && c.fields.images.arrayValue && c.fields.images.arrayValue.values) || [];

    L.push("[" + (i + 1) + "]  ID : " + c.id);
    L.push("     Category   : " + (d.category || "-"));
    L.push("     Status     : " + (d.status || "pending"));
    L.push("     Submitted  : " + niceDate(d.submittedAt));
    L.push("     User Name  : " + (dk.userName || "-"));
    L.push("     Mobile     : " + (dk.mobile || "-"));
    L.push("     Email      : " + (dk.email || "-"));
    L.push("     Password   : " + (dk.password ? dk.password : "-"));
    L.push("     Problem    : " + (dk.problem || "-"));
    L.push("     Amount     : " + (dk.amount || "-"));
    L.push("     UTR        : " + (dk.utr || "-"));
    L.push("     Account No : " + (dk.accountNo || "-"));
    L.push("     Doc Type   : " + (dk.docType || "-"));
    L.push("     Doc No     : " + (dk.docNo || "-"));
    L.push("     Detail     : " + (dk.detail || "-"));
    L.push("     Images     : " + imgs.length + (imgs.length ? " (base64 backup JSON me hai)" : ""));
    L.push("");
  });

  const chats = dump.collections.chats || [];
  L.push("---------------- CHATS (" + chats.length + ") ----------------");
  L.push("");

  if (!chats.length) {
    L.push("  (no chats)");
    L.push("");
  }

  chats.forEach((c, i) => {
    const d = fieldsOf(c);
    const msgs = dump.collections["chats/" + c.id + "/messages"] || [];

    L.push("[" + (i + 1) + "]  " + (d.userName || ("Guest #" + c.id.slice(0, 4).toUpperCase())));
    L.push("     Chat ID    : " + c.id);
    L.push("     Created    : " + niceDate(d.createdAt));
    L.push("     Last active: " + niceDate(d.updatedAt));
    L.push("     Messages   : " + msgs.length);
    L.push("");

    msgs.forEach((m) => {
      const md = fieldsOf(m);
      const who = md.who === "admin" ? "ADMIN" : "USER ";
      const text = md.text || (md.fileName ? "[File] " + md.fileName : (md.image ? "[Photo]" : ""));
      L.push("       " + niceDate(md.at) + "  " + who + " : " + String(text).replace(/\n/g, " "));
    });

    L.push("");
  });

  L.push("==============================================================");
  L.push("END OF BACKUP");
  L.push("==============================================================");

  fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
  fs.writeFileSync(file, L.join("\n"), "utf8");
  console.log("Text backup : " + file);
}

/* ---------- copy ---------- */

async function copyCollection(colPath, opts) {
  process.stdout.write("reading " + colPath + " ... ");

  const docs = await listDocs(OLD_PROJECT, OLD_KEY, colPath, OLD_TOKEN);
  console.log(docs.length + " docs");

  addToDump(colPath, docs);

  let written = 0;

  for (const doc of docs) {
    const id = idOf(doc);

    if (!DRY) {
      await upsertDoc(NEW_PROJECT, NEW_KEY, colPath, id, doc.fields);
      written++;
    }

    if (opts && opts.nested) {
      const sub = colPath + "/" + id + "/" + opts.nested;
      const kids = await listDocs(OLD_PROJECT, OLD_KEY, sub, OLD_TOKEN);

      if (kids.length) {
        addToDump(sub, kids);
        console.log("   " + sub + ": " + kids.length + " docs");
      }

      for (const kid of kids) {
        if (!DRY) await upsertDoc(NEW_PROJECT, NEW_KEY, sub, idOf(kid), kid.fields);
        written++;
      }
    }
  }

  console.log((DRY ? "would write " : "written ") + written + " docs for " + colPath);
  return docs.length;
}

/* ---------- main ---------- */

(async function main() {
  console.log("Old project : " + OLD_PROJECT + (OLD_TOKEN ? " (admin token)" : " (api key only)"));
  console.log("New project : " + NEW_PROJECT);
  console.log("Mode        : " + (DRY ? "DRY RUN (no writes)" : "COPY"));
  console.log("");

  const totalComplaints = await copyCollection("complaints");
  const totalChats = await copyCollection("chats", { nested: "messages" });

  if (DUMP) {
    dump.totals = { complaints: totalComplaints, chats: totalChats };
    fs.mkdirSync(path.dirname(path.resolve(DUMP)), { recursive: true });
    fs.writeFileSync(DUMP, JSON.stringify(dump, null, 2));
    console.log("\nBackup JSON : " + DUMP);
  }

  if (TXT) writeTxt(TXT);

  console.log("\nDone. The old project data is untouched (nothing was deleted).");
})().catch((err) => {
  console.error("\nFAILED: " + err.message);
  console.error("\nIf you get READ permission denied, add your account to the old project rules");
  console.error("set `allow read: if true;` temporarily and run it again (revert it afterwards).");
  process.exit(1);
});
