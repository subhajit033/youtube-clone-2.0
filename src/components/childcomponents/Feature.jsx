import React from "react";

const Feature = ({ele}) => {
  return (
    <div className="flex items-center space-x-4 pl-3 cursor-pointer">
      <img className="w-6" src={ele.url} alt="" />
      <p className="font-semibold">{ele.title}</p>
    </div>
  );
};

export default Feature;
