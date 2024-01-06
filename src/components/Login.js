import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div >
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className=" text-white w-1/3 p-12 right-0 left-0  bg-black absolute mx-auto my-40 bg-opacity-80 rounded-lg">
        <h1 className="text-3xl my-2 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-500 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-500 rounded-lg"
        />
        <button className="bg-red-800 p-2 my-6 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign up now"
            : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
