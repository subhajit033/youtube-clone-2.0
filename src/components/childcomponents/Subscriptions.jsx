import React from "react";
import { Link } from "react-router-dom";
const Subscriptions = ({ topic }) => {
  return (
    <Link
      to={`/results?search_query=${topic
        .split(" ")
        .join("-")
        .toString()
        .toLowerCase()}`}
    >
      <p className="text-sm font-semibold w-56 overflow-hidden text-ellipsis whitespace-nowrap py-1 px-2 rounded-lg cursor-pointer transition duration-300 hover:bg-red-500 hover:text-gray-100">
        {topic}
      </p>
    </Link>
  );
};

export default Subscriptions;
