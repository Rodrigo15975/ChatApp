import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Components/ExportComponentes";
const Routexs = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routexs;
