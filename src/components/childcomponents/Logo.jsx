import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../storeSlices/appSlice";
import { Link } from "react-router-dom";
const Logo = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center gap-4">
      <div onClick={handleToggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-9 h-9 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <Link to="/">
        <img
          className="w-32 rounded-lg"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
          alt="youtube-logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
