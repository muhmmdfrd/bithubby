import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "axios";
import { config } from "../configs";

const firebaseConfig = {
  apiKey: "AIzaSyDCxebpiUJ75-d2dwuNFLjdJR25uFeOOMs",
  authDomain: "bithubby-notifier.firebaseapp.com",
  projectId: "bithubby-notifier",
  storageBucket: "bithubby-notifier.appspot.com",
  messagingSenderId: "524522615509",
  appId: "1:524522615509:web:cbe8c00c49ab53f6aae85c",
  measurementId: "G-MX1ZBTPN3V",
};

const getClient = async () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
    const fpPromise = FingerprintJS.load({ monitoring: false });
    const fp = await fpPromise;
    const result = await fp.get();
    const { components, visitorId } = result;
    const { platform } = components;

    await axios.post(config.url, {
      userAgent: navigator.userAgent,
      platform: platform.value,
      visitorId: visitorId,
    });
  }
};

export { getClient };
