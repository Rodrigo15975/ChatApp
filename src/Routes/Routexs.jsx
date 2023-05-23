import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../Components/ExportComponentes";
import { Forget, Register, Principal } from "../Screen/exportScreen";
const Routexs = () => {
  const userTrue = () => {
    const tokenFacebook = sessionStorage.getItem("tokenFacebook");
    const tokenGoogle = sessionStorage.getItem("tokenGoogle");
    if (tokenFacebook) return true;
    if (tokenGoogle) return true;
  };
  useEffect(() => {
    userTrue();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/principal"
            element={userTrue() ? <Principal /> : <Navigate to={"/"} />}
          />
          <Route path="/forgerpass" element={<Forget />} />´
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routexs;
