import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utlis/userSlice";
import { BG_IMG, NF_LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utlis/constants";
import { toggleGptSearch } from "../utlis/GptSlice";
import { changeLanguage } from "../utlis/configSlice";
import lang from "../utlis/languageConstants"

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_ICON,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //  Unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleChangeLang = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex flex-col justify-between absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 bg-opacity-90 md:flex-row">
      <img className="w-44 m-auto md:mx-0" src={NF_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 my-4 bg-gray-800 text-white"
              onClick={handleChangeLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-700 rounded-lg py-2 px-4 mx-2 my-4 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? lang[langKey].home : "GPT " + lang[langKey].search }
          </button>
          <img className="hidden md:block w-12 h-12" src={user.photoURL} alt="userIcon" />
          <button onClick={handleClick} className="font-bold text-white">
            {lang[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
