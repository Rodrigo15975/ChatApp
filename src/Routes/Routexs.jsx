import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../Components/ExportComponentes";
import { Forget, Register, Principal } from "../Screen/exportScreen";
import { AuthGlobal } from "../Context/ContextAuth";
const Routexs = () => {
  const { user, tokenUser } = useContext(AuthGlobal);
  const userTrue = () => {
    const tokenGoogle = sessionStorage.getItem("tokenGoogle");
    const tokenFacebook = sessionStorage.getItem("tokenFacebook");    
    if (tokenGoogle)return !!tokenGoogle;    
    if (tokenFacebook)return !!tokenFacebook;    
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
          <Route path="*" element={<h1>No enocontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routexs;
