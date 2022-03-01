import Image from "next/image";
import React from "react";
import Navbar_Dashboard from "../../../components/Navbar_Dashboard";
import loading from "../../../assets/Group.png";
const index = () => {
  return (
    <div className="w-full h-screen flex ">
      <Navbar_Dashboard />
      <div className="main flex flex-col items-center justify-center w-full h-screen gap-4 ">
        <span className="animate-spin">
          <Image src={loading} width={100} height={100} />
        </span>
        <h1 className="text-4xl text-red-500">On Development...</h1>
      </div>
    </div>
  );
};

export default index;
