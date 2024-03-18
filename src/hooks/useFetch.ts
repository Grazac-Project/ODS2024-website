import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [isLoading, setisLoading] = useState(false);
  const [Data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.json);
        setisLoading(false);
      } catch (e: any) {
        setError(e);
        setisLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, Data, Error };
};
