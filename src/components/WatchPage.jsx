import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../storeSlices/appSlice";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import useGetVdoDetails from "../hooks/useGetVdoDetails";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SuggestedVdocontainer from "./SuggestedVdocontainer";
const WatchPage = () => {
  const avatarUrl = useSelector((store) => {
    return store.channel.bannerUrl;
  });
  const subscriberCount = Number(
    useSelector((store) => {
      return store.channel.subscriberCount;
    })
  );
  
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const videoDetails = useGetVdoDetails(videoId);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [videoId])
  if (!videoDetails) {
    return <Loader />;
  }

  const likeCount = Number(videoDetails?.statistics?.likeCount);
  return (
    <div className="w-[100%] flex px-12 gap-10">
      <div className="border-2 border-black h-[90vh] w-2/3">
        <div>
          <iframe
            width="950"
            height="550"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="text-xl font-semibold my-2">
            {videoDetails?.snippet?.title}
          </h1>

          <div className="flex justify-between items-center">
            {/* channel description */}
            <div className="flex items-center gap-5 my-4">
              <img className="w-11 rounded-full" src={avatarUrl} alt="avatar" />
              <div>
                <p className="font-bold">
                  {videoDetails?.snippet?.channelTitle}
                </p>
                <p className="text-sm">
                  {subscriberCount > 1000000
                    ? (subscriberCount / 1000000).toFixed(1) + "M "
                    : subscriberCount > 1000
                    ? (subscriberCount / 1000).toFixed(1) + "K "
                    : subscriberCount}
                  subscribers
                </p>
              </div>
              <button className="bg-black text-white px-4 py-1.5 rounded-full hover:opacity-80 transition duration-300">
                Subscribe
              </button>
            </div>
            {/* like-dislike */}
            {/* <i className="fa-solid fa-thumbs-up"></i> */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[2px]">
                <button className="bg-gray-300 px-2 rounded-l-full flex items-center gap-2">
                  <i className="fa-regular fa-thumbs-up text-2xl text-gray-600"></i>
                  <span>
                    {likeCount > 100000
                      ? (likeCount / 100000).toFixed(1) + "L"
                      : (likeCount / 1000).toFixed(1) + "K"}
                  </span>
                </button>
                <button className="bg-gray-300 px-4 rounded-r-full">
                  <i className="fa-regular fa-thumbs-down text-2xl text-gray-600"></i>
                </button>
              </div>
              <button className="bg-gray-300 px-5 rounded-full py-0.5  flex items-center gap-2">
                <i className="fa-regular fa-share-from-square text-2xl text-gray-600"></i>
                <span className="font-semibold text-gray-600">Share</span>
              </button>
            </div>
          </div>
        </div>
        {/* {comment section} */}
        <div>
          <CommentsContainer />
        </div>
      </div>

      <div className="w-1/3">
        <LiveChat />
        <SuggestedVdocontainer videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
