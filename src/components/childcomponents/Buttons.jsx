import React from "react";
import { Link } from "react-router-dom";
const Buttons = ({ genere }) => {
  return (
    <Link to={`/results?search_query=${genere.split(" ").join("-").toString().toLowerCase()}`}>
      <button className=" px-2 py-1 bg-gray-300 inline-block transition duration-300 cursor-pointer rounded-lg hover:scale-110">
      {genere}
    </button>
    </Link>
  );
};

export default Buttons;
