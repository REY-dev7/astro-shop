import React, { useEffect, useState } from "react";
import { makeRequest } from "../utils/makeRequest";
import { ProductProps } from "../types/types";

export const useFetch = (url: string) => {  
  const [productData, setProductData] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url);
        if(res.status === 200){
          setProductData([...res?.data?.data]);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
      finally{setLoading(false)}
    };
    fetchData();
  }, [url]);
  
  return { productData, error, loading };
};
