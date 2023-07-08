import React from "react";
import SuggestedVdo from "./SuggestedVdo";
import SuggestedVdoShimmer from "./SuggestedVdoShimmer";
import useGetSuggestedVdo from "../hooks/useGetSuggestedVdo";
const SuggestedVdocontainer = () => {
  const suggestedVdoArr = useGetSuggestedVdo();
  return (
    <div>
      {suggestedVdoArr.length === 0
        ? Array(10)
            .fill(" ")
            .map((ele, inedx) => {
              return <SuggestedVdoShimmer key={inedx} />;
            })
        : suggestedVdoArr?.map((video) => {
            return (
              <SuggestedVdo
                key={video?.id?.videoId}
                url={video?.id?.videoId}
                video={video}
              />
            );
          })}
    </div>
  );
};

export default SuggestedVdocontainer;
