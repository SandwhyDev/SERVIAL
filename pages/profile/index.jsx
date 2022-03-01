import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const index = () => {
  const [ubahPassword, setUbahPassword] = useState(false);

  const handleUbahPassword = () => {
    setUbahPassword(!ubahPassword);
  };
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      <Navbar />
      {ubahPassword && (
        <div
          className="w-screen h-screen bg-black/70 flex-col flex items-center justify-center fixed top-0 z-50"
          onClick={handleUbahPassword}
        >
          hello
        </div>
      )}

      <main className="w-screen h-screen flex flex-col  mt-12 ">
        <div className="w-full h-screen bg-red-300 flex flex-col justify-center items-center gap-8  ">
          <img
            src="https://images.pexels.com/photos/7292952/pexels-photo-7292952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="w-32 h-32 rounded-full object-cover mt-56"
          />
          <form className="w-full h-screen bg-white rounded-t-[50px]  p-6 pt-12 flex flex-col gap-4 ">
            <div className="form_group flex flex-col gap-2">
              <label htmlFor="nama" className="text-lg uppercase">
                nama
              </label>
              <input
                type="text"
                className="border-[.5px] border-gray-400 p-2 rounded-lg outline-none bg-gray-100"
                id="nama"
                name="nama"
              />
            </div>

            <div className="form_group flex flex-col gap-2">
              <label htmlFor="email" className="text-lg uppercase">
                <div className="flex items-center justify-between">
                  <h1 className="uppercase">email</h1>
                  <div className="verif h-6 flex items-center border-[.5px] border-red-500 p-2 rounded-lg bg-red-300">
                    <h1 className="text-sm capitalize">Belum verifikasi</h1>
                  </div>
                </div>
              </label>
              <input
                type="text"
                className="border-[.5px] border-gray-400 p-2 rounded-lg outline-none bg-gray-100"
                id="email"
                name="email"
              />
            </div>

            <div className="password uppercase flex flex-col gap-2">
              <h1>Password</h1>
              <div
                className="w-full h-12 border-[.5px] border-red-500 flex items-center  justify-center rounded-lg"
                onClick={handleUbahPassword}
              >
                <h1>Ubah Password</h1>
              </div>
            </div>

            <div className="form_group flex flex-col gap-2">
              <label htmlFor="nomor_hp" className="text-lg ">
                <div className="flex items-center justify-between">
                  <h1 className="uppercase">nomor hp</h1>
                  <div className="verif h-6 flex items-center border-[.5px] border-red-500 p-2 rounded-lg bg-red-300">
                    <h1 className="text-sm capitalize">Belum verifikasi</h1>
                  </div>
                </div>
              </label>
              <input
                type="number"
                className="border-[.5px] border-gray-400 p-2 rounded-lg outline-none bg-gray-100"
                id="nomor_hp"
                name="nomor_hp"
                placeholder="Contoh : 08129483259"
              />
            </div>

            <div className="form_group flex flex-col gap-2">
              <label htmlFor="tanggal_lahir" className="text-lg uppercase">
                tanggal lahir
              </label>
              <input
                type="date"
                className="border-[.5px] border-gray-400 p-2 rounded-lg outline-none bg-gray-100 uppercase w-full"
                id="tanggal_lahir"
                name="tanggal_lahir"
              />
            </div>

            <div className="form_group flex flex-col gap-2">
              <label htmlFor="jenis_kelamin" className="text-lg uppercase">
                Jenis kelamin
              </label>
              <div className=" flex items-center gap-2">
                <input type="radio" id="pria" name="pria" />
                <label htmlFor="pria" className="text-lg uppercase">
                  pria
                </label>

                <input type="radio" id="wanita" name="wanita" />
                <label htmlFor="wanita" className="text-lg uppercase ">
                  wanita
                </label>
              </div>
            </div>

            <button className="w-full h-12 border-[.5px] border-red-500 uppercase rounded-xl">
              <h1>Simpan</h1>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default index;
