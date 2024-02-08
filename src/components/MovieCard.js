import React from "react";
import { IMG_CDN_URL } from "../utlis/constants";

const MovieCard = ({movieName, imgId}) => {
  if(!imgId) return null;
  return (
    <div className="w-36 md:w-52 pr-2">
      <img className="hover:scale-125 hover:z-20 hover:m-2  border" alt={movieName} src= {IMG_CDN_URL + imgId} />
    </div>
  );
};

export default MovieCard;
