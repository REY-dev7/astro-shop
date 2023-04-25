import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import User from "../image/user-account.png";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import LanguageImg from "../image/en.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Cart from "../Cart/Cart";

interface UserDataProps {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  provider: string;
  updatedAt: string;
  username: string;
}

const NavbarComponent = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<UserDataProps>();
  const [isSticky, setIsSticky] = React.useState(false);
  const products = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    const storedData = localStorage.getItem("User");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { link: "/", name: "Home" },
    { link: "/about-page", name: "About" },
    { link: "/contact-page", name: "Contact" },
    // { link: "/stories", name: "Stories" },
  ];
  const categories = [
    { id: 1, category: "Men" },
    { id: 2, category: "Women" },
    { id: 4, category: "Children" },
    { id: 3, category: "Accessories" },
  ];
  return (
    <div
      className={`${
        isSticky ? "fixed top-0 left-0 w-full bg-white shadow-lg z-10" : ""
      }`}
    >
      <div className="flex justify-between items-center py-3 px-2 lg:px-28">
        <div className="flex gap-5">
          <div className="text-xl font-bold font-serif uppercase  md:text-xl ">
            <Link to="/" className="">
              ASTRO
            </Link>
          </div>
          <div className="flex gap-3 invisible lg:visible w-0 lg:w-min">
            {categories.map((cate: any) => (
              <Link to={`/product/${cate.id}`} key={cate.id}>
                {cate.category}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="invisible lg:visible flex gap-5 items-center w-0 lg:w-min mr-3">
            {navigation &&
              navigation.map((navigate: any) => (
                <Link to={navigate.link} key={navigate?.id}>
                  {navigate.name}
                </Link>
              ))}
          </div>
          <div
            className="cartIcon relative mr-2"
            onClick={() => setOpen(!open)}
          >
            <ShoppingCartOutlinedIcon />
            <span className="text-sm w-[20px] h-[20px] rounded-full bg-[#2879fe] text-white absolute right-[-10px] top-[-10px] flex justify-center items-center">
              {products?.length}
            </span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={User} alt="" className="w-8" />
          </button>
          <div className="flex items-center visible lg:invisible lg:w-0">
            <button
              className="text-3xl text-black font-bold"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="border-t-2 absolute top-12 right-9 lg:right-[105px] z-40 w-min py-2 px-2 rounded-lg bg-white">
          {userData ? (
            <>
              <div className="grid place-items-center">
                <span className=" text-sm capitalize font-medium">
                  {userData?.username}
                </span>
                <span className="block text-sm ">{userData?.email}</span>
              </div>
              <hr className="my-2" />
              <button className="flex justify-center w-full">
                <Link to="/logout">Sign out</Link>
              </button>
            </>
          ) : (
            <div className="rounded-lg text-lg font-bold">
              <button onClick={() => setIsOpen(!isOpen)}>
                <a href="/login">Login</a>{" "}
              </button>
            </div>
          )}
        </div>
      )}
      {isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-screen  bg-white drop-shadow-xl">
          <div className="flex justify-end pt-8 pr-3">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <p className="h-6 w-8 text-red-700 font-extrabold outline animate-bounce hover:animate-none ">
                X
              </p>
            </button>
          </div>
          <div className="grid">
            {/* <div className="flex gap-2 justify-center">
              <div className="flex">
                <img src={LanguageImg} alt="" />
                <KeyboardArrowDownIcon />
              </div>
              <div className="flex">
                <span>USD</span>
                <KeyboardArrowDownIcon />
              </div>
            </div> */}
            <div className="flex flex-col  pl-4 text-xl">
              <p className="font-bold">Navigate:</p>
              <div className=" flex flex-col px-16 mb-5">
                {navigation &&
                  navigation.map((navigate: any) => (
                    <Link
                      to={navigate.link}
                      key={navigate?.id}
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      {navigate.name}
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
            {/* {userData ? (
                <div className="grid place-items-center bottom-0">
                  <span className=" text-sm capitalize font-medium">
                    {userData.username}
                  </span>
                  <span className="block text-sm ">{userData.email}</span>
                </div>
              ) : (
                <button>
                  <a href="/login">Login</a>
                </button>
              )} */}
          </div>
        </div>
      )}
      {open && <Cart setOpen={setOpen} open />}
    </div>
  );
};
export default NavbarComponent;
