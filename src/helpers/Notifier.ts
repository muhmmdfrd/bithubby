import FingerprintJS from "@fingerprintjs/fingerprintjs";

const notify = (telegramToken: string) => {
  const fpPromise = FingerprintJS.load();

  (async () => {
    const fp = await fpPromise;
    const {
      components: { platform },
    } = await fp.get();

    // @ts-ignore
    const userAgent = platform.value.toLowerCase();
    if (userAgent === "iphone" || userAgent === "linux x86_64") {
      return;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      text: `Hello, there new visitors with user agent ${userAgent}`,
      chat_id: 612060297,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      requestOptions
    )
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  })();
};

export default notify;
