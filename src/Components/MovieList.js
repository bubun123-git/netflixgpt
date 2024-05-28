import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="p-6 bg-black">
    <h1 className="text-3xl py-2 text-white font-bold">{title}</h1>
    <div className="relative">
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black"></div>
    </div>
  </div>
  );
};

export default MovieList;
