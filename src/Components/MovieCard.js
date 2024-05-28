import React from "react";
import { IMG_CDN_URL } from "./Utils/Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px]">
      <img
        className="w-full h-full object-cover rounded-md shadow-lg transition-transform transform hover:scale-105"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
