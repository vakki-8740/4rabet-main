/* ==========================================
   4R-ADMIN (React)  |  lib/alerts.js
   --------------------------------------------------------------
   Telegram alerts, sent from THIS device.

   Why here and not in the user panel:
   the bot token + chat id are stored in the browser that the admin
   used in Settings. A visitor's browser has no token, so a complaint
   submitted there could never reach Telegram. The admin panel is the
   device that owns the token, so it watches for new complaints and
   sends the alert itself.

   Rule of thumb: alerts arrive while the admin panel is open.
   ========================================== */

import { cacheRead, subscribe } from "./complaints.js";

const SEEN_KEY = "4rbet_tg_alerted";
const SEEN_MAX = 300;

/* ---------- which complaints were already announced ---------- */

export function loadSeen() {
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

export function saveSeen(ids) {
  try {
    localStorage.setItem(SEEN_KEY, JSON.stringify((ids || []).slice(-SEEN_MAX)));
  } catch (e) {
    /* storage full / private mode - alerts simply repeat */
  }
}

/* Pure helper: ids that are new and not too old. */
export function pickNew(list, seen, maxAgeMs) {
  const known = new Set(seen || []);
  const limit = Date.now() - (maxAgeMs || 0);

  return (list || []).filter((rec) => {
    if (!rec || !rec.id || known.has(rec.id)) return false;
    if (!maxAgeMs) return true;

    const when = Date.parse(rec.submittedAt || "") || 0;
    return when >= limit;
  });
}

function tg() {
  return window.FourRTelegram;
}

/* ---------- start watching ---------- */

export function startComplaintAlerts(onSent) {
  const T = tg();
  if (!T) return () => {};

  let first = true;
  let seen = loadSeen();

  const unsub = subscribe((list) => {
    if (first) {
      /* first snapshot after opening the panel: remember what is already
         there, but do not send anything (otherwise every old complaint
         would arrive as a new alert) */
      first = false;
      seen = Array.from(new Set(seen.concat((list || []).map((r) => r.id))));
      saveSeen(seen);
      return;
    }

    /* newer complaints only, and nothing older than 30 minutes */
    const fresh = pickNew(list, seen, 30 * 60 * 1000);
    if (!fresh.length) return;

    fresh.forEach((rec) => {
      seen.push(rec.id);
      saveSeen(seen);

      T.notifyComplaint(rec)
        .then((res) => {
          if (res && res.ok && onSent) onSent(rec);
          if (res && res.skipped) {
            console.info("Telegram is off - set the bot token and chat id in Settings.");
          }
        })
        .catch(() => {})
        .then(() => T.flushQueue && T.flushQueue());
    });
  });

  return unsub;
}

/* how many complaints this device has already announced */
export function seenCount() {
  return loadSeen().length;
}

export function resetSeen() {
  saveSeen([]);
}

export { cacheRead };
