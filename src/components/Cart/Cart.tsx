import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { IProduct, removeFromCart, resetCart } from "../../redux/cartReducer";
import { RootState } from "../../redux/store";
import { makeRequest } from "../../utils/makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

type CartProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const Cart = ({ setOpen, open }: CartProps) => {
  const products = useSelector((state: RootState) => state.cart?.products);
  const getImage = process.env.REACT_APP_UPLOAD_URL!;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    products.forEach((product: IProduct) => {
      total += product?.quantity * product?.price;
    });
    return total.toFixed(2);
  };
  const userData = localStorage.getItem("JWT");

  const stripePromise = loadStripe(
    "pk_test_51MqwLaENIc8mlIZVqn796IdIltXEBzJpwKEicebouxdoM9w4OgHd9PcYpxanAfsstvwTRhfBifequxEcVDFnpfT800MiKpg0or"
  );

  const handlePayment = async () => {
    if (userData) {
      try {
        const stripe = await stripePromise;
        const res = await makeRequest.post("/orders", {
          products,
        });
        await stripe?.redirectToCheckout({
          sessionId: res?.data?.stripeSession?.id,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="cart w-[50vw] md:w-[60vw] lg:w-[30vw] right-1 shadow-2xl bg-slate-200">
      <div className="flex justify-between">
        <h1>Products in your cart</h1>
        <p
          className="text-red-700 font-extrabold text-lg cursor-pointer"
          onClick={() => setOpen(false)}
        >
          X
        </p>
      </div>
      <div className="h-[50vh] md:h-[450px] overflow-auto ">
        {products?.map((product: IProduct) => (
          <div className="item h-[120px] border-b-4" key={product?.id}>
            <img src={getImage + product?.img} alt="" />
            <div className="details w-full ">
              <h2 className="font-bold text-xl text-black">{product?.title}</h2>
              <p>{product?.desc?.substring(0, 70)}</p>
              <div className="text-lg ">
                {product?.quantity} x ${product?.price}
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => dispatch(removeFromCart(product?.id))}
            />
          </div>
        ))}
      </div>
      <div className="total uppercase">
        <span>subtotal</span>
        <span>${totalPrice()}</span>
      </div>
      <div className="flex justify-between">
        <button
          className="uppercase bg-[#5b96f5] hover:bg-[#2879fe] px-4 py-2 rounded-lg text-white font-bold"
          onClick={handlePayment}
        >
          proceed to checkout
        </button>
        <span
          className="reset capitalize pt-3"
          onClick={() => dispatch(resetCart())}
        >
          reset cart
        </span>
      </div>
    </div>
  );
};

export default Cart;
