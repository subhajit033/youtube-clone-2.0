import { useState, useEffect } from "react";
import { API_KEY } from "./constant";
const useGetVdoSuggestions = (searchQuery) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getVdoSuggestions(searchQuery);
  }, []);
  const getVdoSuggestions = async (searchQuery) => {
    const apiCall = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`
    );
    const fetchedData = await apiCall.json();
    setData(
      fetchedData?.items?.filter((video) => {
        return video?.id?.kind === "youtube#video";
      })
    );
  };
  return data;
};
export default useGetVdoSuggestions;
