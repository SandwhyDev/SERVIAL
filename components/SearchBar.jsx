import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="w-full h-12 bg-white flex items-center px-4 gap-4 rounded-md shadow-md">
      <AiOutlineSearch size={20} />
      <input
        type="text"
        className="bg-transparent w-full outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
