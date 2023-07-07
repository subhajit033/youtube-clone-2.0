import React from "react";
import { Link } from "react-router-dom";
import useChannelInfo from "../hooks/useChannelInfo";
import getVdoPublishedTime from "../utils/getVdoPublishedTime";
const VideoCard = ({ video, url, channelId }) => {
  const viewCount = Number(video?.statistics?.viewCount);
  const hoursDiff = getVdoPublishedTime(video?.snippet?.publishedAt);

  const channelInfo = useChannelInfo(channelId);

  return (
    <div className=" p-2 rounded-xl shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="mb-2">
        {/* video part */}
        <Link to={`/watch?v=${url}`}>
          <img
            className="w-80 h-auto rounded-xl"
            src={video?.snippet?.thumbnails?.maxres?.url}
            alt="thumbnail"
          />
        </Link>
      </div>
      {/* description part */}
      <div className="flex items-start space-x-4 px-0 w-80">
        <div className="">
          <img
            className="max-w-[2.5rem] rounded-full"
            src={channelInfo?.snippet?.thumbnails?.medium?.url}
            // channelInfo?.snippet?.thumbnails?.medium?.url
            alt="channel-logo"
          />
        </div>

        <div>
          <h2 className="font-semibold text-sm leading-5">
            {video?.snippet?.title}
          </h2>
          <p className="text-sm font-semibold text-gray-500">
            {video?.snippet?.channelTitle}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              {viewCount > 1000000
                ? (viewCount / 1000000).toFixed(1) + "M"
                : viewCount > 1000
                ? (viewCount / 1000).toFixed(1) + "K"
                : viewCount}{" "}
              views
            </p>
            <i
              style={{ fontSize: "0.3rem" }}
              className="fa-sharp fa-solid fa-circle text-gray-600"
            ></i>
            <p className="text-sm text-gray-600">
              {hoursDiff >= 24
                ? Math.round(hoursDiff / 24) + "days"
                : hoursDiff + "hours"}{" "}
              ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
