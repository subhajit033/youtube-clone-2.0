import React from "react";

const Searchbar = () => {
  return (
    <div className="flex">
      <input
        className="search-bar border-2 border-gray-400 w-96 px-4 py-1 rounded-xl border-r-0 rounded-r-none focus:outline-none focus:border-2 focus:border-blue-500 transition duration-300"
        type="text"
        placeholder="Search"
      />
      <span className="border-2 border-gray-400 py-1 px-4 rounded-xl rounded-l-none bg-gray-300">
        <i className="fa-sharp fa-solid fa-magnifying-glass text-xl text-gray-500 cursor-pointer"></i>
      </span>
    </div>
  );
};

export default Searchbar;
