import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckValidateData from "./Utils/Validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = CheckValidateData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 right-0 py-6 px-8 bg-gradient-to-b from-black z-10">
        <img
          className="w-52 mx-auto"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
        <form
          onSubmit={handleSubmit}
          className="absolute left-1/2 transform -translate-x-1/2 w-72 sm:w-96 p-8 bg-black rounded-lg shadow-lg mt-24"
        >
          <h1 className="font-bold text-slate-50 text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="block w-full py-3 px-4 mb-4 bg-gray-900 text-white rounded focus:outline-none focus:bg-gray-800"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="block w-full py-3 px-4 mb-4 bg-gray-900 text-white rounded focus:outline-none focus:bg-gray-800"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="block w-full py-3 px-4 mb-4 bg-gray-900 text-white rounded focus:outline-none focus:bg-gray-800"
          />
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="block w-full py-3 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <br />
          <button
            onClick={toggleSignInForm}
            className="block w-full cursor-pointer py-4 px-4  text-white rounded hover:bg-green-700 focus:outline-none"
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already have an account? Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
