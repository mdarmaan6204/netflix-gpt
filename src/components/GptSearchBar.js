import React, { useRef } from "react";
import lang from "../utlis/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BARD_API_KEY } from "../utlis/constants";
import { useNavigate } from "react-router-dom";
import { addGptMovieResult } from "../utlis/GptSlice";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchMovieTMBD = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();

    return json?.results;
  }

  const handleGptSearchClick = async () => {

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText.current.value +
      ". Only gives the 5 movies , comma separated like the example result given ahead. Example Result : Jawan,Pathan,War,Dunki,Salaar.";

    
    // BARD
    const genAI = new GoogleGenerativeAI(BARD_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();

    if(!text) navigate("/error");

    const gptMovies = text.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMBD(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies , movieResults : tmdbResults}));


  };
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-4 rounded-lg col-span-9"
        />
        <button
          className="col-span-3 m-4 bg-red-700 rounded-lg text-white py-2 px-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
