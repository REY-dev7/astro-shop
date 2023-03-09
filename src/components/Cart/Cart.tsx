import React from "react";
import { productData } from "../featureProducts/productsData";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.css";

type CartProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ setOpen }: CartProps) => {
  return (
    <div className="cart shadow-2xl bg-slate-200">
      <div className="flex justify-between">
        <h1>Products in your cart</h1>
        <p
          className="text-red-700 font-extrabold text-lg cursor-pointer"
          onClick={() => setOpen(false)}
        >
          X
        </p>
      </div>
      <div className="h-40 md:h-[450px] overflow-auto ">
        {productData?.map((product) => (
          <div className="item h-[120px] border-b-4" key={product?.id}>
            <img src={product?.img} alt="" />
            <div className="details">
              <h1>{product?.title}</h1>
              <p>{product?.desc?.substring(0, 70)}</p>
              <div className="price">1 x ${product?.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" />
          </div>
        ))}
      </div>
      <div className="total uppercase">
        <span>subtotal</span>
        <span>$123</span>
      </div>
      <div className="flex justify-between">
      <button className="uppercase">proceed to checkout</button>
      <span className="reset capitalize pt-3">reset cart</span></div>
    </div>
  );
};

export default Cart;
