import React from "react";

const NavChild = ({ele}) => {
  return (
    <div className="flex items-center space-x-4 pl-3 cursor-pointer py-1 rounded-lg transition duration-300 hover:bg-red-500 hover:text-gray-100">
      <img className="w-5" src={ele.url} alt="" />
      <p className="font-semibold">{ele.title}</p>
    </div>
  );
};

export default NavChild;
