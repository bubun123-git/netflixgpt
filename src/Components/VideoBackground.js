import React, { useEffect } from "react";
import { API_OPTIONS } from "./Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "./Utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  // Fetch the trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);

  return (
    <div>
      {trailerVideo ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoBackground;
