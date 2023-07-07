import React from "react";
import { Link } from "react-router-dom";
const UserInfo = () => {
  return (
    <div className="text-2xl flex items-center gap-8">
      <i className="fa-solid fa-video text-gray-500 cursor-pointer"></i>
      <i className="fa-regular fa-bell cursor-pointer"></i>
      <Link to="/results">
        <i className="fa-solid fa-user text-gray-500 cursor-pointer"></i>
      </Link>
    </div>
  );
};

export default UserInfo;
