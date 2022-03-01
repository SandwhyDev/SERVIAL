import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillShopping,
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { decodeToken } from "react-jwt";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { FaCat } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgLogOut, CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [isLogin, setIsLogin] = useState({
    login: false,
    userData: {},
  });

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token) {
      setIsLogin({
        login: true,
        userData: decodeToken(token),
      });
    }
  }, []);

  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogoutBeneran = () => {
    sessionStorage.clear();
    Router.push("/login");
  };
  return (
    <>
      <nav className="navbar w-screen h-12 fixed top-0 bg-red-300 flex justify-between p-4 items-center z-50 gap-4">
        <div className="brands text-xl text-white">Servial</div>

        <div className="menu text-2xl text-white" onClick={handleMenu}>
          <AiOutlineMenu />
        </div>

        {showMenu && (
          <div className="menuItems bg-red-300 flex flex-col items-center  gap-4 w-[70%] h-full fixed top-12 right-0 justify-between">
            <div
              className="w-[50%] h-screen absolute -left-32 "
              onClick={handleMenu}
            ></div>
            <ul className="w-full flex flex-col text-md text-white uppercase  ">
              {!isLogin.login && (
                <div className="w-full flex flex-col items-end ">
                  <li className="w-full border-[.5px] border-red-500 bg-white p-2 text-red-400 text-right ">
                    <Link href={"/"}>
                      <div className="flex  items-center justify-end gap-2">
                        <h1>Home</h1>
                        <span>
                          <AiOutlineHome size={20} />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="w-full border-[.5px] border-red-500 bg-white p-2 text-red-400 text-right">
                    <Link href={"/login"}>
                      <div className="flex  items-center justify-end gap-2">
                        <h1>login</h1>
                        <span>
                          <FiLogIn size={20} />
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li className="w-full border-[.5px] border-red-500 bg-white p-2 text-red-400 text-right">
                    <Link href={"/blog"}>
                      <div className="flex  items-center justify-end gap-2">
                        <h1>blog</h1>
                        <span>
                          <BsNewspaper size={20} />
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li className="w-full border-[.5px] border-red-500 bg-white p-2 text-red-400 text-right">
                    <Link href={"/contact_us"}>
                      <div className="flex  items-center justify-end gap-2">
                        <h1>contact us</h1>
                        <span>
                          <RiCustomerService2Fill size={20} />
                        </span>
                      </div>
                    </Link>
                  </li>
                </div>
              )}

              {isLogin.login && (
                <div className="w-full flex flex-col">
                  <div className="w-full flex flex-col  ">
                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right">
                      <Link href={"/"}>
                        <div className="flex  items-center justify-end gap-2">
                          <h1>Home</h1>
                          <span>
                            <AiOutlineHome size={20} />
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right hover:bg-red-300 hover:text-white">
                      <Link href={"/blog"}>
                        <div className="flex  items-center justify-end gap-2">
                          <h1>blogs</h1>
                          <span>
                            <BsNewspaper size={20} />
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right hover:bg-red-300 hover:text-white">
                      <Link href={"/contact_us"}>
                        <div className="flex  items-center justify-end gap-2">
                          <h1>contact us</h1>
                          <span>
                            <RiCustomerService2Fill size={20} />
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right hover:bg-red-300 hover:text-white">
                      <Link href={"/profile"}>
                        <div className="flex  items-center justify-end gap-2">
                          <h1>profile</h1>
                          <span>
                            <CgProfile size={20} />
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right hover:bg-red-300 hover:text-white">
                      <Link href={"/nama_kucing_ku"}>
                        <div className="flex  items-center justify-end gap-2">
                          <h1>nama kucing ku</h1>
                          <span>
                            <FaCat size={20} />
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right hover:bg-red-300 hover:text-white hover:border-y-white">
                      <Link href={"/keranjang"}>
                        <div className="flex  items-center justify-end gap-2">
                          <h1>keranjang</h1>
                          <span>
                            <FiShoppingCart size={20} />
                          </span>
                        </div>
                      </Link>
                    </li>

                    <li className="w-full border-[.5px] border-red-300 bg-white p-2 text-red-400 text-right hover:bg-red-300 hover:text-white">
                      <div
                        className="flex  items-center justify-end gap-2"
                        onClick={handleLogout}
                      >
                        <h1>Keluar</h1>
                        <span>
                          <CgLogOut size={20} />
                        </span>
                      </div>
                    </li>
                  </div>
                </div>
              )}
            </ul>
          </div>
        )}
      </nav>

      {showLogout && (
        <div className="w-screen h-screen bg-black/70 z-50 flex flex-col items-center justify-center p-4 fixed top-0">
          <div className="modal w-full h-[50%] bg-white rounded-xl flex flex-col items-center justify-between py-4">
            <h1 className="text-white">apake</h1>
            <div className="btn w-full p-4 flex flex-col items-center justify-center gap-6 -mt-16">
              <h1 className="text-xl font-light">Yakin Ingin Keluar ?</h1>
              <div className="w-full  flex gap-2">
                <button
                  className="w-[50%] h-12 border-[.5px] border-red-500 font-light uppercase rounded-xl"
                  onClick={handleLogoutBeneran}
                >
                  <h1>Iya</h1>
                </button>

                <button
                  className="w-[50%] h-12 border-[.5px] border-red-500 bg-red-300 text-white font-light uppercase rounded-xl hover:bg-white hover:text-black"
                  onClick={handleLogout}
                >
                  <h1>tidak</h1>
                </button>
              </div>
            </div>
            <h1 className="">servial.com</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
