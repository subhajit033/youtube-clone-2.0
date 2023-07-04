import { useEffect, useState } from "react";

const useChannelInfo = (channelId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    channelInfo(channelId);
  }, []);
  const channelInfo = async (channelId) => {
    try {
      const apiCall = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyCPKc81lUOLhviVHldc6EeruLp9qFliKcc`
      );
      const fetchedData = await apiCall.json();

      setData(fetchedData?.items[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return data;
};

export default useChannelInfo;
