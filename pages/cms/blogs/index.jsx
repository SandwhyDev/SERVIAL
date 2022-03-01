import Image from "next/image";
import React from "react";
import Navbar_Dashboard from "../../../components/Navbar_Dashboard";
import gifDevelopment from "../../../assets/pablita-finance.gif";
const index = () => {
  return (
    <div className="w-full h-screen flex ">
      <Navbar_Dashboard />
      <div className="main flex flex-col items-center justify-center w-full h-screen gap-2 ">
        <Image src={gifDevelopment} />
        <h1 className="text-4xl text-blue-500">On Development...</h1>
      </div>
    </div>
  );
};

export default index;
