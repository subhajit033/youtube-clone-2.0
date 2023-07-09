import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";
const useGetVdoDetails = (videoId) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    getSpecificVdo(videoId);
  }, [videoId]);
  const getSpecificVdo = async (videoId) => {
    try {
      const apiCall = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      const fetchedData = await apiCall.json();

      setVideoDetails(fetchedData?.items[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return videoDetails;
};

export default useGetVdoDetails;
