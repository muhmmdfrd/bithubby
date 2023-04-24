import FingerprintJS from "@fingerprintjs/fingerprintjs";
import axios from "axios";
import { config } from "../configs";

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
