/* eslint-disable no-template-curly-in-string */
import React from "react";
// import "./featureProducts.css";
import Card from "../Card/Card";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "flowbite-react";
import { FeatureProductsProps, ProductProps } from "../../types/types";

const FeatureProducts = ({ type }: FeatureProductsProps) => {
  const { productData, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts lg:px-10 md:my-7 mt-4">
      <div className="top flex gap-5 w-full mb-5 lg:mb-12 px-5">
        <h1 className="text-xl w-2/3 font-bold uppercase flex items-center lg:pl-20">{type} products</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. 
        </p>
      </div>
      <div className="bottom flex gap-5 justify-center px-5">
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
