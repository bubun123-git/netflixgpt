import React from "react";
import { auth } from "./Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/");
      })
      .catch((error) => {
        Navigate("/error")
      });
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer z-20"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
