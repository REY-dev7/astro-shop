import { useState } from "react";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import axios from "axios";
import { RxEyeClosed } from "react-icons/rx";
import { BiShow } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginValidateForm } from "../../utils/functions";
import { LoginErrorState } from "../../types/types";

interface LoginProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  setErrors: React.Dispatch<React.SetStateAction<LoginErrorState>>;
  errors: LoginErrorState;
}

const initialUser = { password: "", identifier: "" };

export const LoginForm = ({ setSignUp, errors, setErrors }: LoginProps) => {
  const [user, setUser] = useState(initialUser);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_UPLOAD_URL}/api/auth/local`;
    const validationErrors = loginValidateForm(user);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        if (user.identifier && user.password) {
          const { data } = await axios.post(url, user);
          if (data.jwt) {
            localStorage.setItem("JWT", JSON.stringify(data.jwt));
            toast.success("Logged in successfully!", {
              hideProgressBar: true,
            });
            setUser(initialUser);
            navigate("/");
          }
          if (data.user) {
            localStorage.setItem("User", JSON.stringify(data.user));
          }
        }
      } catch (error) {
        console.log(error);
        toast.error("Invalid identifier or password", {
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-10">
      <div className="my-5">
        <div className="input-div relative w-full ">
          <div className="flex absolute inset-y-0 left-0 pt-3 pl-3 pointer-events-none">
            <MdOutlineMail />
          </div>
          <input
            type="email"
            id="identifier"
            name="identifier"
            className="border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#88eb74] focus:ring-2 focus:ring-[#88eb74] txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]"
            placeholder="Email"
            value={user.identifier}
            onChange={handleChange}
          />
        </div>
        {errors.identifier && (
          <p className="text-red-600 text-xs">{errors.identifier}</p>
        )}
      </div>
      <div className="mb-8">
        <div className="input-div relative w-full">
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
            onChange={handleChange}
          />
          <span
            className="flex absolute inset-y-0 right-5 items-center outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <BiShow /> : <RxEyeClosed />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-xs">{errors.password}</p>
        )}
      </div>
      <div className="flex items-center justify-between w-full mb-5">
        <button
          type="submit"
          className="text-white w-full btn-shadow bg-[#667ee9] hover:bg-[#1d27b5] rounded-lg px-12 py-2"
        >
          Sign in
        </button>
        {/* <button className="text-[#DD5928]">
          <Link to="/reset-password">Forgot Password</Link>
        </button> */}
      </div>
      <div className=" italic flex justify-center">
        Click
        <button
          onClick={() => setSignUp(true)}
          className="px-1 font-bold text-blue-700"
        >
          here
        </button>
        to Sign Up
      </div>
    </form>
  );
};
