import React from "react";
import { Link } from "react-router-dom";
const SearchResult = ({ Searchresult, setSearchQuery }) => {
  const searchQuery = Searchresult?.split(" ")
    .join("-")
    .toString()
    .toLowerCase();

  return (
    <Link to={`/results?search_query=${searchQuery}`}>
      <div
        onClick={() => {
          setSearchQuery(Searchresult);
          
        }}
        className="px-4 py-1 flex items-center  gap-4 rounded-xl cursor-pointer transition duration-300 hover:bg-gray-300"
      >
        <i className="fa-sharp fa-solid fa-magnifying-glass  text-gray-500 cursor-pointer"></i>
        {/* <Link to="/"> */}
        <span>{Searchresult}</span>
        {/* </Link> */}
      </div>
    </Link>
  );
};

export default SearchResult;
