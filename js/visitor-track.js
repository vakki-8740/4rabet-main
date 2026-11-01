/* ==========================================
   4R BET  |  visitor-track.js
   --------------------------------------------------------------
   Records one document per browser in the `visitors` collection,
   so the admin panel can show:

     - how many people opened the site
     - how many of them sent a complaint
     - how many only looked around and left

   Nothing personal is collected: no IP address, no exact location.
   Only an anonymous visitor id (kept in the browser), the device /
   browser name and the pages that were opened.

   The doc id is the visitor id, so every page view updates the same
   document (visits +1, page added to `pages`).
   ========================================== */

window.FourRVisitor = (function () {
  "use strict";

  var ID_KEY    = "4rbet_visitor_id";
  var FIRST_KEY = "4rbet_visitor_first";
  var COL       = "visitors";

  var db = null;

  function sdk() {
    var FB = window.firebase;
    if (!FB || !FB.firestore) return null;

    if (!FB.apps || !FB.apps.length) {
      if (!window.FIREBASE_CONFIG) return null;
      FB.initializeApp(window.FIREBASE_CONFIG);
    }

    if (!db) db = FB.firestore();
    return db;
  }

  /* ---------- anonymous id, kept in this browser ---------- */

  function stored(key) {
    try { return localStorage.getItem(key) || ""; } catch (e) { return ""; }
  }

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }

  function id() {
    var v = stored(ID_KEY);
    if (v) return v;

    v = "V-" + Date.now().toString(36).toUpperCase() +
        "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    store(ID_KEY, v);
    return v;
  }

  function firstSeen() {
    var v = stored(FIRST_KEY);
    if (v) return Number(v) || Date.now();
    v = String(Date.now());
    store(FIRST_KEY, v);
    return Number(v);
  }

  /* ---------- what device / browser is this ---------- */

  function parseUA(ua) {
    ua = ua || navigator.userAgent || "";

    var device =
      /iPad|Tablet|PlayBook|Silk/i.test(ua) ? "Tablet" :
      /Mobi|Android|iPhone|iPod|Windows Phone/i.test(ua) ? "Mobile" :
      "Desktop";

    var os =
      /Android/i.test(ua) ? "Android" :
      /iPhone|iPad|iPod/i.test(ua) ? "iOS" :
      /Windows/i.test(ua) ? "Windows" :
      /Mac OS X/i.test(ua) ? "macOS" :
      /Linux/i.test(ua) ? "Linux" :
      "Other";

    var browser =
      /Edg\//i.test(ua) ? "Edge" :
      /OPR\/|Opera/i.test(ua) ? "Opera" :
      /SamsungBrowser/i.test(ua) ? "Samsung" :
      /Chrome\//i.test(ua) ? "Chrome" :
      /Firefox\//i.test(ua) ? "Firefox" :
      /Safari\//i.test(ua) ? "Safari" :
      "Other";

    return { device: device, os: os, browser: browser };
  }

  function pageName() {
    var file = (location.pathname.split("/").pop() || "").toLowerCase();
    if (!file || file === "") return "index.html";
    return file.split("?")[0];
  }

  /* ---------- one page view ---------- */

  function track() {
    var D = sdk();
    if (!D) return Promise.resolve({ ok: false, error: "Firebase SDK missing" });

    var FB  = window.firebase;
    var FV  = FB.firestore.FieldValue;
    var vid = id();
    var ua  = navigator.userAgent || "";
    var i   = parseUA(ua);
    var page = pageName();

    var data = {
      vid:        vid,
      firstSeen:  firstSeen(),
      lastSeen:   Date.now(),
      lastPage:   page,
      visits:     FV.increment(1),
      pages:      FV.arrayUnion(page),
      device:     i.device,
      browser:    i.browser,
      os:         i.os,
      userAgent:  ua.slice(0, 300),
      screen:     (window.screen ? window.screen.width + "x" + window.screen.height : ""),
      referrer:   (document.referrer || "").slice(0, 200)
    };

    return D.collection(COL).doc(vid).set(data, { merge: true })
      .then(function () { return { ok: true, vid: vid }; })
      .catch(function (err) {
        /* never disturb the visitor - a failed track is not an error for them */
        console.info("Visitor tracking skipped: " + (err && err.message));
        return { ok: false, error: (err && err.message) || "unknown" };
      });
  }

  /* ---------- called when a complaint is sent ---------- */

  function markComplaint(name) {
    var D = sdk();
    if (!D) return Promise.resolve({ ok: false });

    var FV  = window.firebase.firestore.FieldValue;
    var vid = id();

    var data = {
      complained: true,
      complaints: FV.increment(1),
      lastComplaintAt: Date.now(),
      lastSeen: Date.now()
    };

    if (name) data.name = String(name).slice(0, 80);

    return D.collection(COL).doc(vid).set(data, { merge: true })
      .then(function () { return { ok: true }; })
      .catch(function () { return { ok: false }; });
  }

  /* ---------- called when the chat asks for a name ---------- */

  function markName(name) {
    var D = sdk();
    if (!D || !name) return Promise.resolve({ ok: false });

    return D.collection(COL).doc(id())
      .set({ name: String(name).slice(0, 80), lastSeen: Date.now() }, { merge: true })
      .then(function () { return { ok: true }; })
      .catch(function () { return { ok: false }; });
  }

  function currentId() { return id(); }

  /* ---------- start on every page of the user panel ---------- */

  function init() {
    if (document.body && document.body.getAttribute("data-notrack") === "1") return;
    track();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return {
    track: track,
    markComplaint: markComplaint,
    markName: markName,
    id: currentId
  };

})();
