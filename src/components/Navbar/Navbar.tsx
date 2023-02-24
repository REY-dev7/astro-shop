import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageImg from "../image/en.png";
import { Link } from "react-router-dom";
import "./navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="left ">
          <div className="item ">
            <img src={LanguageImg} alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/product/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/product/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/product/3">Children</Link>
          </div>
          <div className="item">
            <Link to="/product/4">Accessories</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">ASTRO-REY STORE</Link>
        </div>
        <div className="right">
          <div className="">
            <Link to="/">Homepage</Link>
          </div>
          <div className="">
            <Link to="/">About</Link>
          </div>
          <div className="">
            <Link to="/">Contact</Link>
          </div>
          <div className="">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
