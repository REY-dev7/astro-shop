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
    <div className="product flex flex-col gap-3 md:flex-row lg:px-[50px] lg:mb-10">
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        <div className="flex justify-center w-full">
          <Spinner aria-label="Default status example" size="xl" />
        </div>
      ) : (
        <>
          <div className="flex-[2]  flex gap-1 md:gap-5 cursor-pointer">
            <div className="flex-1">
              <img
                src={
                  getImage +
                  singleProductData?.attributes?.img?.data?.attributes?.url
                }
                alt="1"
                onClick={(e: any) => setSelectedImage("img")}
                className="h-[80px] md:h-[150px] w-full lg:h-[150px] mb-1 md:mb-5 shadow-md rounded"
              />
              <img
                src={
                  getImage +
                  singleProductData?.attributes?.img2?.data?.attributes?.url
                }
                alt="2"
                className="h-[80px] md:h-[150px] w-full lg:h-[150px] shadow-md rounded"
                onClick={(e: any) => setSelectedImage("img2")}
              />
            </div>
            <div className="flex-[3] md:flex-[5]">
              <img
                src={
                  getImage +
                  singleProductData?.attributes[selectedImage]?.data?.attributes
                    ?.url
                }
                alt={selectedImage}
                className="h-[40vh] md:h-[60vh] lg:h-max xl:h-[100vh] w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="right flex-1">
            <div className="">
              <h1 className="text-lg ">
                <span className="text-lg font-bold">Name: </span>
                {singleProductData?.attributes?.title}
              </h1>
              <span className="text-lg font-bold">Price: </span>
              <span>${singleProductData?.attributes?.price}</span>
              <p>
                <span className="text-lg font-bold">Description: </span>
                {singleProductData?.attributes.desc} Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Omnis quia alias praesentium
                dolore placeat quasi, reprehenderit eum doloribus, vitae
                temporibus consectetur nemo quas reiciendis dignissimos ipsa
                ipsum assumenda voluptatum dolorem.
              </p>
              <div className="quantity justify-center mb-3">
                <button
                  className=" px-2 font-extrabold text-2xl rounded-lg mr-3"
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>

                <button
                  className=" px-2 font-extrabold text-2xl rounded-lg ml-3"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="grid justify-center gap-4">
              <div className="flex justify-center">
                <button
                  className="add uppercase "
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: singleProductData?.id!,
                        title: singleProductData?.attributes.title!,
                        desc: singleProductData?.attributes.desc!,
                        price: singleProductData?.attributes.price!,
                        img: singleProductData?.attributes.img.data.attributes
                          .url!,
                        quantity,
                      })
                    )
                  }
                >
                  <AddShoppingCartIcon />
                  Add To Cart
                </button>
              </div>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
            </div>
            <div className="info pt-10">
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
