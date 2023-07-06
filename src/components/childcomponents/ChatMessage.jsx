import React from "react";

const ChatMessage = ({ChatMessage}) => {
  return (
    <div className="flex items-start gap-3 my-2">
      <img
        className="w-8"
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
        alt="user-avatar"
      />
      <div className="space-x-3">
        <span className="font-semibold">{ChatMessage.name}</span>
        <span className="text-sm">{ChatMessage.text}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
