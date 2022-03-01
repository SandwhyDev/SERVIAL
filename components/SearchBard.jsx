import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBard = () => {
  return (
    <div className="searchbar flex bg-white/90 items-center h-14 gap-2 w-96 px-2 rounded-full ">
      <span className="text-xl text-gray-500">
        <FiSearch />
      </span>
      <input
        type="text"
        className="outline-none w-full"
        placeholder="Categories"
      />
    </div>
  );
};

export default SearchBard;
