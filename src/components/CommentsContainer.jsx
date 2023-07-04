import React from "react";

const Comments = () => {
  return (
    <div className="flex items-start gap-4">
      <img
        className="w-10"
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
        alt="user-avatar"
      />
      <div>
        <h2 className="font-semibold">@Subhajit111</h2>
        {/* {always use fixed width like px, rem don't use % it relative to witdh of paragraph} */}
        <p className="leading-5 w-[50rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos
        </p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="border-2 border-black px-4">
      <h1 className="text-xl font-semibold">Comments:</h1>
      <Comments />
    </div>
  );
};

export default CommentsContainer;
