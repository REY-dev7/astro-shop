/* eslint-disable no-template-curly-in-string */
import React from "react";
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
    <div className=" px-2 md:px-10 lg:px-40 w-full">
      <div className="flex gap-4 max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl my-5 md:my-10 ">
        <h1 className="text-xl w-2/3 font-bold uppercase flex items-center lg:pl-10">
          {type} products
        </h1>
        <p className="tracking-wide text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div className="flex gap-5 w-full overflow-x-auto">
        {error ? (
          "Something went wrong!"
        ) : loading ? (
          <div className="flex justify-center items-center h-40 w-full">
            <Spinner aria-label="Default status example" size="xl" />
          </div>
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
