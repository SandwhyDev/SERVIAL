import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import imageProduct from "../../assets/pngwing.com.png";
import { FiTrash } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import CardAlamat from "../../components/CardAlamat";

const index = () => {
  const [showAlamat, setShowAlamat] = useState(false);

  const handleAlamat = () => {
    setShowAlamat(!showAlamat);
  };

  const handleCancel = () => {
    setShowAlamat(false);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <Navbar />

      <main className="mt-12 flex flex-col w-screen h-screen bg-gray-200 gap-2">
        <div className="Pilihsemua w-screen h-12 bg-white flex items-center justify-between p-4">
          <div className="pilih flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5 p-2" />
            <h1 className="font-light">Pilih semua</h1>
          </div>

          <h1 className="text-red-500 font-semibold">Hapus</h1>
        </div>

        <div className="Product w-scree h-28 bg-white flex items-center justify-between p-4 gap-4">
          <div className="card flex items-center gap-4">
            <input type="checkbox" className="w-5 h-5 p-2" />

            <div className="cardProduct flex gap-2">
              <Image src={imageProduct} width="70" height="80" />
              <div className="desk flex flex-col">
                <h1 className="font-semibold">Whiskas Basah</h1>
                <p className="font-light text-gray-500 text-sm">200 gram</p>
                <h1 className="font-bold">Rp15.000</h1>
              </div>
            </div>
          </div>

          <span className="text-3xl text-red-500">
            <FiTrash />
          </span>
        </div>

        <div className="catetan -mt-3 w-screen h-26 bg-white p-4  ">
          <input
            type=""
            placeholder="Tulis catetan"
            className="placeholder:text-red-300 hover:border-[.5px] hover:border-red-500 outline-none w-full p-2 rounded-xl  "
          />
        </div>
      </main>

      <div className="qty fixed bottom-0 w-screen h-26 flex flex-col gap-4  border-y-[.5px] bg-white p-4 shadow-md">
        <div className="alamat flex gap-2 items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-2xl text-red-500">
              <GrLocation color="red" />
            </span>
            <p>Dikirim ke</p>
            <p className="font-bold">Meruyung Utara</p>
          </div>
          <span className="text-xl" onClick={handleAlamat}>
            <IoIosArrowDown />
          </span>
        </div>

        {showAlamat && (
          <div className="w-screen h-screen bg-black/70 fixed top-0 left-0 flex flex-col items-center justify-center gap-4">
            <div className="w-screen h-screen mt-12 bg-white p-4 flex flex-col  gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl" onClick={handleCancel}>
                  <HiArrowLeft />
                </span>
                <div className="searchBar w-full h-10 border-[.5px] border-gray-500 flex items-center px-2 gap-2 rounded-full">
                  <AiOutlineSearch />
                  <input
                    type="text"
                    placeholder="Cari alamat"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <CardAlamat />

              {/* CARD ALAMAT  */}
              <div className="cardAlamat w-full h-56 rounded-xl  border-[.5px] border-green-500 bg-white flex items-center justify-center gap-2">
                <span className="text-xl text-green-500">
                  <AiOutlinePlus />
                </span>
                <h1 className="text-xl font-light">Tambah Alamat</h1>
              </div>
            </div>
          </div>
        )}

        <div className=" flex justify-between">
          <div className="harga flex flex-col">
            <h1 className="font-semibold">Total Harga</h1>
            <p className="text-xl font-bold">Rp15.000</p>
          </div>

          <button className="w-32 h-12 bg-red-400 hover:bg-red-500 text-white rounded-xl font-light text-xl">
            <Link href={"/keranjang/checkout"}>Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
