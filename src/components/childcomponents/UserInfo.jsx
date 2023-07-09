import React from "react";
import { Link } from "react-router-dom";
const UserInfo = () => {
  return (
    <div className="text-2xl flex items-center gap-8">
      <i className="fa-solid fa-video text-gray-500 cursor-pointer"></i>
      <i className="fa-regular fa-bell cursor-pointer"></i>

      <img
        className="w-10"
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
        alt="mine"
      />
    </div>
  );
};

export default UserInfo;
