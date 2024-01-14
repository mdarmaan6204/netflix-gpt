import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(API + "popular", API_OPTIONS);

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
