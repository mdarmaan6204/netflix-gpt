import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utlis/userSlice";
import { BG_IMG, USER_ICON } from "../utlis/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
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

  return (
    <div className="flex justify-between absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src= {BG_IMG}
        alt="logo"
      />
      {user !== null && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user.photoURL} alt="userIcon" />
          <button onClick={handleClick} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
