import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] md:pt-[20%] px-5 md:px-20 absolute text-white aspect-video bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block  px-6 w-1/3 text-lg">{overview} </p>
      <div className="my-2 md:my-0">
        <button className="m-4 bg-white text-black font-bold md:px-16 px-2 py-1 rounded-lg text-xl md:p-4 hover:bg-opacity-80">
         ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white px-16 rounded-lg text-xl p-4 bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
