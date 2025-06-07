import { useState, useEffect } from "react";

export default function useAPICall() {
  const [catData, setCatData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getCats() {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCats();
  }, []);

  return { catData, loading, error };
}
