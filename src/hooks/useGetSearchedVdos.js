import { useState, useEffect } from "react";
import { API_KEY } from "../utils/constant";
const useGetSearchedVdos = (searchQuery) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getVdoSuggestions(searchQuery);
  }, [searchQuery]);
  const getVdoSuggestions = async (searchQuery) => {
    try {
      const apiCall = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchQuery}&key=${API_KEY}`
      );
      const fetchedData = await apiCall.json();
      setData(
        fetchedData?.items?.filter((video) => {
          return video?.id?.kind === "youtube#video";
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return data;
};
export default useGetSearchedVdos;
