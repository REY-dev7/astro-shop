import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import Image from "../../molecule/Image";
import Button from "../../molecule/Button";

const Categories = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-2 px-2 categories">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid gap-2">
          <div className="h-40 md:h-80 relative">
            <Image
              src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-full w-full object-cover"
            />
            <Button className="linkBtn rounded-lg font-serif hover:bg-white text-white/30 hover:text-black transition duration-700  ">
              <Link className="link" to="/products/1">
                Sale
              </Link>
            </Button>
          </div>
          <div className="h-40 md:h-80 relative">
            <img
              src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img2"
              className="h-full w-full object-cover"
            />
            <button className="linkBtn rounded-lg font-serif hover:bg-white text-white/30 hover:text-black transition duration-700  ">
              <Link className="link" to="/products/1">
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="h-full relative">
          <img
            src="https://images.pexels.com/photos/2108739/pexels-photo-2108739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img3"
            className="h-full w-full object-cover"
          />
          <button className="linkBtn rounded-lg font-serif hover:bg-white text-white/30 hover:text-black transition duration-700  ">
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-40 md:h-80 relative">
            <img
              src="https://images.pexels.com/photos/3757380/pexels-photo-3757380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="img4"
              className="h-full w-full object-cover"
            />
            <button className="linkBtn rounded-lg font-serif hover:bg-white text-white/30 hover:text-black transition duration-700  ">
              <Link className="link" to="/products/1">
                Men
              </Link>
            </button>
          </div>
          <div className="h-40 md:h-80 relative">
            <img
              src="https://images.pexels.com/photos/952213/pexels-photo-952213.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img5"
              className="h-full w-full object-cover"
            />
            <button className="linkBtn rounded-lg font-serif hover:bg-white text-white/30 hover:text-black transition duration-700  ">
              <Link className="link" to="/products/1">
                Accessories
              </Link>
            </button>
          </div>
        </div>
        <div className="h-40 md:h-80 relative">
          <img
            src="https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img6"
            className="h-full w-full object-cover"
          />
          <button className="linkBtn rounded-lg font-serif hover:bg-white text-white/30 hover:text-black transition duration-700  ">
            <Link className="link" to="/products/1">
              Shoe
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
