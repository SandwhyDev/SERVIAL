import React from "react";
import Navbar_Dashboard from "../../components/Navbar_Dashboard";

const index = () => {
  return (
    <div className="w-screen min-h-screen flex  bg-gray-100">
      <Navbar_Dashboard />
      <div className="w-full h-screen flex items-center justify-center">
        <h1>DASHBOAD PAGE</h1>
      </div>
    </div>
  );
};

export default index;
