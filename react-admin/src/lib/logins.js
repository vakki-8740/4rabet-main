/* ==========================================
   4R-ADMIN (React)  |  lib/logins.js
   --------------------------------------------------------------
   Login history + the 5-logins-per-day limit.

   Every attempt is written to the `adminLogins` collection:
     success  -> the login was allowed
     blocked  -> the daily limit was already used up
     failed   -> wrong email / password
   ========================================== */

import { getDb, ADMIN_EMAIL } from "./fb.js";

export const LOGIN_COL = "adminLogins";
export const MAX_PER_DAY = 5;

const dayStart = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/* ---------- what device / browser is this ---------- */

export function parseUA(ua) {
  ua = ua || navigator.userAgent || "";

  const device =
    /iPad|Tablet|PlayBook|Silk/i.test(ua) ? "Tablet" :
    /Mobi|Android|iPhone|iPod|Windows Phone/i.test(ua) ? "Mobile" :
    "Desktop";

  const os =
    /Android/i.test(ua) ? "Android" :
    /iPhone|iPad|iPod/i.test(ua) ? "iOS" :
    /Windows/i.test(ua) ? "Windows" :
    /Mac OS X/i.test(ua) ? "macOS" :
    /Linux/i.test(ua) ? "Linux" :
    "Other";

  const browser =
    /Edg\//i.test(ua) ? "Edge" :
    /OPR\/|Opera/i.test(ua) ? "Opera" :
    /SamsungBrowser/i.test(ua) ? "Samsung" :
    /Chrome\//i.test(ua) ? "Chrome" :
    /Firefox\//i.test(ua) ? "Firefox" :
    /Safari\//i.test(ua) ? "Safari" :
    "Other";

  return { device, os, browser };
}

/* ---------- write one entry ---------- */

export function logLogin(result, mail) {
  const i = parseUA(navigator.userAgent || "");

  return getDb()
    .collection(LOGIN_COL)
    .add({
      email: (mail || ADMIN_EMAIL).toLowerCase(),
      at: Date.now(),
      result, /* success | blocked | failed */
      device: i.device,
      browser: i.browser,
      os: i.os,
      userAgent: (navigator.userAgent || "").slice(0, 300)
    })
    .then(() => true)
    .catch(() => false); /* the history must never block a login */
}

/* ---------- read ---------- */

export function countTodayLogins() {
  return getDb()
    .collection(LOGIN_COL)
    .orderBy("at", "desc")
    .limit(80)
    .get()
    .then((snap) => {
      const start = dayStart();
      let n = 0;

      snap.forEach((doc) => {
        const d = doc.data() || {};
        if (d.result === "success" && Number(d.at) >= start) n++;
      });

      return n;
    })
    .catch(() => 0);
}

export function listLogins(limit) {
  return getDb()
    .collection(LOGIN_COL)
    .orderBy("at", "desc")
    .limit(limit || 12)
    .get()
    .then((snap) => {
      const out = [];

      snap.forEach((doc) => {
        const d = doc.data() || {};
        out.push({
          id: doc.id,
          at: Number(d.at) || 0,
          result: d.result || "",
          email: d.email || "",
          device: d.device || "",
          browser: d.browser || "",
          os: d.os || ""
        });
      });

      return out;
    })
    .catch(() => []);
}

/* ---------- called after Firebase accepted the password ---------- */

export function afterAuth(A) {
  return countTodayLogins().then((used) => {
    if (used >= MAX_PER_DAY) {
      return logLogin("blocked").then(() =>
        A.signOut().then(() => {
          const e = new Error(
            "Daily login limit reached (" + MAX_PER_DAY + " logins per day). " +
              "Please try again tomorrow."
          );
          e.code = "app/daily-limit";
          throw e;
        })
      );
    }

    return logLogin("success");
  });
}
