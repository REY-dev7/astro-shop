import React from "react";
import "./featureProducts.css";
import Card from "../Card/Card";
import { productData } from "./productsData";

interface Props  {
    type: string
};

const FeatureProducts = ({type}: Props) => {
  return <div className="featuredProducts">
    <div className="top">
        <h1 className="text-xl font-bold">{type}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
    </div>
    <div className="bottom">
        {productData && productData.map((product:any)=>(
            <Card product={product} key={product?.id} />
        ))}
    </div>
  </div>;
};

export default FeatureProducts;
