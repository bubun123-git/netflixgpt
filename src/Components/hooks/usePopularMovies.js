import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched Popular Movies:", data);
      dispatch(addPopularMovies(data.results));
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, [dispatch]);

  return null;
};

export default usePopularMovies;
