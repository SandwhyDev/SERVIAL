import React from "react";

const Form_Product = () => {
  return (
    <form className="w-[500px] h-auto border-4 flex flex-col items-center p-4 gap-4 bg-red-400 rounded-md">
      <h1 className="text-2xl text-white">UPLOAD PRODUCT</h1>
      <div className="form_group flex flex-col gap-2 w-full">
        <input
          type="text"
          id="title"
          name="title"
          className="border-[.5px] p-2 w-full outline-none focus:outline-blue-500 rounded-md"
          placeholder="Nama Product"
        />
      </div>

      <div className="form_group flex flex-col gap-2 w-full">
        <textarea
          name="desktipsi"
          id="deskripsi"
          cols="10"
          rows="5"
          placeholder="Deskripsi"
          className="border-[.5px] p-2 rounded-md "
        ></textarea>
      </div>

      <div className="w-full flex  gap-2 justify-between ">
        <input
          type="number"
          id="harga"
          name="harga"
          className="border-[.5px] p-2 w-[50%] outline-none focus:outline-blue-500 rounded-md"
          placeholder="Berat"
        />
        <select
          id="categories_id"
          name="categories_id"
          className="h-10 rounded-md p-2 w-[50%]"
        >
          <option hidden="true">Berat Satuan</option>
          <option value="gram">Gram</option>
          <option value="kg">Kilogram</option>
          <option value="l">Liter</option>
          <option value="ml">Mililiter</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <select
          id="categories_id"
          name="categories_id"
          className="h-10 rounded-md p-2"
        >
          <option hidden="true">Categori</option>
          <option value="makanan">Makanan</option>
          <option value="accesories">Accesories</option>
          <option value="obat">Obat</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div className="form_group flex flex-col gap-2 w-full">
        <input
          type="text"
          id="harga"
          name="harga"
          className="border-[.5px] p-2 w-full outline-none focus:outline-blue-500 rounded-md"
          placeholder="Harga"
        />
      </div>

      <div className="form_group flex flex-col gap-2 w-full">
        <input
          type="file"
          id="harga"
          name="harga"
          className=" p-2 w-full outline-none focus:outline-blue-500 rounded-md bg-white"
          placeholder="Harga"
        />
      </div>

      <button className=" p-2 w-full outline-none focus:outline-blue-500 rounded-md bg-red-500 text-white border-[.5px] border-white">
        Upload Product
      </button>
    </form>
  );
};

export default Form_Product;
