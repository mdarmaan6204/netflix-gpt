import { useEffect } from "react";
import {  addUpcomingMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );

  const getUpcomingMovies = async () => {
    const data = await fetch(API + "upcoming", API_OPTIONS);

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
   !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
