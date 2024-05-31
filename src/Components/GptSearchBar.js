import React from "react";
import lang from "./languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className="flex items-center justify-center bg-white">
      <form className="w-full max-w-2xl flex items-center bg-black p-1 rounded-lg">
        <input
          type="text"
          className="flex-grow p-4 text-black bg-white border-none rounded-l-lg focus:outline-none"
          placeholder={lang[langKey].gptSearchHolder}
        />
        <button className="py-3 px-6 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
