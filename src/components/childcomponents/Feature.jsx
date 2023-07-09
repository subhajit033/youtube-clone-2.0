import React from "react";

const Feature = ({ele}) => {
  return (
    <div className="flex items-center space-x-4 pl-3 py-1 rounded-md cursor-pointer transition duration-300 hover:bg-red-500 hover:text-gray-100">
      <img className="w-6" src={ele.url} alt="" />
      <p className="font-semibold">{ele.title}</p>
    </div>
  );
};

export default Feature;
