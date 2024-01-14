import { useEffect } from "react";
import { addTopRatedMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );

  const getTopRatedMovies = async () => {
    const data = await fetch(API + "top_rated", API_OPTIONS);

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
