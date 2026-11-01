/* ==========================================
   4R-ADMIN  |  auth.js
   Firebase Authentication se admin login.

   - First login: the account is created automatically
   - The password is NEVER stored in the code
   - Only the admin email may read complaints (see the rules)
   ========================================== */

window.FourRAuth = (function () {
  "use strict";

  var auth = null;
  var user = null;
  var db   = null;

  /* ---------- login limit ---------- */
  var MAX_PER_DAY = 5;               /* a password login may be used 5 times a day */
  var LOGIN_COL   = "adminLogins";   /* collection that stores the login history */

  /* start of today (local time) in milliseconds */
  function dayStart() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
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

  function sdk() {
    var FB = window.firebase;
    if (!FB || !FB.auth) return null;

    if (!FB.apps || !FB.apps.length) {
      FB.initializeApp(window.FIREBASE_CONFIG);
    }

    if (!auth) auth = FB.auth();
    return auth;
  }

  function email() {
    /* must match the email in the Firestore rules */
    return "4r@admin.com";
  }

  function current() { return user; }

  /* ==========================================
     AUTO LOGIN
     The session is stored in the browser, so after closing
     and reopening the app you stay signed in and do not have
     to type the password again.
     ========================================== */
  function keepSignedIn() {
    var A = sdk();
    if (!A) return Promise.resolve(false);

    try {
      return A.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL)
        .then(function () { return true; })
        .catch(function () { return false; });
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  /* ---------- Firestore (only needed for the login history) ---------- */
  function fs() {
    var FB = window.firebase;
    if (!FB || !FB.firestore) return null;

    if (!FB.apps || !FB.apps.length) {
      if (!window.FIREBASE_CONFIG) return null;
      FB.initializeApp(window.FIREBASE_CONFIG);
    }

    if (!db) db = FB.firestore();
    return db;
  }

  /* Write one entry to the login history. Never blocks the login itself. */
  function logLogin(result, mail) {
    var D = fs();
    if (!D) return Promise.resolve(false);

    var i = parseUA(navigator.userAgent || "");

    return D.collection(LOGIN_COL).add({
      email:     (mail || email()).toLowerCase(),
      at:        Date.now(),
      result:    result,             /* success | blocked | failed */
      device:    i.device,
      browser:   i.browser,
      os:        i.os,
      userAgent: (navigator.userAgent || "").slice(0, 300)
    })
      .then(function () { return true; })
      .catch(function () { return false; });
  }

  /* How many successful logins today (local day)? */
  function countTodayLogins() {
    var D = fs();
    if (!D) return Promise.resolve(0);

    return D.collection(LOGIN_COL)
      .orderBy("at", "desc")
      .limit(80)
      .get()
      .then(function (snap) {
        var start = dayStart();
        var n = 0;

        snap.forEach(function (doc) {
          var d = doc.data() || {};
          if (d.result === "success" && Number(d.at) >= start) n++;
        });

        return n;
      })
      .catch(function () { return 0; });
  }

  /* The last N logins, newest first (used by Settings). */
  function loginHistory(limit) {
    var D = fs();
    if (!D) return Promise.resolve([]);

    return D.collection(LOGIN_COL)
      .orderBy("at", "desc")
      .limit(limit || 15)
      .get()
      .then(function (snap) {
        var list = [];

        snap.forEach(function (doc) {
          var d = doc.data() || {};
          list.push({
            id:      doc.id,
            at:      Number(d.at) || 0,
            result:  d.result || "",
            email:   d.email || "",
            device:  d.device || "",
            browser: d.browser || "",
            os:      d.os || ""
          });
        });

        return list;
      })
      .catch(function () { return []; });
  }

  /* After Firebase accepted the password: is today's limit still free? */
  function afterAuth(A) {
    return countTodayLogins().then(function (used) {
      if (used >= MAX_PER_DAY) {
        return logLogin("blocked").then(function () {
          return A.signOut().then(function () {
            var e = new Error(
              "Daily login limit reached (" + MAX_PER_DAY + " logins per day). " +
              "Please try again tomorrow."
            );
            e.code = "app/daily-limit";
            throw e;
          });
        });
      }

      return logLogin("success");
    });
  }

  /* ---------- readable error ---------- */
  function friendly(code, msg) {
    switch (code) {
      case "auth/configuration-not-found":
      case "auth/operation-not-allowed":
        return "Login is disabled right now. Open Firebase Console > Authentication > " +
               "Sign-in method, turn ON \"Email/Password\" and try again.";

      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
      case "auth/invalid-login-credentials":
        return "The email or password is incorrect.";

      case "auth/email-already-in-use":
        return "This email is already registered. Please enter your password.";

      case "auth/invalid-email":
        return "The email is not valid.";

      case "auth/weak-password":
        return "The password must be at least 6 characters long.";

      case "auth/too-many-requests":
        return "Too many attempts. Please try again in a little while.";

      case "auth/network-request-failed":
        return "You are offline. Please check your internet connection.";

      case "auth/api-key-not-valid":
        return "The Firebase API key is not valid (check firebase-config.js).";
    }
    return msg || "Login failed. Please try again.";
  }

  /* ---------- sign in (creates the account if it does not exist) ---------- */
  function signIn(mail, pass) {
    var A = sdk();
    if (!A) return Promise.reject(new Error("The Firebase Auth SDK did not load"));

    /* keep the session in the browser after login */
    return keepSignedIn().then(function () {
      return A.signInWithEmailAndPassword(mail, pass);
    })
      .catch(function (err) {
        var code = err && err.code;
        var m = err && err.message ? " (" + err.message + ")" : "";

        if (code === "auth/user-not-found" || code === "auth/invalid-credential" ||
            code === "auth/wrong-password") {
          /* no account yet -> create it, then sign in */
          return A.createUserWithEmailAndPassword(mail, pass)
            .then(function (res) {
              return { user: res.user, created: true };
            })
            .catch(function (e2) {
              throw new Error(friendly(e2 && e2.code, e2 && e2.message) +
                              (e2 && e2.code ? " [" + e2.code + "]" : ""));
            });
        }

        logLogin("failed", mail);
        throw new Error(friendly(code, err && err.message) + m);
      })
      .then(function (res) {
        /* Firebase accepted the password - now check the daily limit */
        return afterAuth(A).then(function () { return res; });
      });
  }

  /* ---------- login is required ---------- */
  function requireLogin(backTo) {
    return new Promise(function (resolve) {
      var A = sdk();

      if (!A) {
        location.replace("login.html?err=sdk");
        return;
      }

      var done = false;

      /* pick up an existing session (if any) in LOCAL mode */
      keepSignedIn();

      A.onAuthStateChanged(function (u) {
        if (done) return;

        if (u) {
          done = true;
          user = u;
          document.body.style.visibility = "";
          resolve(u);
        } else {
          var to = "login.html" +
            (backTo ? "?next=" + encodeURIComponent(backTo) : "");
          location.replace(to);
        }
      });
    });
  }

  function signOut() {
    var A = sdk();
    if (!A) return Promise.resolve();
    document.body.style.visibility = "hidden";
    return A.signOut().then(function () { location.replace("login.html"); });
  }

  return {
    adminEmail: email,
    signIn: signIn,
    maxPerDay: function () { return MAX_PER_DAY; },
    todayLogins: countTodayLogins,
    loginHistory: loginHistory,
    logLogin: logLogin,
    keepSignedIn: keepSignedIn,
    requireLogin: requireLogin,
    signOut: signOut,
    current: current
  };

})();
