import { useEffect, useState } from "react";

const useGetVdoDetails = (videoId) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    getSpecificVdo(videoId);
  }, []);
  const getSpecificVdo = async (videoId) => {
    const apiCall = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCPKc81lUOLhviVHldc6EeruLp9qFliKcc`
    );
    const fetchedData = await apiCall.json();

    setVideoDetails(fetchedData?.items[0]);
  };
  return videoDetails;
};

export default useGetVdoDetails;
