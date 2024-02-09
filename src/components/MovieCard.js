import React from "react";
import { IMG_CDN_URL } from "../utlis/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movieName, imgId }) => {
  if (!imgId) return null;
  return (
    <div className="w-36 md:w-52 pr-2">
      <Link to = "">
        <img
          className="hover:transition-all hover:scale-[1.15] hover:z-20 hover : my-2  border rounded-md"
          alt={movieName}
          src={IMG_CDN_URL + imgId}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
