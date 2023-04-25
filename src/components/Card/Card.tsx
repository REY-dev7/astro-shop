import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { ProductProps } from "../../types/types";

const Card = ({ product }: { product: ProductProps }) => {
  const getImage = process.env.REACT_APP_UPLOAD_URL;

  return (
    <Link to={`/product/${product?.id}`} className="mb-8 shadow-md">
      <div className="card w-40 md:w-72 lg:w-[280px]">
        <div className="image h-40 md:h-80 lg:h-[400px]">
          {product?.attributes?.isNew && <span>New Season</span>}
          <img
            src={getImage + product?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
          <img
            src={getImage + product?.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="secondImg"
          />
        </div>
        <h1 className="font-bold pl-2">{product?.attributes?.title}</h1>
        <div className="prices pl-2">
          <h3>${product?.attributes?.price + 20}</h3>
          <h3>${product?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
