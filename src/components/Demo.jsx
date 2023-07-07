import React, { useState } from "react";

const Demo = () => {
  console.log("Render--");
  const [text, setText] = useState("");
  return <div className="m-4 p-4 w-96 h-96 border border-black">
    <div>
      <input value={text} className="border border-black p-2" type="text" onChange={(e)=>{
        setText(e.target.value)
      }} />
    </div>
  </div>;
};

export default Demo;
