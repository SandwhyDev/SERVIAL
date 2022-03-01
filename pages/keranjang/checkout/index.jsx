import Link from "next/link";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import Navbar from "../../../components/Navbar";

const index = () => {
  return (
    <div className="w-screen min-h-screen">
      <Navbar />

      <main className="w-screen min-h-screen  bg-gray-100 mt-12">
        <div className="pengiriman shadow-md w-full h-12 flex items-center bg-white px-4 gap-2">
          <span className="text-xl">
            <Link href={"/keranjang"}>
              <HiArrowLeft />
            </Link>
          </span>

          <h1 className="text-lg font-medium">Pengiriman</h1>
        </div>
      </main>
    </div>
  );
};

export default index;
