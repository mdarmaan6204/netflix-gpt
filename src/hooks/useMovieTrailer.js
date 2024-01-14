import { useEffect } from "react";
import { addTrailerVideo } from "../utlis/moviesSlice";
import { API_OPTIONS } from "../utlis/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //   Fetch the trailer and update the store
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video.name === "Official Trailer"
    );
    const x = Math.floor(Math.random()*10);
    const trailer = filterData?.length ? filterData[0] : json.results[x];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
