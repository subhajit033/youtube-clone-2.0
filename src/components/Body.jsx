import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Status from "./Status";
import useStatus from "../hooks/useStatus";
const Body = () => {
  const isOnline = useStatus();
  if (!isOnline) {
    return <Status />;
  }
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
