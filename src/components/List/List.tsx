import React from "react";
import Card from "../Card/Card";
import "./list.css";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/types";
import { Spinner } from "flowbite-react";

type ListProps = {
  catId: number;
  maxPrice: number;
  sort: string;
  subCates: any[];
};

const List = ({ catId, maxPrice, sort, subCates }: ListProps) => {
  let { productData, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCates.map(
      (product) => `&[filters][sub_categories][id][$eq]=${product}`
    )}&[filters][price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ""}`
  );

  return (
    <div className="list grid  lg:grid-cols-3 grid-cols-2 ">
      {loading ? (
        <div className="flex justify-center">
          <Spinner aria-label="Default status example" size="xl" />
        </div>
      ) : (
        productData?.map((product: ProductProps) => (
          <Card product={product} key={product?.id} />
        ))
      )}
    </div>
  );
};

export default List;
