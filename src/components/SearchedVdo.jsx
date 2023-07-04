import React from "react";

const SearchedVdo = () => {
  return (
    <div className="flex items-start gap-6 my-4">
      <div className="">
        {/* video part */}
        <img
          className="w-96 h-auto rounded-xl"
          src={
            "https://i.ytimg.com/vi/hKB-YGF14SY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2knsH3PHkgmexe5C85L3lbk2FRw"
          }
          alt="thumbnail"
        />
      </div>
      <div className="flex items-start space-x-4 px-0 w-[45vw]">
        <div className="space-y-2">
          <h2 className="font-semibold text-xl leading-5">
            {/* {video?.snippet?.title} */}
            Learn Javascript in one hour
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              {/* {viewCount > 1000000
                ? (viewCount / 1000000).toFixed(1) + "M"
                : viewCount > 1000
                ? (viewCount / 1000).toFixed(1) + "K"
                : viewCount}{" "} */}
              223K views
            </p>
            <i
              style={{ fontSize: "0.3rem" }}
              className="fa-sharp fa-solid fa-circle text-gray-600"
            ></i>
            <p className="text-sm text-gray-600">
              {/* {hoursDiff >= 24
                ? Math.round(hoursDiff / 24) + "days"
                : hoursDiff + "hours"}{" "} */}
              15 hours ago
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="max-w-[2.5rem] rounded-full"
              src={
                "https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj"
              }
              // channelInfo?.snippet?.thumbnails?.medium?.url
              alt="channel-logo"
            />
            <p className="text-sm font-semibold text-gray-500">
              {/* {video?.snippet?.channelTitle} */}
              CodeWithHarry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedVdo;
