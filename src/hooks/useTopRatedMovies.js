import { useEffect } from "react";
import { addTopRatedMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(API + "top_rated", API_OPTIONS);

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
