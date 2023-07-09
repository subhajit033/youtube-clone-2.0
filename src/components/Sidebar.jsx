import React, { useEffect } from "react";
import icon from "../assets/youtube-images/icon";
import NavChild from "./childcomponents/NavChild";
import Feature from "./childcomponents/Feature";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => {
    return store.app.isMenuopen;
  });
  
  if (!isMenuOpen) {
    return null;
  }
  
  return (
    <div className="w-1/6 h-[90vh] float-left px-2 block  overflow-auto">
      {/* 1st mainchild */}
      <div className="space-y-3 cu">
        {icon.nav.map((ele, index) => {
          return <NavChild ele={ele} key={index} />;
        })}
      </div>
      <div className="h-[1px] bg-gray-400 my-5"></div>

      <div className="space-y-3 cu">
        {icon.feature.map((ele, index) => {
          return <Feature ele={ele} key={index} />;
        })}
      </div>
      <div className="h-[1px] bg-gray-400 my-5"></div>

      <div className="space-y-3 space-x-3">
        <p className="font-semibold">Subcriptions</p>
        {/* child_1 */}
      </div>
    </div>
  );
};

export default Sidebar;
