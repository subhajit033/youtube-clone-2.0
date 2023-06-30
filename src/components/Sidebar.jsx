import React from "react";
import icon from "../assets/youtube-images/icon";
import NavChild from "./childcomponents/NavChild";
import Feature from "./childcomponents/Feature";
const Sidebar = () => {
  console.log(icon);
  return (
    <div className="w-1/6 h-[91vh] border-2 border-black float-left px-2 block  overflow-auto">
      {/* 1st mainchild */}
      <div className="space-y-3 cu">
        {icon.nav.map((ele, index) => {
          return <NavChild ele={ele} key={index} />;
        })}
      </div>
      <div className="h-[1px] bg-gray-400 my-5"></div>

      <div className="space-y-3 cu">
        {icon.feature.map((ele, index) => {
          return <Feature ele={ele} key={index} />;
        })}
      </div>
      <div className="h-[1px] bg-gray-400 my-5"></div>
      {/* subcriptions */}
      {/* parent of subcription */}
      <div className="space-y-3 space-x-3">
        <p className="font-semibold">Subcriptions</p>
        {/* child_1 */}
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
        {/* child_2 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Clever Programmer</p>
          </div>
          <img className="w-8" src="youtube-img/live.png" alt="" />
        </div>
        {/* child_3 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">T-Series</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_4 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">FireShip</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_5 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Apna College</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_6 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Physics Wallah</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">online Tutorials</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Wscube Tech</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Tech wiser</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Sandeep Maheswari</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">BB ki Vines</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Triggered Insaan</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">Zee Music</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">KelVin Powell</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
        {/* child_7 */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 rounded-full"
              src="youtube-img/subhajit.jpeg"
              alt=""
            />
            <p className="text-sm font-semibold">freecodecamp 🔥</p>
          </div>
          <img className="w-2" src="youtube-img/record.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
