import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login";
import "./account.css";
import SignUp from "../../components/signup/SignUp";

type Props = {};

const AccountPage = (props: Props) => {
  const [signUp, setSignUp] = useState(false);
  const [errors, setErrors] = useState({});
  return (
    <div className="homePage">
      <div className="sign-in">
        <div className="bg-white fade-bottom h-[100vh] w-full flex justify-center">
          <div className="main flex flex-col place-items-center border-b-2 border-black/20 ">
            <h1 className="text-2xl font-serif">
              <a href="/">ASTRO SHOP</a>
            </h1>
            <h1 className="text-2xl font-mono font-extrabold">
              {signUp ? "Sign Up" : "Sign In"}
            </h1>
            <p className=" text-gray-500">
              Enter your credentials to {signUp ? "have an account" : "your account"}
            </p>
            {signUp ? (
              <SignUp setSignUp={setSignUp} setErrors={setErrors} errors={errors} />
            ) : (
              <LoginForm setSignUp={setSignUp} setErrors={setErrors} errors={errors} />
            )}
            <div className="flex items-center justify-between w-full px-4 py-4">
              <p className="hover:text-red-600 cursor-pointer">Terms of service</p>
              <p className="hover:text-red-600 cursor-pointer">Privacy policy</p>
              <p className="hover:text-red-600 cursor-pointer">Contact support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
