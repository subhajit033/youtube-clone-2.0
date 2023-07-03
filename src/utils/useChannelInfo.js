import { useEffect, useState } from "react";

const useChannelInfo = (channelId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    channelInfo(channelId);
  }, []);
  const channelInfo = async (channelId) => {
    const apiCall = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyB5jeiEonn7ayvuF-swnyjSVBlrD5Yt_ag`
    );
    const fetchedData = await apiCall.json();
    setData(fetchedData?.items[0]);
  };
  return data;
};

export default useChannelInfo;
