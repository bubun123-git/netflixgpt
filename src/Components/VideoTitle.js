import React from "react";

const VideoTitle = ({ title, overview }) => {
  console.log("VideoTitle Props:", { title, overview });
  return (
    <div className="pt-36 px-24 max-w-4xl bg-gradient-to-r from-black via-transparent to-transparent text-white mx-auto text-left z-10 absolute">
      <h1 className="text-6xl font-extrabold mb-4">{title}</h1>
      <p className="text-lg text-gray-200 mb-8">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-red-600 text-white py-2 px-8 rounded-md hover:bg-red-700 transition duration-300 font-semibold hover: bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-700 text-white py-2 px-8 rounded-md hover:bg-gray-800 transition duration-300 font-semibold hover: bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
