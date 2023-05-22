import React from "react";
import { auth } from "../../Firebase/Config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Principal = () => {
  const navigate = useNavigate();

  const exit = () => {
    signOut(auth).then(() => {
      console.log("exit");
      navigate("/");
    });
  };

  return (
    <>
      <h2>Principal</h2>
      <button onClick={exit}>Salir</button>
    </>
  );
};

export default Principal;
