import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  
  
  const mainMovie = movies[Math.floor(Math.random() *5)];
  const { title, overview, id } = mainMovie;

  return (
    <div className="pt-[35%] md:pt-0 bg-black">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
