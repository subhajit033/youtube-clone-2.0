import React, { useEffect } from "react";
import SearchedVdo from "./SearchedVdo";
import VideoCardShimmer from "./VideoCardShimmer";
import useGetVdoSuggestions from "../utils/useGetVdoSuggestions";
import { useSearchParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
const SearchedVdoContainer = () => {
  const [searchParams] = useSearchParams();
  const searhQuery = searchParams.get("search_query");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  const data = useGetVdoSuggestions(searhQuery);

  if (!data) {
    return (
      <div className="flex flex-1 flex-wrap justify-center items-start gap-10  mt-4">
        {Array(6)
          .fill(" ")
          .map((_, inedx) => {
            return <VideoCardShimmer key={inedx} />;
          })}
      </div>
    );
  }
  return (
    <div className="border-2 border-black flex-1 h-[89vh] overflow-auto px-12">
      {data?.map((video) => {
        return <SearchedVdo key={video?.id?.videoId} video={video} />;
      })}
    </div>
  );
};

export default SearchedVdoContainer;
