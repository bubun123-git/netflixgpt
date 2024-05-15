import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckValidateData from "./Utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Utils/Firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    console.log("button clicked");

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const nameValue = nameRef.current ? nameRef.current.value : null;

    const message = CheckValidateData(emailValue, passwordValue);
    setErrorMessage(message);

    if (!CheckValidateData(emailValue, passwordValue)) return;

    //Sign In/Sign UP logic

    if (!isSignInForm) {
      //Sign Up Logic

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}_${errorMessage}`);
        });
    }
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
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="block w-full py-3 px-4 mb-4 bg-gray-900 text-white rounded focus:outline-none focus:bg-gray-800"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="block w-full py-3 px-4 mb-4 bg-gray-900 text-white rounded focus:outline-none focus:bg-gray-800"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="block w-full py-3 px-4 mb-4 bg-gray-900 text-white rounded focus:outline-none focus:bg-gray-800"
          />
          {errorMessage && (
            <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
          )}
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
