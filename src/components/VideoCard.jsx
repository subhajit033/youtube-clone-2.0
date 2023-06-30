import React from "react";

const VideoCard = () => {
  return (
    <div>
      <div className="mb-2 overflow-hidden ">
        {/* video part */}
        <img
          className="w-72 h-auto rounded-xl"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c455078dc87c4e5b5c54648b9d7c79f3"
          alt="thumbnail"
        />
      </div>
      {/* description part */}
      <div className="flex items-start space-x-4 px-0 w-72 border-2 border-black">
        <div>
          <img
            className="w-10 rounded-full"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c455078dc87c4e5b5c54648b9d7c79f3"
            alt="channel-logo"
          />
        </div>

        <div>
          <h2 className="font-semibold text-sm leading-4">
            Common css mistakes || kelvein Powel | Css
          </h2>
          <p className="text-sm">kelvin Powel.</p>
          <div className="flex items-center space-x-1">
            
            <p className="text-xs">134k.</p>
            <p className="text-xs">8 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
