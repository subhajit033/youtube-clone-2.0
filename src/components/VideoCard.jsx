import React from "react";

const VideoCard = ({video}) => {
  return (
    <div>
      <div className="mb-2">
        {/* video part */}
        <img
          className="w-80 h-auto rounded-xl"
          src={video?.snippet?.thumbnails?.maxres?.url}
          alt="thumbnail"
        />
      </div>
      {/* description part */}
      <div className="flex items-start space-x-4 px-0 w-80">
        <div className="">
          <img
            className="max-w-[2.5rem] rounded-full"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c455078dc87c4e5b5c54648b9d7c79f3"
            alt="channel-logo"
          />
        </div>

        <div>
          <h2 className="font-semibold text-sm leading-4">
            {video?.snippet?.title}
          </h2>
          <p className="text-sm">{video?.snippet?.channelTitle}</p>
          <div className="flex items-center gap-2">
            <p className="text-xs">134k</p>
            <i style={{fontSize: "0.3rem"}} className="fa-sharp fa-solid fa-circle text-gray-600"></i>
            <p className="text-xs">8 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
