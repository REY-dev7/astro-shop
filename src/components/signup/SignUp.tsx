import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type SignUpProps = {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialUser = { username: "", email: "", password: "" };

const SignUp = ({ setSignUp }: SignUpProps) => {
  const [user, setUser] = useState(initialUser);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUserChange = ({ target }: any) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const url = "http://localhost:1337/api/auth/local/register";
    try {
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (res) {
          setUser(initialUser);
          // navigate("/login");
          setSignUp(false);
        }
      }
    } catch (error) {
      console.log(error);
      // toast.error(error.message, {
      // position: "top-right",
      // autoClose: 5000,
      // hideProgressBar: true,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "light",
      // });
    }
  };

  return (
    <div className="w-full px-10">
      <div className="input-div relative w-full my-5">
        <div className="flex absolute inset-y-0 left-0 pt-3 pl-3 pointer-events-none">
          <AiOutlineUser />
        </div>
        <input
          type="text"
          id="name"
          name="username"
          className="border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#88eb74] focus:ring-2 focus:ring-[#88eb74] txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]"
          placeholder="Full Name"
          value={user?.username}
          onChange={handleUserChange}
        />
      </div>
      <div className="input-div relative w-full my-5">
        <div className="flex absolute inset-y-0 left-0 pt-3 pl-3 pointer-events-none">
          <MdOutlineMail />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#88eb74] focus:ring-2 focus:ring-[#88eb74] txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]"
          placeholder="Email"
          value={user.email}
          onChange={handleUserChange}
        />
      </div>
      <div className="input-div relative w-full mb-8">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <MdLockOutline />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          data-cy="password"
          name="password"
          className="border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#88eb74] focus:ring-[#88eb74] focus:ring txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]"
          placeholder="Password"
          value={user.password}
          onChange={handleUserChange}
        />
        <button
          className="flex absolute inset-y-0 right-5 items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <BiShow /> : <RxEyeClosed />}
        </button>
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          onClick={handleSubmit}
          className="text-white btn-shadow bg-[#667ee9] hover:bg-[#1d27b5] w-full rounded-lg px-12 py-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
