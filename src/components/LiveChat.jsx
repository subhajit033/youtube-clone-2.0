import React, { useEffect } from "react";
import ChatMessage from "./childcomponents/ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomString } from "../utils/helper";
const LiveChat = () => {
    const chatMessages = useSelector((store)=>{
        return store.chat.messages;
    }).slice().reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      //api polling
    //   console.log("api polling");
    //   dispatch(
    //     addMessage({
    //       name: generateRandomName(),
    //       text: generateRandomString(),
    //     })
    //   );
    }, 2000);
    //always clean setTimeout andsetInterval in side useeffect function
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="border h-[550px] w-full overflow-auto border-black rounded-lg px-4 flex flex-col-reverse">
      {
        chatMessages?.map((message, index)=>{
            return <ChatMessage key={index} ChatMessage = {message} />
        })
      }
    </div>
  );
};

export default LiveChat;
