import Link from "next/link";
import React from "react";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiCategory, BiCategoryAlt, BiNews } from "react-icons/bi";
import productPng from "../assets/icons8-product-50.png";
import Image from "next/image";

const Navbar_Dashboard = () => {
  return (
    <div className="w-44 h-screen bg-red-400 sticky top-0 left-0 flex flex-col items-center justify-between p-6  ">
      <div className="brands uppercase flex flex-col gap-4 ">
        <h1 className="text-xl text-white cursor-pointer">Servial</h1>

        <ul className="flex flex-col gap-4 uppercase">
          <li>
            <Link href={"/cms"}>
              <div className="w-full cursor-pointer flex gap-2 items-center">
                <MdOutlineSpaceDashboard size={25} />
                <h1>Dashboard</h1>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/cms/blogs"}>
              <div className="w-full flex gap-2 items-center cursor-pointer active:bg-white focus:bg-white">
                <BiNews size={25} />
                <h1>Blogs</h1>
              </div>
            </Link>
          </li>

          {/* <li>
            <Link href={"/cms"}>
              <div className="w-full cursor-pointer flex gap-2 items-center">
                <BiCategory size={25} />
                <h1>categories</h1>
              </div>
            </Link>
          </li> */}

          <li>
            <Link href={"/cms/products"}>
              <div className="w-full cursor-pointer flex gap-2 items-center active:bg-white">
                <Image src={productPng} width={25} height={25} />
                <h1>products</h1>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/cms/data_user"}>
              <div className="w-full cursor-pointer flex gap-2 items-center">
                <FiUsers size={25} />
                <h1>data user</h1>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <Link href={"/admin_login"}>
        <div className="keluar flex  gap-1 cursor-pointer items-center">
          <CgLogOut size={20} />
          <h1>Logout</h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar_Dashboard;
