import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCxebpiUJ75-d2dwuNFLjdJR25uFeOOMs",
  authDomain: "bithubby-notifier.firebaseapp.com",
  projectId: "bithubby-notifier",
  storageBucket: "bithubby-notifier.appspot.com",
  messagingSenderId: "524522615509",
  appId: "1:524522615509:web:cbe8c00c49ab53f6aae85c",
  measurementId: "G-MX1ZBTPN3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: firebaseConfig.apiKey }).then((token) => {
  if (token) {
    console.log(token);
  }
});
