import { useState, useEffect } from "react";

function useCurrencyApi(currency) {
  let date = new Date().toISOString().slice(0, 10);

  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`;

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => setData(res[currency]));
  }, [url, currency]);

  return data;
}

export default useCurrencyApi;
