import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";
import useGetVideos from "../hooks/useGetVideos";
import { useDispatch } from "react-redux";
import { removeUrl, removeSubscriber } from "../storeSlices/channelSlice";
const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeUrl());
    dispatch(removeSubscriber());
  }, []);
  const videos = useGetVideos();

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
