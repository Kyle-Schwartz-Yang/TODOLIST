import { useState, useEffect, useCallback } from "react";

export default function useHttp() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const clearError = useCallback(() => setError(null), []);
  // --------------------------------------------------------------
  const buildOptions = (cfg = {}) => {
    const defaultOptions = {
      method: "GET",
      body: null,
      headers: {
        "Content-Type": "application/json",
      },
    };

    return Object.assign({}, defaultOptions, cfg);
  };
  // --------------------------------------------------------------

  const request = useCallback(async (url, flagLoading, initialOptions = {}) => {
    const options = buildOptions(initialOptions);

    setLoading(flagLoading);
    setError(null); // Альтернатива для ClearError
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { isLoading, error, request };
}
