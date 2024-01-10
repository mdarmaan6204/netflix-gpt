import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(API + "popular", API_OPTIONS);

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
