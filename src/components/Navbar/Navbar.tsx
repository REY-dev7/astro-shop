import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageImg from "../image/en.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Avatar, Dropdown } from "flowbite-react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {};

const NavbarComponent = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const products = useSelector((state: RootState) => state.cart.products);

  const navigation = ["Home", "About", "Contact", "Stories"];
  const categories = [
    { id: 1, category: "Men" },
    { id: 2, category: "Women" },
    { id: 4, category: "Children" },
    { id: 3, category: "Accessories" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center w-full py-2 px-2 md:py-4">
        <div className="flex gap-2 lg:ml-5 md:gap-3">
          <div className="flex">
            <img src={LanguageImg} alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex gap-3 invisible lg:visible w-0 lg:w-full">
            {categories &&
              categories.map((cate: any) => (
                <Link to={`/product/${cate.id}`} key={cate.id}>
                  {cate.category}
                </Link>
              ))}
          </div>
        </div>
        <div className="text-xl w-[100px] font-bold font-serif uppercase md:w-[300px] md:text-xl lg:text-2xl h-10 flex justify-center items-center">
          <Link to="/" className="">
            ASTRO
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex gap-3 invisible lg:visible mr-4 w-0 lg:w-min">
            {navigation &&
              navigation.map((navigate: any) => (
                <Link to="/" key={navigate?.id}>
                  {navigate}
                </Link>
              ))}
          </div>
          <div className="icons flex gap-2 items-center pr-2">
            <div className="invisible w-0 lg:w-min lg:visible">
              <SearchIcon />
            </div>
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon mr-4" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products?.length}</span>
            </div>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https:flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@ggg.com
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex items-center visible lg:invisible border-2">
            <button
              className="text-3xl text-black font-bold"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
        {isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-screen w-[300px] bg-white drop-shadow-xl">
            <div className="flex justify-end py-12 pr-3">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <p className="h-6 w-8 text-red-700 font-extrabold outline animate-bounce hover:animate-none ">
                  X
                </p>
              </button>
            </div>
            <div className="flex flex-col w-full pl-4 text-xl">
              <p className="font-bold">Navigate:</p>
              <div className=" flex flex-col px-16 mb-5">
                {navigation &&
                  navigation.map((navigate: any) => (
                    <Link
                      to="/"
                      key={navigate?.id}
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      {navigate}
                    </Link>
                  ))}
              </div>
              <p className="font-bold ">Categories:</p>
              <div className=" flex flex-col px-16">
                {categories &&
                  categories.map((cate: any) => (
                    <Link
                      to={`/product/${cate.id}`}
                      key={cate.id}
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      {cate.category}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
        {open && <Cart setOpen={setOpen} open />}
      </nav>
      <div className="visible mx-1 lg:invisible my-1 lg:my-0 lg:h-0">
        <input
          type="text"
          placeholder="Search...."
          className=" w-full rounded-lg"
        />
      </div>
    </>
  );
};

export default NavbarComponent;
