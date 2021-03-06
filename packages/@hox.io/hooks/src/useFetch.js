import { useState, useEffect } from "react";

export default function useFetch(url, callback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    callback(json);
    setLoading(false);
  }

  useEffect(
      () => fetchUrl(),
      []
    );

  return [data, loading];
}