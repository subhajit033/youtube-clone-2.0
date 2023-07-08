import React from "react";
import getVdoPublishedTime from "../utils/getVdoPublishedTime";
import { Link } from "react-router-dom";
import useChannelInfo from "../hooks/useChannelInfo";
import { useDispatch } from "react-redux";
import { addUrl, addSubscriber } from "../storeSlices/channelSlice";
const SearchedVdo = ({ video, channelId }) => {
  const dispatch = useDispatch();
  const channelInfo = useChannelInfo(channelId);
  const publishedAt = getVdoPublishedTime(video?.snippet?.publishedAt);
  const handleSubscriber =()=>{
    dispatch(addUrl(channelInfo?.snippet?.thumbnails?.medium?.url));
    dispatch(addSubscriber(channelInfo?.statistics?.subscriberCount))
  }
  return (
    <div className="flex items-start gap-6 my-4">
      <div className="">
        {/* video part */}
        <Link to={`/watch?v=${video?.id.videoId}`}>
          <img onClick={handleSubscriber}
            className="w-96 h-auto rounded-xl"
            src={video?.snippet?.thumbnails?.medium?.url}
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex items-start space-x-4 px-0 w-[45vw]">
        <div className="space-y-2">
          <h2 className="font-semibold text-xl leading-5">
            {video?.snippet?.title}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              {publishedAt}
              ago
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="max-w-[2.5rem] rounded-full"
              src={channelInfo?.snippet?.thumbnails?.medium?.url}
              // channelInfo?.snippet?.thumbnails?.medium?.url
              alt="channel-logo"
            />
            <p className="text-sm font-semibold text-gray-500">
              {video?.snippet?.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedVdo;
