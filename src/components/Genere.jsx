import React from "react";
import Buttons from "./childcomponents/Buttons";
const Genere = () => {
  const allGenere = [
    "All",
    "Web Dev",
    "React js",
    "Cloud Computing",
    "Computer science",
    "CyberSecurity",
    "Machine Learing",
    "Blockchain",
    "Music",
    "Cricket",
    "Geo Politics",
  ];
  return (
    <div className="flex space-x-4 px-3 my-2 border overflow-auto">
      {allGenere.map((genere, index)=>{
        return <Buttons genere = {genere} key={index} />
      })}
    </div>
  );
};

export default Genere;
