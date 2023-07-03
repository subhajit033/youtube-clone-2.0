import React, { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constant";
import SearchResult from "./SearchResult";
const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions(searchQuery);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSuggestions = async (searchQuery) => {
    const apiCall = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const fetchedData = await apiCall.json();
    setSuggestions(fetchedData[1]);
  };

  return (
    <div className="relative">
      <div className="flex">
        <input
          onChange={handleSearchQuery}
          className="search-bar border-2 border-gray-400 w-96 px-4 py-1 rounded-l-full border-r-0 rounded-r-none focus:outline-none focus:border-2 focus:border-blue-500 transition duration-300"
          type="text"
          placeholder="Search"
          value={searchQuery}
        />
        <span className="border-2 border-gray-400 py-1 px-4 rounded-r-full rounded-l-none bg-gray-300">
          <i className="fa-sharp fa-solid fa-magnifying-glass text-xl text-gray-500 cursor-pointer"></i>
        </span>
      </div>
      {suggestions.length > 0 && (
        <div className="mt-2 border py-2 border-gray-400 shadow-2xl rounded-xl absolute w-[88%] bg-white z-50">
          {suggestions?.map((Searchresult, index) => {
            return (
              <SearchResult Searchresult={Searchresult} key={SearchResult} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
