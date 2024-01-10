import { useEffect } from "react";
import {  addUpcomingMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(API + "upcoming", API_OPTIONS);

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
