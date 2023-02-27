import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

type CardProps = {
  product: any;
};

const Card = ({ product }: CardProps) => {
  console.log("products...", product);

  return (
    <Link to={`/product/${product.id}`} className="link">
      <div className="card">
        <div className="image">
            {product?.isNew && <span>New Season</span>}
          <img src={product?.img} alt="" className="mainImg" />
          <img src={product?.img2} alt="" className="secondImg" />
        </div>
        <h1>{product?.title}</h1>
        <div className="prices">
            <h3>{product?.oldPrice}</h3>
            <h3>{product?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
