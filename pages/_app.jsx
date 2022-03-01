import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import imageCat from "../assets/paws.png";
import { decodeToken } from "react-jwt";

const MyApp = ({ Component, pageProps }) => {
  const [isLogin, setIsLogin] = useState({
    login: false,
    userData: {},
  });

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      setIsLogin({
        login: true,
        userData: decodeToken(token),
      });
    }
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
