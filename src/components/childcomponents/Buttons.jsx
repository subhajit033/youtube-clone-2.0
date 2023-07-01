import React from "react";

const Buttons = ({genere}) => {
  return (
    <button className="px-3 py-1 bg-gray-300 inline-block cursor-pointer rounded-lg">
      {genere}
    </button>
  );
};

export default Buttons;
