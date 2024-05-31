import React, { useEffect } from "react";
import { auth } from "./Utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Utils/userSlice";
import { toggleGptSearchView } from "./Utils/GptSlice";
import { SUPPORTED_LANGUAGES } from "./Utils/Constants";
import { changeLanguage } from "./Utils/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-end items-center space-x-4 p-4 bg-gray-300 shadow-md">
      <select
        onChange={handleLanguageChange}
        className="py-2 px-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black text-white"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.indentifier} value={lang.indentifier}>
            {lang.name}
          </option>
        ))}
      </select>
      <button
        className="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        onClick={handleGptSearchClick}
      >
        GPT Search
      </button>
      <button
        onClick={handleSignOut}
        className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
