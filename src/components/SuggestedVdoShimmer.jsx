import React from "react";

const SuggestedVdoShimmer = () => {
  return (
    <div className="flex items-start gap-4 my-4">
      <div className="">
        <div className="w-40 h-24 rounded-xl shine"></div>
      </div>
      <div className="flex items-start space-x-4 px-0 w-[45vw]">
        <div className="space-y-1">
          <h2 className="w-56 h-4 shine rounded-lg">

          </h2>

          <div className="flex items-center gap-3">
            <p className="w-44 h-3  shine rounded-lg"></p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-10 h-3 shine rounded-lg"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVdoShimmer;
