importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBP4gLgwDIjpWYlCgMvZc1aXO7l5BznRV4",
  authDomain: "sadak-seva-c7f1e.firebaseapp.com",
  projectId: "sadak-seva-c7f1e",
  storageBucket: "sadak-seva-c7f1e.appspot.com",
  messagingSenderId: "777692034923",
  appId: "1:777692034923:web:f7cb2ec88f77dc2e4b7e2e",
  measurementId: "G-JCF7RZ75WE",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
