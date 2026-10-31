/* ==========================================
   4R BET  |  Firebase Configuration
   Project: rabet-60dae
   --------------------------------------------------------------
   Ye project ka SIRF ek hi file hai jahan Firebase keys hain.
   Naya Firebase project lena ho to bas yahan values badal do -
   user panel aur admin panel dono automatically naye project
   par chale jayenge.

   Setup steps (kya-kya enable karna hai): FIREBASE-SETUP.md
   ========================================== */

window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDMiJtjzMOoB59sdFDFqZG9kRjAQKcIYfA",
  authDomain:        "rabet-60dae.firebaseapp.com",
  projectId:         "rabet-60dae",
  storageBucket:     "rabet-60dae.firebasestorage.app",
  messagingSenderId: "507442462353",
  appId:             "1:507442462353:web:9f8398e8dd6a5d02dc4930"
};

/* Firestore collections (names same as the old project) */
window.FIREBASE_COLLECTION      = "complaints";
window.FIREBASE_CHAT_COLLECTION = "chats";
