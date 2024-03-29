import React from "react";
import { IMG_CDN_URL } from "../utlis/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movieName, imgId, movieId }) => {
  if (!imgId) return null;

  // console.log(movieId);
  return (
    <div className="w-36 md:w-52 pr-2 ">
      <Link to="/browse/">
        <img
          className="hover:transition-all hover:scale-[115%] hover:z-20 hover:my-2  border rounded-md 
          duration-500 "
          alt={movieName}
          src={IMG_CDN_URL + imgId}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
