import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constant";
import VideoCardShimmer from "./VideoCardShimmer";
// import useChannelInfo from "../utils/useChannelInfo";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const apiCall = await fetch(YOUTUBE_API);
    const fetchedData = await apiCall.json();
    setVideos(fetchedData?.items);
  };

  return (
    <div className="flex flex-wrap justify-center items-start gap-10 h-[83vh] overflow-auto mt-4">
      {videos?.length === 0 || videos === undefined
        ? Array(10)
            .fill(" ")
            .map((_, inedx) => {
              return <VideoCardShimmer key={inedx} />;
            })
        : videos?.map((video) => {
            return (
              <VideoCard
                video={video}
                key={video.id}
                url={video.id}
                channelId={video?.snippet?.channelId}
              />
            );
          })}
    </div>
  );
};

export default VideoContainer;
