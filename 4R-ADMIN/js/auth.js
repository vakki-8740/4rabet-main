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

        throw new Error(friendly(code, err && err.message) + m);
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
    keepSignedIn: keepSignedIn,
    requireLogin: requireLogin,
    signOut: signOut,
    current: current
  };

})();
