import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
// import "./contacts.css"

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="w-full bg-[#5685d1e3] md:py-5 py-2 border-2 border-red-700">
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-10 items-center">
        <span className="text-xl font-bold">BE IN TOUCH WITH US:</span>
        <div className="mail flex border rounded">
          <input type="text" className=" border-0" placeholder="Enter your e-mail..." />
          <button className="hover:bg-black hover:text-white rounded-r px-1">JOIN US</button>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
