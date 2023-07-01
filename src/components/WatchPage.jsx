import React from "react";

const WatchPage = () => {
  return (
    <div className="w-[100%] flex px-12 gap-10">
      <div className="border-2 border-black h-[90vh] w-2/3">
        <div>
          <img
            src="https://i.ytimg.com/vi/gYu2dEju6bI/maxresdefault.jpg"
            alt=""
          />
          <h1 className="text-xl font-semibold my-2">
            Sandeep Bhaya|| Season 1 || Ep.1
          </h1>

          <div className="flex justify-between items-center">
            {/* channel description */}
            <div className="flex items-center gap-5 my-4">
              <img
                className="w-11"
                src="https://yt3.ggpht.com/TopG7pa5R-ON0Bj1xNchLLZ4s0KGH8AJVeABJjuIuTdbZowqiDVxZIgjBeqDSsFj44bcVQ6W5A=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
              />
              <div>
                <p className="font-bold">PhysicsWallah</p>
                <p className="text-sm">910K subscribers</p>
              </div>
              <button className="bg-black text-white px-4 py-1.5 rounded-full hover:opacity-80 transition duration-300">
                Subscribe
              </button>
            </div>
            {/* like-dislike */}
            {/* <i class="fa-solid fa-thumbs-up"></i> */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[2px]">
                <button className="bg-gray-300 px-4 rounded-l-full">
                  <i className="fa-regular fa-thumbs-up text-2xl text-gray-600"></i>
                </button>
                <button className="bg-gray-300 px-4 rounded-r-full">
                  <i class="fa-regular fa-thumbs-down text-2xl text-gray-600"></i>
                </button>
              </div>
              <button className="bg-gray-300 px-5 rounded-full py-0.5  flex items-center gap-2">
              <i class="fa-regular fa-share-from-square text-2xl text-gray-600"></i>
              <span className="font-semibold text-gray-600">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-600 h-[90vh] w-1/3"></div>
    </div>
  );
};

export default WatchPage;
