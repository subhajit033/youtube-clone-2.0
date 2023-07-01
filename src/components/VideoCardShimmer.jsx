import React from "react";

const VideoCardShimmer = () => {
  return (
    <div>
      <div className="mb-2">
        <div className="w-80 h-48 rounded-xl shine"></div>
      </div>
      {/* description part */}
      <div className="flex items-start space-x-4 px-0 w-80">
        <div>
          <div className="w-10 h-10 rounded-full shine"></div>
        </div>

        <div className="space-y-2">
          <h2 className="w-52 h-3 rounded-full shine"></h2>
          <p className="w-44 h-3 rounded-full shine"></p>
          <div className="flex items-center gap-2">
            <p className="w-10 h-2 rounded-full shine"></p>
            <i
              style={{ fontSize: "0.3rem" }}
              className="fa-sharp fa-solid fa-circle text-gray-400"
            ></i>
            <p className="w-10 h-2 rounded-full shine"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
// const ShimmerContainer = ()=>{
//   return(
//   <div>
//     {Array(10).fill(" ").map((_, index)=>{
//       return <VideoCardShimmer key={index} />
//     })}
//   </div>
    
//   )
// }

export default VideoCardShimmer;
