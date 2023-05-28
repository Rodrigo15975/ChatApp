import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Login, Principal } from "../Components/ExportComponentes";
import { Forget, Register } from "../Screen/exportScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Config";

const Routexs = () => {
  const navigate = useNavigate();
  const tokenGoogle = localStorage.getItem("tokenGoogle");
  const tokenFacebook = localStorage.getItem("tokenFacebook");
  const [isUserTrue, setIsUserTrue] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trueVerified = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/principal");
          setIsUserTrue(true);
        } else {
          navigate("/");
          setIsUserTrue(false)
        }
        setIsLoading(false);
      });
    };

    trueVerified();
  }, [navigate, tokenGoogle, tokenFacebook]);

  if (isLoading) {
    return <h1>Loading...</h1>; // Mostrar un indicador de carga mientras se verifica la autenticación
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/principal"
          element={isUserTrue ? <Principal /> : <Navigate to={"/"} />}
        />
        <Route path="/forgerpass" element={<Forget />} />´
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>No enocontrado</h1>} />
      </Routes>
    </>
  );
};

export default Routexs;
