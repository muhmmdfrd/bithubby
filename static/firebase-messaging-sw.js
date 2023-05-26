importScripts(
  "https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDCxebpiUJ75-d2dwuNFLjdJR25uFeOOMs",
  authDomain: "bithubby-notifier.firebaseapp.com",
  projectId: "bithubby-notifier",
  storageBucket: "bithubby-notifier.appspot.com",
  messagingSenderId: "524522615509",
  appId: "1:524522615509:web:cbe8c00c49ab53f6aae85c",
  measurementId: "G-MX1ZBTPN3V",
});

const messaging = firebase.messaging();
