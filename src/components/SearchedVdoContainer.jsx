import React from "react";
import SearchedVdo from "./SearchedVdo";
import useGetVdoSuggestions from "../utils/useGetVdoSuggestions";
const SearchedVdoContainer = () => {
  const data = useGetVdoSuggestions();
  console.log(data);
  return (
    <div className="border-2 border-black flex-1 h-[89vh] overflow-auto px-12">
      <SearchedVdo />
      <SearchedVdo />
      <SearchedVdo />
      <SearchedVdo />
      <SearchedVdo />
      <SearchedVdo />
    </div>
  );
};

export default SearchedVdoContainer;
