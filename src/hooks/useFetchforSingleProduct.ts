import { useEffect, useState } from "react";
import { ProductProps } from "../types/types";
import { makeRequest } from "../utils/makeRequest";
import { useParams } from "react-router-dom";

export const useFetchforSingleProduct = () => {
  const [singleProductData, setSingleProductData] = useState<ProductProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const productId = useParams().id;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(`/products/${productId}?populate=*`);
        if (res.status === 200) {
          setSingleProductData(res?.data?.data);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);
  return { singleProductData, loading, error };
};
