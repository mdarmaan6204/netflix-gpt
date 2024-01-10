import { useEffect } from "react";
import { addNowPlayingMovies } from "../utlis/moviesSlice";
import { API, API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch(API +"now_playing", API_OPTIONS);
  
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
      // console.log(json.results);
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;