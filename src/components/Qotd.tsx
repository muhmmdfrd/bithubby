import React from "react";
import Admonition from "@theme/Admonition";

interface QotdProps {
  apiKey: string;
}

export function Qotd({ apiKey }: QotdProps): JSX.Element {
  const [quote, setQuote] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isDebug] = React.useState<boolean>(
    process.env.NODE_ENV === "development"
  );

  React.useEffect(() => {
    setLoading(true);

    if (process.env.NODE_ENV === "development") return;

    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const body = result[0];
        setQuote(body.quote);
        setAuthor(body.author);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Admonition title={"QOTD"} type={"success"}>
      {isDebug ? (
        "debug mode"
      ) : loading ? (
        "..."
      ) : (
        <i>
          "{quote}" <br /> <br /> ~{author}
        </i>
      )}
    </Admonition>
  );
}
