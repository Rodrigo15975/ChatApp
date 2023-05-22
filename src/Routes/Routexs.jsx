import React, {  useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../Components/ExportComponentes";
import { AuthGlobal } from "../Context/ContextAuth";
import Principal from "../Screen/Principal/Principal";
const Routexs = () => {
  const { user } = useContext(AuthGlobal);

  const userTrue = () => {
    if (user) {
      return !!user;
    }
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routexs;
