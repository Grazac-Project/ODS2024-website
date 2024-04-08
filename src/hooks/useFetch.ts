import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { isLoading, data, error, refetch };
};
