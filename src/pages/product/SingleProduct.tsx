import React, { useState } from "react";
import "./singleProduct.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Spinner } from "flowbite-react";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useFetchforSingleProduct } from "../../hooks/useFetchforSingleProduct";


const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState<"img" | "img2">("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { singleProductData, loading, error } = useFetchforSingleProduct();
  const getImage = process.env.REACT_APP_UPLOAD_URL!;

  return (
    <div className="product">
      {error ? (
          "Something went wrong!"
        ) : loading ? (
        <div className="flex justify-center w-full">
          <Spinner aria-label="Default status example" size="xl" />
        </div>
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  getImage +
                  singleProductData?.attributes?.img?.data?.attributes?.url
                }
                alt="1"
                onClick={(e: any) => setSelectedImage("img")}
              />
              <img
                src={
                  getImage +
                  singleProductData?.attributes?.img2?.data?.attributes?.url
                }
                alt="2"
                onClick={(e: any) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  getImage +
                  singleProductData?.attributes[selectedImage]?.data?.attributes
                    ?.url
                }
                alt={selectedImage}
              />
            </div>
          </div>
          <div className="right">
            <h1 className="text-lg font-bold">
              {singleProductData?.attributes?.title}
            </h1>
            <span>${singleProductData?.attributes?.price}</span>
            <p>{singleProductData?.attributes.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add uppercase"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: singleProductData?.id!,
                    title: singleProductData?.attributes.title!,
                    desc: singleProductData?.attributes.desc!,
                    price: singleProductData?.attributes.price!,
                    img: singleProductData?.attributes.img.data.attributes.url!,
                    quantity,
                  })
                )
              }
            >
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
        </>
      )}
    </div>
  );
};

export default SingleProduct;
