import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./list.css";
import { useFetch } from "../../hooks/useFetch";
import { ProductProps } from "../../types/types";
import { Spinner } from "flowbite-react";

type ListProps = {
  catId: number;
  maxPrice: number;
  sort: string | null;
  subCates: any[];
};

const List = ({ catId, maxPrice, sort, subCates }: ListProps) => {
  let { productData, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCates.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  
  return (
    <div className="list">
      {loading ? (
        <div className="flex justify-center w-full">
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
