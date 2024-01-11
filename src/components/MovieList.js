import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  // console.log(movies);
  return (
    <div className="px-6 bg-black">
      <h1 className="text-lg md:text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              imgId={movie.backdrop_path}
              movieName={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
