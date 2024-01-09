import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-20 absolute text-white aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="px-6 w-1/3 text-lg">{overview} </p>
      <div>
        <button className="m-4 bg-white text-black font-bold px-16 rounded-lg text-xl p-4 hover:bg-opacity-80">
         ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-16 rounded-lg text-xl p-4 bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
