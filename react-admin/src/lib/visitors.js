/* ==========================================
   4R-ADMIN (React)  |  lib/visitors.js
   --------------------------------------------------------------
   Reads the `visitors` collection written by the user panel
   (js/visitor-track.js).

   One document = one browser (anonymous visitor id):
     visits, pages seen, device, browser, complained or not
   ========================================== */

import { getDb, friendly, setLastError } from "./fb.js";

export const VISITORS_COL = "visitors";
export const VISITOR_LIMIT = 300;

/* ---------- small helpers ---------- */

const pad = (n) => (n < 10 ? "0" + n : "" + n);

export function fmtWhen(ts) {
  if (!ts) return "-";

  const d = new Date(Number(ts));
  if (isNaN(d.getTime())) return "-";

  const now = new Date();
  const time = pad(d.getHours()) + ":" + pad(d.getMinutes());

  if (d.toDateString() === now.toDateString()) return "Today " + time;

  return pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() + " " + time;
}

export function dayStart() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function shortId(vid) {
  const v = String(vid || "");
  return v.length > 12 ? v.slice(0, 12) + "..." : v;
}

function mapDoc(doc) {
  const d = doc.data() || {};

  return {
    id: doc.id,
    vid: d.vid || doc.id,
    name: d.name || "",
    firstSeen: Number(d.firstSeen) || 0,
    lastSeen: Number(d.lastSeen) || 0,
    visits: Number(d.visits) || 0,
    pages: Array.isArray(d.pages) ? d.pages : [],
    device: d.device || "",
    browser: d.browser || "",
    os: d.os || "",
    complained: !!d.complained,
    complaints: Number(d.complaints) || 0,
    lastPage: d.lastPage || ""
  };
}

/* ---------- data ---------- */

export function listVisitors() {
  return getDb()
    .collection(VISITORS_COL)
    .orderBy("lastSeen", "desc")
    .limit(VISITOR_LIMIT)
    .get()
    .then((snap) => {
      const list = [];
      snap.forEach((doc) => list.push(mapDoc(doc)));
      return list;
    })
    .catch((err) => {
      setLastError(err);
      throw new Error(friendly(err));
    });
}

export function watchVisitors(cb, onError) {
  let unsub = () => {};

  try {
    unsub = getDb()
      .collection(VISITORS_COL)
      .orderBy("lastSeen", "desc")
      .limit(VISITOR_LIMIT)
      .onSnapshot(
        (snap) => {
          const list = [];
          snap.forEach((doc) => list.push(mapDoc(doc)));
          cb(list);
        },
        (err) => {
          setLastError(err);
          if (onError) onError(friendly(err));
        }
      );
  } catch (err) {
    setLastError(err);
    if (onError) onError(friendly(err));
  }

  return () => unsub && unsub();
}

/* ---------- statistics ---------- */

export function visitorStats(list) {
  const start = dayStart();
  const s = { total: 0, today: 0, complained: 0, visitOnly: 0, visits: 0, complaints: 0 };

  (list || []).forEach((v) => {
    s.total++;
    s.visits += v.visits;
    s.complaints += v.complaints || 0;
    if (v.lastSeen >= start) s.today++;
    if (v.complained) s.complained++;
    else s.visitOnly++;
  });

  return s;
}

/* ---------- CSV export ---------- */

export function exportVisitorsCsv(rows) {
  const head = [
    "Visitor ID", "Name", "Device", "Browser", "OS",
    "Visits", "Pages", "Complained", "Complaints", "First Seen", "Last Seen"
  ];

  const lines = [head.join(",")];

  (rows || []).forEach((v) => {
    lines.push(
      [
        v.vid,
        v.name,
        v.device,
        v.browser,
        v.os,
        v.visits,
        v.pages.join(" | "),
        v.complained ? "Yes" : "No",
        v.complaints,
        v.firstSeen ? new Date(v.firstSeen).toISOString() : "",
        v.lastSeen ? new Date(v.lastSeen).toISOString() : ""
      ]
        .map((c) => '"' + String(c == null ? "" : c).replace(/"/g, '""') + '"')
        .join(",")
    );
  });

  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "4rbet-visitors-" + new Date().toISOString().slice(0, 10) + ".csv";
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
