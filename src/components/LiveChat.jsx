import React, { useEffect, useState } from "react";
import ChatMessage from "./childcomponents/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [text, setText] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(true);
  const chatMessages = useSelector((store) => {
    return store.chat.messages;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      //api polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          text: generateRandomString(),
        })
      );
    }, 2000);
    //always clean setTimeout andsetInterval in side useeffect function
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setIsChatVisible(!isChatVisible);
        }}
        className="bg text-blue-500 px-2 py-2 rounded-lg my-4 border-2 border-blue-500 transition duration-300 hover:bg-blue-500 hover:text-white"
      >
        {isChatVisible ? "Hide Live Chat" : "Show Live Chat"}
      </button>
      {isChatVisible && (
        <div className="border border-black rounded-lg">
          <div className=" h-[550px] w-full overflow-auto  px-4 flex flex-col-reverse">
            {chatMessages?.map((message, index) => {
              return <ChatMessage key={index} ChatMessage={message} />;
            })}
          </div>
          <form
            className="relative"
            onSubmit={(e) => {
              dispatch(
                addMessage({
                  name: "Subhajit",
                  text: text,
                })
              );
              setText("");
              e.preventDefault();
            }}
          >
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
              className="w-full px-2 py-1.5 rounded-lg border border-black focus:outline-none focus:border-blue-600"
              type="text"
              placeholder="Enter your message"
            />
            <i
              onClick={() => {
                dispatch(
                  addMessage({
                    name: "Subhajit",
                    text: text,
                  })
                );
                setText("");
              }}
              className="fa-solid fa-paper-plane text-xl absolute right-6 top-1 text-blue-500 cursor-pointer"
            ></i>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
