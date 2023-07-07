import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constant";
const useChannelInfo = (channelId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    channelInfo(channelId);
  }, []);
  const channelInfo = async (channelId) => {
    try {
      const apiCall = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
      );
      const fetchedData = await apiCall.json();
        //console.log(fetchedData?.items[0]?.statistics?.subscriberCount);
      setData(fetchedData?.items[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return data;
};

export default useChannelInfo;
