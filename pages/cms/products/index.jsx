import React, { useState } from "react";
import Navbar_Dashboard from "../../../components/Navbar_Dashboard";
import SearchBard from "../../../components/SearchBard";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import test from "../../../assets/Data_security.png";
const index = () => {
  const handleTambahProduct = () => {
    alert("test");
  };

  const [showUrut, setShowUrut] = useState(false);

  const handleUrut = () => {
    setShowUrut(!showUrut);
  };
  return (
    <div className="w-screen min-h-screen flex bg-gray-100">
      <Navbar_Dashboard />
      <div className="w-full h-screen flex flex-col gap-4 p-6">
        <SearchBard />

        <div className="hasil w-full h-14 flex items-center  justify-between">
          <div className="product flex gap-2 items-center">
            <h1 className="text-xl font-bold">0</h1>
            <h1 className="text-xl font-semibold">Products</h1>
          </div>

          <div className="left flex gap-2 items-center">
            <div
              className="newProduct w-44 h-10 rounded-md bg-red-500 text-white flex items-center gap-2 justify-center p-2 cursor-pointer"
              onClick={handleTambahProduct}
            >
              <span className="text-xl font-bold">
                <AiOutlinePlus />
              </span>
              <h1>Tambah product</h1>
            </div>

            <div
              className="filter w-36 h-8 bg-white border-[.5px] border-gray-500 flex items-center justify-center gap-2 rounded-md cursor-pointer"
              onClick={handleUrut}
            >
              <h1>Urutkan</h1>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
        {showUrut && (
          <div className="border-[.5px] border-gray-500 bg-white fixed right-6 top-[115px] w-36 flex items-center justify-center">
            <ul className="w-full flex flex-col items-center gap-2 p-2">
              <li className="">Terbaru</li>
              <li className="">Favorite</li>
              <li>Harga Mahal</li>
              <li>Harga Murah</li>
            </ul>
          </div>
        )}

        <div className="w-full h-screen border-[.5px] border-black flex flex-col items-center justify-center">
          hello
        </div>
      </div>
    </div>
  );
};

export default index;
