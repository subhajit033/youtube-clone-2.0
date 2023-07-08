import React from "react";

const SuggestedVdo = () => {
  return (
    <div className="flex items-start gap-4 my-4">
      <div className="">
        {/* video part */}
        {/* <Link to={`/watch?v=${video?.id.videoId}`}> */}
        <img
          className="w-96 h-auto rounded-xl"
          src={
            "https://i.ytimg.com/an_webp/aCaTUryjWrw/mqdefault_6s.webp?du=3000&sqp=CKSupaUG&rs=AOn4CLAxPmsSs1Qtlzdjv_7kzBMrEI9k8A"
          }
          // video?.snippet?.thumbnails?.medium?.url
          alt="thumbnail"
        />
        {/* </Link> */}
      </div>
      <div className="flex items-start space-x-4 px-0 w-[45vw]">
        <div className="space-y-1">
          <h2 className="font-semibold w-60 leading-5 overflow-hidden text-ellipsis whitespace-nowrap">
            {`How to Actually Get a Job in Web Development (Get Hired) 👨‍💻`}
          </h2>

          <div className="flex items-center gap-3">
            {/* <img
              className="max-w-[2.5rem] rounded-full"
              src={`https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s88-c-k-c0x00ffffff-no-rj`}
              // channelInfo?.snippet?.thumbnails?.medium?.url
              alt="channel-logo"
            /> */}
            <p className="text-sm font-semibold text-gray-500">
              {`Code With Harry`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-600">
              {"23 hours"}
              ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVdo;
