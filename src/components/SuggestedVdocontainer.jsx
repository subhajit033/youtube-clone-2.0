import React from "react";
import SuggestedVdo from "./SuggestedVdo";
import SuggestedVdoShimmer from "./SuggestedVdoShimmer";
import useGetSuggestedVdo from "../hooks/useGetSuggestedVdo";
const SuggestedVdocontainer = ({ videoId }) => {
  const suggestedVdoArr = useGetSuggestedVdo(videoId);
  return (
    <div>
      {suggestedVdoArr === undefined || suggestedVdoArr?.length === 0
        ? Array(10)
            .fill(" ")
            .map((ele, inedx) => {
              return <SuggestedVdoShimmer key={inedx} />;
            })
        : suggestedVdoArr?.map((video) => {
            return <SuggestedVdo key={video?.id?.videoId} video={video} />;
          })}
    </div>
  );
};

export default SuggestedVdocontainer;
