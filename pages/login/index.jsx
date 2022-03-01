import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const index = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log({
      email: email.value,
      password: password.value,
    });

    axios
      .post("http://sandy_api:9000/api/user_login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        if (response.status == 200) {
          // alert("berhasil login");
          sessionStorage.setItem("token", response.data.token);
          Router.push("/");
        } else if (response.status == 404) {
          alert("email salah");
        } else if (response.status == 400) {
          alert("password salah");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLoginGoogle = () => {
    alert("test");
  };
  return (
    <div className="w-screen min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      <Navbar />

      <div className="w-full h-screen p-4 flex flex-col items-center justify-center">
        <form
          className="w-full h-[400px] bg-white shadow-md rounded-lg flex flex-col  p-4 capitalize gap-4"
          onSubmit={handleLogin}
        >
          <h1 className="text-2xl text-center uppercase">login</h1>

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

          <button
            className="w-full h-12 bg-red-300 text-white rounded-md uppercase text-xl"
            type="submit"
          >
            Login
          </button>

          <div
            className="google flex w-full bg-white border-[.5px] border-black p-2 items-center justify-center gap-2 rounded-md"
            onClick={handleLoginGoogle}
          >
            <FcGoogle size={30} />
            <h1>Login dengan google</h1>
          </div>

          <div className="daftar flex items-center justify-center gap-2">
            <h1>Belum punya akun ? </h1>
            <Link href={"/daftar"}>
              <h1 className="text-red-500">Daftar</h1>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default index;
