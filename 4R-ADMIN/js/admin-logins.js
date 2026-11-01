/* ==========================================
   4R-ADMIN  |  admin-logins.js
   --------------------------------------------------------------
   Login history + the daily login limit, shown on the
   Settings page.

     - today's logins  (used / limit)
     - the last logins, newest first (success / blocked / failed)

   The records live in the `adminLogins` collection.
   ========================================== */

window.FourRLogins = (function () {
  "use strict";

  var LIMIT = 10;

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

  function badge(result) {
    if (result === "success") return '<span class="adm-log-tag is-ok">Success</span>';
    if (result === "blocked") return '<span class="adm-log-tag is-warn">Limit hit</span>';
    return '<span class="adm-log-tag is-bad">Failed</span>';
  }

  function rowHtml(entry) {
    var dev = [entry.device, entry.browser].filter(Boolean).join(" / ");

    return '' +
      '<div class="adm-log">' +
        '<div class="adm-log-main">' +
          '<span class="adm-log-time">' + fmt(entry.at) + '</span>' +
          badge(entry.result) +
        '</div>' +
        '<div class="adm-log-sub">' + esc(dev || "Unknown device") +
          (entry.os ? " &middot; " + esc(entry.os) : "") +
        '</div>' +
      '</div>';
  }

  function paintHistory(list, today, max) {
    var countEl = document.getElementById("loginToday");
    var maxEl   = document.getElementById("loginMax");
    var lastEl  = document.getElementById("loginLast");
    var listEl  = document.getElementById("loginList");

    if (maxEl) maxEl.textContent = max;

    if (countEl) {
      countEl.textContent = today;
      countEl.style.color = today >= max ? "var(--no)" : "";
    }

    if (lastEl) {
      var last = list.filter(function (e) { return e.result === "success"; })[0];
      lastEl.textContent = last ? fmt(last.at) : "-";
    }

    if (!listEl) return;

    if (!list.length) {
      listEl.innerHTML = '<div class="adm-empty" style="padding:22px 0">' +
        '<h3>No logins recorded yet</h3>' +
        '<p>Every login (and every blocked attempt) is saved here.</p></div>';
      return;
    }

    listEl.innerHTML = list.map(rowHtml).join("");
  }

  function load() {
    var A = window.FourRAuth;

    if (!A || !A.loginHistory) {
      paintHistory([], 0, 5);
      return Promise.resolve([]);
    }

    var max = A.maxPerDay ? A.maxPerDay() : 5;

    return A.loginHistory(LIMIT).then(function (list) {
      var count = list.filter(function (e) {
        var d = new Date(e.at);
        var t = new Date();
        return e.result === "success" && d.toDateString() === t.toDateString();
      }).length;

      paintHistory(list, count, max);
      return list;
    });
  }

  return {
    load: load,
    paintHistory: paintHistory,
    fmt: fmt
  };

})();
