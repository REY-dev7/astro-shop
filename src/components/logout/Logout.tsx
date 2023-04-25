import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("User", "");
    localStorage.setItem("JWT", "");
    navigate("/");
  }, [navigate]);

  return null;
};

export default Logout;
