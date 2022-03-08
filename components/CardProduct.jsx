import React from "react";
import Image from "next/image";
import imageProduct from "../assets/pngwing.com.png";
import { AiOutlinePlus } from "react-icons/ai";

const CardProduct = ({ title = "Ini Title", berat = "200" }) => {
  const handleButton = () => {
    alert("berhasil");
  };
  return (
    <div className="w-[47%] h-[200px] bg-white shadow-lg flex flex-col items-center p-4 gap-4 rounded-lg">
      <Image src={imageProduct} width="80" height="100" />
      <div className="desk flex flex-col">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-gray-500 font-light">{berat} gram</p>
      </div>

      {/* <button
        className="bg-green-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"
        onClick={handleButton}
      >
        <span className="text-white text-xl">
          <AiOutlinePlus />
        </span>
      </button> */}
    </div>
  );
};

export default CardProduct;
