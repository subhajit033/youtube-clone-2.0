import React from "react";
import { Link } from "react-router-dom";
const Status = () => {
  return (
    <div className="wrapper-container">
      <div className="wrapper">
        <h1>OFFLINE</h1>
        <h4 className="text-2xl">Please check your internet connection</h4>
        <Link to="/" className="button">
          RETRY
        </Link>
      </div>
    </div>
  );
};
export default Status;
