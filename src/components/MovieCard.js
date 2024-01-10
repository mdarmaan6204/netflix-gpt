import React from "react";
import { IMG_CDN_URL } from "../utlis/constants";

const MovieCard = ({movieName, imgId }) => {
  return (
    <div className="w-52 pr-2">
      <img alt={movieName} src= {IMG_CDN_URL + imgId} />
    </div>
  );
};

export default MovieCard;
