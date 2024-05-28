import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "./hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";

const Browse = () => {
  //Fetch Data from TMDB API and update the store

  useNowPlayingMovie();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
