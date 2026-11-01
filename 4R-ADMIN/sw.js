/* ==========================================
   4R-ADMIN  |  Service Worker  (sw.js)
   Used for installing the app on a phone.

   Rules:
   - The app's own files (html/css/js/icons) come from the cache so
     it opens offline too
   - Firebase / Telegram / gstatic are never cached, they always go
     straight to the network (the data must not go stale)
   ========================================== */

var VERSION = "4r-admin-v4";
var SHELL = [
  "./",
  "index.html",
  "login.html",
  "settings.html",
  "complaint.html",
  "chat.html",
  "room.html",
  "css/style.css",
  "css/admin.css",
  "fonts/dm-sans-latin.woff2",
  "fonts/dm-sans-latin-ext.woff2",
  "js/admin.js",
  "js/admin-chat.js",
  "js/auth.js",
  "js/firebase-config.js",
  "js/firebase-db.js",
  "../js/chat-db.js",
  "js/telegram.js",
  "manifest.json",
  "FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",
  "USER-ICON/2288510.png",
  "ICONS/icon-192.png",
  "ICONS/icon-512.png",
  "ICONS/icon-maskable-512.png",
  "ICONS/apple-touch-icon.png"
];

/* Never cache these - data and login must always be fresh */
var SKIP = [
  "googleapis.com",
  "firebase",
  "gstatic.com",
  "identitytoolkit",
  "api.telegram.org"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION)
      /* ek file fail ho to baaki install na ruke */
      .then(function (c) { return Promise.allSettled(SHELL.map(function (u) { return c.add(u); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === VERSION ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;

  if (req.method !== "GET") return;

  var url = new URL(req.url);

  /* Google / Firebase / Telegram -> seedha network */
  if (SKIP.some(function (s) { return url.href.indexOf(s) !== -1; })) return;
  if (url.origin !== self.location.origin) return;

  /* navigation: network first, then cache, then index.html */
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(function (res) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
          return res;
        })
        .catch(function () {
          return caches.match(req).then(function (r) {
            return r || caches.match("index.html");
          });
        })
    );
    return;
  }

  /* other assets: cache first, then refresh from the network */
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;

      return fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
