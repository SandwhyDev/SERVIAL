import axios from "axios";
import Link from "next/link";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const index = () => {
  const handleDaftar = (e) => {
    e.preventDefault();

    const { username, email, password } = e.target;

    console.log({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    axios
      .post("http://sandy_api:9000/api/user_create", {
        username: username.value,
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        if (response.status == 200) {
          alert("berhasil");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLoginGoogle = () => {
    alert("berhasil");
  };
  return (
    <div className="w-screen min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      <Navbar />

      <div className="w-full h-full p-4 flex flex-col items-center justify-center">
        <form
          className="w-full h-auto bg-white shadow-md rounded-lg flex flex-col  p-4 capitalize gap-4"
          onSubmit={handleDaftar}
        >
          <h1 className="text-2xl text-center uppercase">Daftar</h1>

          {/* <div className="form_group flex flex-col gap-1">
            <div className="required flex gap-[2px]">
              <label htmlFor="username" className="font-bold">
                username
              </label>
              <h1 className="text-red-500 -mt-1">*</h1>
            </div>
            <input
              type="text"
              name="username"
              id="username"
              className="border-[.5px] border-gray-500 outline-none p-2 rounded-lg"
              required
            />
          </div> */}

          <div className="form_group flex flex-col gap-1">
            <div className="required flex gap-[2px]">
              <label htmlFor="email" className="font-bold">
                email
              </label>
              <h1 className="text-red-500 -mt-1">*</h1>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="border-[.5px] border-gray-500 outline-none p-2 rounded-lg"
              required
            />
          </div>

          <div className="form_group flex flex-col gap-1">
            <div className="required flex gap-[2px]">
              <label htmlFor="password" className="font-bold">
                password
              </label>
              <h1 className="text-red-500 -mt-1">*</h1>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              className="border-[.5px] border-gray-500 outline-none p-2 rounded-lg"
              required
            />
          </div>

          <div className="form_group flex flex-col gap-1">
            <div className="required flex gap-[2px]">
              <label htmlFor="password2" className="font-bold">
                Ulangi password
              </label>
              <h1 className="text-red-500 -mt-1">*</h1>
            </div>
            <input
              type="password"
              name="password2"
              id="password2"
              className="border-[.5px] border-gray-500 outline-none p-2 rounded-lg"
              required
            />
          </div>

          <button className="w-full h-12 bg-red-300 text-white rounded-md uppercase text-xl">
            Login
          </button>

          <div
            className="google flex w-full bg-white border-[.5px] border-black p-2 items-center justify-center gap-2 rounded-md"
            onClick={handleLoginGoogle}
          >
            <FcGoogle size={30} />
            <h1>Daftar dengan google</h1>
          </div>

          <div className="daftar flex items-center justify-center gap-2">
            <h1>Sudah punya akun ? </h1>
            <Link href={"/login"}>
              <h1 className="text-red-500">Login</h1>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default index;
