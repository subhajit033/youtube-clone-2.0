import React from "react";
import Buttons from "./childcomponents/Buttons";
const Genere = () => {
  const allGenere = [
    "All",
    "Music",
    "Game shows",
    "Fingerstyle",
    "Computer science",
    "Live",
    "Neet",
    "T-series",
    "Bollywood Music",
    "Reverbation",
    "Web dev",
  ];
  return (
    <div className="flex space-x-4 px-3 my-2">
      {allGenere.map((genere, index)=>{
        return <Buttons genere = {genere} key={index} />
      })}
    </div>
  );
};

export default Genere;
