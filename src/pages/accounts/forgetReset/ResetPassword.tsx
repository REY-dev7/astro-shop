// import axios from "axios";
import React, { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

// const initialUser = { password: "", identifier: "" };

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const [user, setUser] = useState(initialUser);

  // const handleSubmit = async () => {
  //   const url = "http://localhost:1337/api/auth/reset-password";

  //   if (user.identifier && user.password && token) {
  //     const { data } = await axios.post(url, user);
  //   //   if (data.user) {
  //   //     console.log("...", data.user);
  //   //   }
  //   }
  // };
  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-t from-gray-400 to-white border-4 border-red-700">
      <form
        // onSubmit={handleSubmit}
        className="grid shadow-xl px-10 py-12 w-96 h-min bg-white rounded-lg"
      >
        <div className="flex justify-center mb-10 font-bold text-2xl">
          <h1>Reset Password</h1>
        </div>
        <label className="w-full relative mb-5">
          <div className="flex absolute text-black/30 inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <MdLockOutline />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            data-cy="password"
            name="password"
            className="border border-[#d8dae5] hover:border-[#8F95B2] rounded-lg focus:outline-none txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="w-full relative">
          <div className="flex absolute text-black/30 inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <GiConfirmed />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            data-cy="password"
            name="password"
            className="border border-[#d8dae5] hover:border-[#8F95B2] rounded-lg focus:outline-none txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5"
            placeholder="Confirm Password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <span className="flex gap-2 items-center mt-2">
          <input
            type="checkbox"
            className="checked:bg-blue-500 default:ring-2"
            onClick={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="">Show Password</label>
        </span>
        <button
          type="submit"
          className="mt-5 bg-blue-400 font-bold py-3 rounded-lg text-white hover:bg-blue-700 hover:transition hover:duration-700 transition duration-1000"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
