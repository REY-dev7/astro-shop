import React, { useState } from "react";
import "./singleProduct.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { images } from "./data";

type Props = {};

const SingleProduct = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<any>(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e: any) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e: any) => setSelectedImage(1)} />
          <img src={images[2]} alt="" onClick={(e: any) => setSelectedImage(2)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="text-lg font-bold">Title</h1>
        <span >$9009</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae
          facere, ab ut nihil eaque dolorum? Facere repellat asperiores odio?
          Nam hic assumenda laudantium natus quia tenetur cumque error sint!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add uppercase">
          <AddShoppingCartIcon />
          Add To Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
