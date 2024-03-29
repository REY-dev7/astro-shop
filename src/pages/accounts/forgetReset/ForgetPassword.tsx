import axios from "axios";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const url = `${process.env.REACT_APP_UPLOAD_URL}/auth/forgot-password`;
    const data = { email };

    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (error) {
      // console.error(error);
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
    </div>
  );
};

export default ForgotPassword;
