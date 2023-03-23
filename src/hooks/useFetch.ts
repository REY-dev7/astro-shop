import React, { useEffect, useState } from "react";
import { makeRequest } from "../utils/makeRequest";

export const useFetch = (url: string) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url);        
        setProductData(res?.data?.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
      finally{setLoading(false)}
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { productData, error, loading };
};
