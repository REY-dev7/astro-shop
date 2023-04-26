import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { validateForm } from "../../utils/functions";
import { SignUpProps } from "../../types/types";

const initialUser = { username: "", email: "", password: "" };

const SignUp = ({ setSignUp, errors, setErrors }: SignUpProps) => {
  const [user, setUser] = useState(initialUser);
  const [showPassword, setShowPassword] = useState(false);

  const handleUserChange = ({ target }: any) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_UPLOAD_URL}/api/auth/local/register`;
    const validationErrors = validateForm(user);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const { data } = await axios.post(url, user);
        if (!data.ok) {
          setErrors(data.errors);
        } else {
          setUser({
            username: user.username,
            email: user.email,
            password: user.password,
          });
          setErrors({});
          toast.success("Sign up successful!", {
            hideProgressBar: true,
          });
        }
        setSignUp(false);
        // if (user.username && user.email && user.password) {
        //   const { data } = await axios.post(url, user);
        //   if (data) {
        //     setUser(initialUser);
        //     toast.success("Sign up successfully!", {
        //       hideProgressBar: true,
        //     });
        // setSignUp(false);
        //   }
        // }
      } catch (error) {
        toast.error("Username and Email have been used", {
          hideProgressBar: true,
          theme: "colored",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-10">
      <div className="my-5">
        <div className="input-div relative w-full ">
          <div className="flex absolute inset-y-0 left-0 pt-3 pl-3 pointer-events-none">
            <AiOutlineUser />
          </div>
          <input
            type="text"
            id="name"
            name="username"
            className="border border-[#d8dae5] hover:border-[#8F95B2] txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 "
            placeholder="Full Name"
            value={user?.username}
            onChange={handleUserChange}
          />
        </div>
        {errors.username && (
          <p className="text-red-600 text-xs">{errors.username}</p>
        )}
      </div>
      <div className="my-5">
        <div className="input-div relative w-full ">
          <div className="flex absolute inset-y-0 left-0 pt-3 pl-3 pointer-events-none">
            <MdOutlineMail />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-[#d8dae5] hover:border-[#8F95B2]  txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 "
            placeholder="Email"
            value={user.email}
            onChange={handleUserChange}
          />
        </div>
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-8">
        <div className="input-div relative w-full ">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MdLockOutline />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            data-cy="password"
            name="password"
            className="border border-[#d8dae5] hover:border-[#8F95B2]  txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 "
            placeholder="Password"
            value={user.password}
            onChange={handleUserChange}
          />
          <span
            className="flex absolute inset-y-0 right-5 items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BiShow /> : <RxEyeClosed />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password}</p>
        )}
      </div>
      <div className="flex items-center justify-between w-full">
        <button
          type="submit"
          // onClick={handleSubmit}
          className="text-white btn-shadow bg-[#667ee9] hover:bg-[#1d27b5] w-full rounded-lg px-12 py-2"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
