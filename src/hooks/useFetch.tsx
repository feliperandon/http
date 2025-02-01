import { useState, useEffect } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch(url);

      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  const updateData = (newData: T) => {
    setData(newData);
  };

  return { data, updateData };
};
