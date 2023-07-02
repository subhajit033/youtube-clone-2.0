import React from "react";
import Genere from "./Genere";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {  
  return (
    <div className="border-2 border-black flex-1">
      <Genere />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
