import axios from "axios";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   console.log("asdasdsa");
  //   const url = "http://localhost:1337/auth/forgot-password";
  //   // const url = `${process.env.REACT_APP_API_BASE_URL!}/auth/forgot-password`;
  //   console.log(".........");
  //   console.log("url",url);
  //   await axios.put(url, {email});
  //   navigate("/login");
  // };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const url = "http://localhost:1337/auth/forgot-password";
    const data = { email };

    try {
      const response = await axios.post(url, data);
      console.log(response);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <div className="input-div relative w-full my-5">
        <div className="flex absolute inset-y-0 left-0 pt-3 pl-3 pointer-events-none">
          <MdOutlineMail />
        </div>
        <input
          type="email"
          id="email"
          className="border border-[#d8dae5] hover:border-[#8F95B2] focus:outline-[#88eb74] focus:ring-2 focus:ring-[#88eb74] txt-field-style peer text-gray-900 text-sm block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#F2BEAB] dark:focus:border[#d8dae5]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-5 bg-blue-400 font-bold py-3 rounded-lg text-white hover:bg-blue-700 hover:transition hover:duration-700 transition duration-1000"
      >
        Reset Password
      </button>
      {/* <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button> */}
    </div>
  );
};

export default ForgotPassword;
