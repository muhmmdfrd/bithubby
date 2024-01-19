import React from "react";
import Admonition from "@theme/Admonition";

export function Qotd(): JSX.Element {
  const [quote, setQuote] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);

    fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "NF2YGTjMkpJUWK3KDP4iFg==bQLunz9kLSqBA9UZ",
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
      {loading ? (
        "..."
      ) : (
        <i>
          "{quote}" <br /> <br /> ~{author}
        </i>
      )}
    </Admonition>
  );
}
