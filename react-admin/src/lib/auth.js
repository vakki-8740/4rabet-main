import { FB, getAuth, ADMIN_EMAIL } from "./fb.js";

export { ADMIN_EMAIL };

function friendly(code, msg) {
  switch (code) {
    case "auth/configuration-not-found":
    case "auth/operation-not-allowed":
      return (
        "Login is disabled right now. Open Firebase Console > Authentication > " +
        'Sign-in method, turn ON "Email/Password" and try again.'
      );
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

function keepSignedIn(A) {
  try {
    return A.setPersistence(FB.auth.Auth.Persistence.LOCAL)
      .then(() => true)
      .catch(() => false);
  } catch (e) {
    return Promise.resolve(false);
  }
}

export function signIn(mail, pass) {
  const A = getAuth();

  return keepSignedIn(A)
    .then(() => A.signInWithEmailAndPassword(mail, pass))
    .catch((err) => {
      const code = err && err.code;
      const m = err && err.message ? " (" + err.message + ")" : "";

      if (
        code === "auth/user-not-found" ||
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password"
      ) {
        return A.createUserWithEmailAndPassword(mail, pass)
          .then((res) => ({ user: res.user, created: true }))
          .catch((e2) => {
            throw new Error(
              friendly(e2 && e2.code, e2 && e2.message) +
                (e2 && e2.code ? " [" + e2.code + "]" : "")
            );
          });
      }

      throw new Error(friendly(code, err && err.message) + m);
    });
}

export function signOut() {
  const A = getAuth();
  return A.signOut();
}

export function onAuth(cb) {
  const A = getAuth();
  keepSignedIn(A);
  return A.onAuthStateChanged(cb);
}
