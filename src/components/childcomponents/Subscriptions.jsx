import React from "react";

const Subscriptions = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <img
          className="w-8 rounded-full"
          src="youtube-img/subhajit.jpeg"
          alt=""
        />
        <p className="text-sm font-semibold">CodeWithHarry</p>
      </div>
      <img className="w-8" src="youtube-img/live.png" alt="" />
    </div>
  );
};

export default Subscriptions;
