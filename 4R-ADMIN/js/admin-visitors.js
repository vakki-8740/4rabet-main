/* ==========================================
   4R-ADMIN  |  admin-visitors.js
   --------------------------------------------------------------
   Reads the `visitors` collection and shows:

     - how many people opened the site
     - how many of them sent a complaint
     - how many only looked around and left

   One document = one browser (anonymous visitor id).
   ========================================== */

window.FourRVisitors = (function () {
  "use strict";

  var COL = "visitors";
  var LIMIT = 300;           /* newest 300 browsers is plenty for the list */

  var db = null;
  var all = [];
  var filter = "all";        /* all | complained | visit_only */
  var search = "";
  var listeners = [];

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

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function fmt(ts) {
    if (!ts) return "-";
    var d = new Date(Number(ts));
    if (isNaN(d.getTime())) return "-";

    var today = new Date();
    var sameDay = d.toDateString() === today.toDateString();

    var time = pad(d.getHours()) + ":" + pad(d.getMinutes());

    return sameDay
      ? "Today " + time
      : pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() + " " + time;
  }

  function dayStart() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }

  function shortId(vid) {
    var v = String(vid || "");
    return v.length > 12 ? v.slice(0, 12) + "..." : v;
  }

  /* ---------- load ---------- */

  function load() {
    var D = sdk();

    if (!D) {
      paint([], "The Firebase SDK did not load.");
      return Promise.resolve([]);
    }

    return D.collection(COL)
      .orderBy("lastSeen", "desc")
      .limit(LIMIT)
      .get()
      .then(function (snap) {
        var list = [];

        snap.forEach(function (doc) {
          var d = doc.data() || {};
          list.push({
            vid:        d.vid || doc.id,
            name:       d.name || "",
            firstSeen:  Number(d.firstSeen) || 0,
            lastSeen:   Number(d.lastSeen) || 0,
            visits:     Number(d.visits) || 0,
            pages:      Array.isArray(d.pages) ? d.pages : [],
            device:     d.device || "",
            browser:    d.browser || "",
            os:         d.os || "",
            complained: !!d.complained,
            complaints: Number(d.complaints) || 0,
            lastPage:   d.lastPage || ""
          });
        });

        paint(list, "");
        return list;
      })
      .catch(function (err) {
        paint([], (err && err.message) || "Could not read the visitor data.");
        return [];
      });
  }

  /* ---------- statistics ---------- */

  function stats(list) {
    var start = dayStart();
    var s = { total: list.length, today: 0, complained: 0, visitOnly: 0, visits: 0 };

    list.forEach(function (v) {
      s.visits += v.visits;

      if (v.lastSeen >= start) s.today++;

      if (v.complained) s.complained++;
      else s.visitOnly++;
    });

    return s;
  }

  /* ---------- rendering ---------- */

  function visible() {
    var q = search.trim().toLowerCase();

    return all.filter(function (v) {
      if (filter === "complained" && !v.complained) return false;
      if (filter === "visit_only" && v.complained) return false;

      if (!q) return true;

      return (v.name + " " + v.vid + " " + v.device + " " + v.browser + " " + v.os)
        .toLowerCase().indexOf(q) >= 0;
    });
  }

  function rowHtml(v) {
    var pages = v.pages.filter(function (p) { return p !== "index.html"; }).length;

    return '' +
      '<div class="adm-vis">' +
        '<div class="adm-vis-top">' +
          '<span class="adm-vis-name">' + (v.name ? esc(v.name) : "Guest " + esc(shortId(v.vid))) + '</span>' +
          (v.complained
            ? '<span class="adm-vis-tag is-yes">Complained' +
                (v.complaints > 1 ? " (" + v.complaints + ")" : "") + '</span>'
            : '<span class="adm-vis-tag">Visit only</span>') +
        '</div>' +
        '<div class="adm-vis-meta">' +
          '<span>' + esc(v.device || "-") + '</span>' +
          '<span>' + esc(v.browser || "-") + '</span>' +
          '<span>' + esc(v.os || "-") + '</span>' +
        '</div>' +
        '<div class="adm-vis-meta adm-vis-meta--soft">' +
          '<span>' + v.visits + (v.visits === 1 ? " visit" : " visits") + '</span>' +
          '<span>' + pages + (pages === 1 ? " page" : " pages") + '</span>' +
          '<span>Last: ' + fmt(v.lastSeen) + '</span>' +
        '</div>' +
      '</div>';
  }

  function paint(list, error) {
    all = list || [];

    var box = document.getElementById("visitorList");
    var s = stats(all);

    var el;
    el = document.getElementById("vTotal");   if (el) el.textContent = s.total;
    el = document.getElementById("vToday");   if (el) el.textContent = s.today;
    el = document.getElementById("vComplained"); if (el) el.textContent = s.complained;
    el = document.getElementById("vOnly");    if (el) el.textContent = s.visitOnly;
    el = document.getElementById("vCount");   if (el) el.textContent = all.length;

    if (!box) return;

    if (error) {
      box.innerHTML =
        '<div class="adm-empty">' +
          '<h3>Could not load visitors</h3>' +
          '<p>' + esc(error) + '</p>' +
          '<p style="margin-top:10px;font-size:13px">Publish the latest firestore.rules so the ' +
          '<b>visitors</b> collection can be read by the admin.</p>' +
        '</div>';
      return;
    }

    var rows = visible();

    if (!all.length) {
      box.innerHTML =
        '<div class="adm-empty">' +
          '<h3>No visitors recorded yet</h3>' +
          '<p>Open the user panel once and this page will start filling up.</p>' +
        '</div>';
      return;
    }

    if (!rows.length) {
      box.innerHTML =
        '<div class="adm-empty"><h3>Nothing matches</h3>' +
        '<p>Try another filter or search word.</p></div>';
      return;
    }

    box.innerHTML = rows.map(rowHtml).join("");
  }

  /* ---------- filters ---------- */

  function setFilter(name) {
    filter = name;

    document.querySelectorAll("[data-vis-filter]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-vis-filter") === name);
    });

    paint(all, "");
  }

  function setSearch(value) {
    search = value || "";
    paint(all, "");
  }

  /* ---------- CSV export ---------- */

  function csv() {
    var head = ["Visitor ID", "Name", "Device", "Browser", "OS", "Visits", "Pages",
                "Complained", "Complaints", "First Seen", "Last Seen"];

    var lines = [head.join(",")];

    visible().forEach(function (v) {
      lines.push([
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
      ].map(function (c) {
        return '"' + String(c == null ? "" : c).replace(/"/g, '""') + '"';
      }).join(","));
    });

    var blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "4rbet-visitors-" + new Date().toISOString().slice(0, 10) + ".csv";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  /* ---------- live updates ---------- */

  function subscribe() {
    var D = sdk();
    if (!D || listeners.length) return;

    try {
      listeners.push(
        D.collection(COL).orderBy("lastSeen", "desc").limit(LIMIT)
          .onSnapshot(function (snap) {
            var list = [];
            snap.forEach(function (doc) {
              var d = doc.data() || {};
              list.push({
                vid: d.vid || doc.id, name: d.name || "",
                firstSeen: Number(d.firstSeen) || 0, lastSeen: Number(d.lastSeen) || 0,
                visits: Number(d.visits) || 0,
                pages: Array.isArray(d.pages) ? d.pages : [],
                device: d.device || "", browser: d.browser || "", os: d.os || "",
                complained: !!d.complained, complaints: Number(d.complaints) || 0,
                lastPage: d.lastPage || ""
              });
            });
            paint(list, "");
          }, function () {})
      );
    } catch (e) { /* ignore - the load() call already shows the data */ }
  }

  return {
    load: load,
    subscribe: subscribe,
    stats: stats,
    paint: paint,
    setFilter: setFilter,
    setSearch: setSearch,
    csv: csv,
    fmt: fmt,
    esc: esc
  };

})();
