/* ==========================================
   4R-ADMIN  |  pwa.js
   For installing the app on a phone:
   - registers the Service Worker
   - install button (menu + settings)
   ========================================== */

window.FourRPwa = (function () {
  "use strict";

  var deferred = null;   /* install prompt captured by the browser */
  var swReg = null;

  /* ---------- Service Worker ---------- */
  function registerSW() {
    if (!("serviceWorker" in navigator)) return Promise.resolve(null);

    /* service workers do not run on file:// - skip there */
    if (location.protocol === "file:") return Promise.resolve(null);

    return navigator.serviceWorker.register("sw.js")
      .then(function (reg) {
        swReg = reg;
        return reg;
      })
      .catch(function () { return null; });
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches ||
           window.navigator.standalone === true;
  }

  /* ---------- Install prompt ---------- */
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    showInstallButtons(true);
  });

  window.addEventListener("appinstalled", function () {
    deferred = null;
    showInstallButtons(false);
    document.body.setAttribute("data-installed", "1");
  });

  function canInstall() { return !!deferred; }
  function installed() { return isStandalone(); }

  /* ---------- Buttons dikhaao / chhupao ---------- */
  function showInstallButtons(show) {
    document.querySelectorAll("[data-install]").forEach(function (b) {
      b.style.display = show ? "" : "none";
    });
  }

  /* ---------- Install chalao ---------- */
  function promptInstall() {
    if (deferred) {
      deferred.prompt();
      return deferred.userChoice
        .then(function (r) {
          deferred = null;
          showInstallButtons(false);
          return r && r.outcome === "accepted";
        })
        .catch(function () { return false; });
    }

    /* the browser gave no prompt (Safari/iOS) -> show a guide */
    var msg = isIOS()
      ? "On iPhone: tap the share icon in Safari, then choose \"Add to Home Screen\"."
      : "Open the Chrome menu (3 dots) and choose \"Add to Home screen\" / \"Install app\".";

    if (window.AdminPanel) window.AdminPanel.toast(msg, true);
    return Promise.resolve(false);
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
           (window.navigator.platform === "MacIntel" &&
            window.navigator.maxTouchPoints > 1);
  }

  /* ---------- Wire up the buttons ---------- */
  function bind(selector) {
    document.querySelectorAll(selector).forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        promptInstall();
      });
    });
  }

  function init() {
    registerSW();

    /* hide the button when the app is already installed */
    if (installed()) {
      document.body.setAttribute("data-installed", "1");
      showInstallButtons(false);
      return;
    }

    bind("[data-install]");

    /* check after 1.5s: is the prompt available */
    setTimeout(function () {
      if (!canInstall()) showInstallButtons(false);
    }, 1500);
  }

  return {
    init: init,
    registerSW: registerSW,
    promptInstall: promptInstall,
    canInstall: canInstall,
    installed: installed,
    isIOS: isIOS,
    showInstallButtons: showInstallButtons
  };

})();
