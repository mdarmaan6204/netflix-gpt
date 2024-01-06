import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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
