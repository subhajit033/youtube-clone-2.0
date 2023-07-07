import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
 const useGetVideos = ()=>{
    const [videos, setVideos] = useState([]);
    
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const apiCall = await fetch(YOUTUBE_API);
    const fetchedData = await apiCall.json();
    
    setVideos(fetchedData?.items);
  };
  return videos;
 }
 export default useGetVideos;