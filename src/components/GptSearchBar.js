import React from "react";
import lang from "../utlis/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-4 rounded-lg col-span-9"
        />
        <button className="col-span-3 m-4 bg-red-700 rounded-lg text-white py-2 px-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
