import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6 py-2 bg-black">
      <button className="text-lg md:text-xl font-bold py-4 text-white bg-red-800 p-4 m-4 rounded-xl">{title}</button>
      <div className="flex overflow-x-auto">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              imgId={movie.backdrop_path}
              movieName={movie.title}
              movieId = {movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
