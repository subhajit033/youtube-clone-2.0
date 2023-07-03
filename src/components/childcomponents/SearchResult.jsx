import React from "react";

const SearchResult = ({ Searchresult }) => {
  return (
    <div className="px-4 py-1 flex items-center  gap-4 rounded-xl cursor-pointer transition duration-300 hover:bg-gray-300">
      <i className="fa-sharp fa-solid fa-magnifying-glass  text-gray-500 cursor-pointer"></i>
      <span>{Searchresult}</span>
    </div>
  );
};

export default SearchResult;
