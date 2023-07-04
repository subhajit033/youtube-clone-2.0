import React, { useEffect } from "react";
import Genere from "./Genere";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className="flex-1">
      <Genere />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
