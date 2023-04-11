import React from "react";
import "./footer.css"
import PaymentImg from "../image/payment.png"

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer lg:px-28 md:px-20 px-5">
      <div className="top grid grid-cols-2 lg:grid-cols-4 my-5">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:mt-10 mb-14">
        <div className="flex justify-center items-center">
          <span className="text-[#2879fe] font-bold md:text-3xl text-xl text-center font-serif">Astro-Rey Store</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right flex justify-center">
          <img src={PaymentImg} alt="payment logos" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
