import React from "react";
import { productData } from "../featureProducts/productsData";
import Card from "../Card/Card";
import "./list.css"

type ListProps = {
    catId: number;
    maxPrice: number;
    sort: string | null;
};

const List = ({catId, maxPrice, sort}: ListProps) => {
  return (
    <div className="list">
      {productData?.map((product: any) => (
        <Card product={product} key={product?.id} />
      ))}
    </div>
  );
};

export default List;
