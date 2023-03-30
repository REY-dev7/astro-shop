/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from "react";
import "./featureProducts.css";
import Card from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "flowbite-react";
import { FeatureProductsProps, ProductProps } from "../../types/types";

const FeatureProducts = ({ type }: FeatureProductsProps) => {
  const { productData, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1 className="text-xl font-bold">{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error ? (
          "Something went wrong!"
        ) : loading ? (
          <Spinner aria-label="Default status example" size="xl" />
        ) : (
          productData &&
          productData.map((product: ProductProps) => (
            <Card product={product} key={product?.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
