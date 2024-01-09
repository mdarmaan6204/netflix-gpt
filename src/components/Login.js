import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInForm, validateSignUpForm } from "../utlis/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { LOGO, USER_ICON } from "../utlis/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () => {
    // Validate the form
    if (isSignInForm) {
      const message = validateSignInForm(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);

      if (!message) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    } else {
      const message = validateSignUpForm(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (!message) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_ICON ,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                navigate("/browse");
              })
              .catch((error) => {
                setErrorMessage(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src= {LOGO}  alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" text-white w-1/3 p-12 right-0 left-0  bg-black absolute mx-auto my-40 bg-opacity-80 rounded-lg"
      >
        <h1 className="text-3xl my-2 font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-500 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-500 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-500 rounded-lg"
        />
        <p className="text-red-500 py-2">{errorMessage}</p>
        <button
          className="bg-red-800 p-2 my-6 w-full rounded-lg "
          onClick={handleClick}
        >
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
