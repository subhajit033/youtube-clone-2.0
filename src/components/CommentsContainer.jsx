import React from "react";

const commentsData = [
  {
    name: "@Subhajit111",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
    replies: [
      {
        name: "@Subhajit111",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
        replies: [],
      },
      {
        name: "@Subhajit111",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
        replies: [
          {
            name: "@Subhajit111",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
            replies: [
              {
                name: "@Subhajit111",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "@Subhajit111",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
    replies: [
      {
        name: "@Subhajit111",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
        replies: [
          {
            name: "@Subhajit111",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "@Subhajit111",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
    replies: [
      {
        name: "@Subhajit111",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
        replies: [],
      },
    ],
  },
  {
    name: "@Subhajit111",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
    replies: [
      {
        name: "@Subhajit111",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
        replies: [
          {
            name: "@Subhajit111",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
            replies: [
              {
                name: "@Subhajit111",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quos",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-start gap-4 bg-gray-100 p-2 rounded-lg my-1">
      <img
        className="w-10 rounded-full"
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
        alt="user-avatar"
      />
      <div>
        <h2 className="font-semibold">{name}</h2>
        {/* {always use fixed width like px, rem don't use % it relative to witdh of paragraph} */}
        <p className="leading-5 w-[50rem]">{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comments data={comment}  />
        <div className="border-l border-l-black ml-5 pl-2">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className="px-4">
      <h1 className="text-xl font-semibold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
