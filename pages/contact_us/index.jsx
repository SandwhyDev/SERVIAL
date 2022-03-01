import React from "react";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <Navbar />

      <main className="mt-12 bg-gray-200 w-screen min-h-screen flex flex-col items-center  p-4">
        <div className="w-full h-56 bg-white shadow-md flex flex-col items-center justify-center p-4 gap-4 rounded-lg">
          <div className="customer_care w-full border-[.5px] border-red-300 p-2 flex items-center justify-center rounded-full hover:bg-red-300 hover:text-white">
            <h1>Costumer Care</h1>
          </div>

          <div className="customer_care w-full border-[.5px] border-red-300 p-2 flex items-center justify-center rounded-full hover:bg-red-300 hover:text-white">
            <h1>WhatsApp</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
