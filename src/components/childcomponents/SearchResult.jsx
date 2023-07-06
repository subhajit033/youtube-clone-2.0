import React from "react";
import { Link } from "react-router-dom";
const SearchResult = ({ Searchresult }) => {
  const searchQuery = Searchresult.split(" ").join("-").toString();
  // console.log(searchQuery);
  return (
    <div className="px-4 py-1 flex items-center  gap-4 rounded-xl cursor-pointer transition duration-300 hover:bg-gray-300">
      <i className="fa-sharp fa-solid fa-magnifying-glass  text-gray-500 cursor-pointer"></i>
      {/* <Link to="/"> */}
      <span>{Searchresult}</span>
      {/* </Link> */}
    </div>
  );
};

export default SearchResult;
