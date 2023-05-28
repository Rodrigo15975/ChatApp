import React from "react";
import { auth } from "../../../Firebase/Config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const ButtonExit = () => {
  const navigate = useNavigate();
  const exit = () => {
    signOut(auth).then(() => {
        navigate("/");
        sessionStorage.clear();
    });
  };
  return (
    <div className="contBtnExit" >
      <button onClick={exit}>Log out</button>
    </div>
  );
};

export default ButtonExit;
