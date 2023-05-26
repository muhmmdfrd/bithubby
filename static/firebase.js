import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCxebpiUJ75-d2dwuNFLjdJR25uFeOOMs",
  authDomain: "bithubby-notifier.firebaseapp.com",
  projectId: "bithubby-notifier",
  storageBucket: "bithubby-notifier.appspot.com",
  messagingSenderId: "524522615509",
  appId: "1:524522615509:web:cbe8c00c49ab53f6aae85c",
  measurementId: "G-MX1ZBTPN3V",
};
const vapidKey =
  "BMY-hbC6SCixRikKXzo0wyGS4qaB71ajRoOAyMQzJi0C7zYJ-xAcZ5n9r9g1oaeKSRh8u28jjM8Fvf_CJIbTP_Q";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const firestore = getFirestore();
const collectionName = "devices";

getToken(messaging, {
  vapidKey: vapidKey,
})
  .then(async (token) => {
    const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then(
      (FingerprintJS) => FingerprintJS.load()
    );
    const fp = await fpPromise;
    const result = await fp.get();
    const { visitorId } = result;

    await setDoc(
      doc(firestore, collectionName, visitorId),
      {
        device_id: visitorId,
        firebase_token: token,
      },
      { merge: true }
    );
  })
  .catch((err) =>
    console.log("An error occurred while retrieving token. ", err)
  );
