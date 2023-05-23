import React from "react";
import ChangeRoute from "../../Animation/ChangeRoute/ChangeRoute";
import {
  ConteinerFormRegister,
  ConteinerRegister,
} from "./StyledRegister/StyledRegister";

const Register = () => {
  return (
    <ChangeRoute>
      <ConteinerRegister>
        <ConteinerFormRegister>
        </ConteinerFormRegister>
      </ConteinerRegister>
    </ChangeRoute>
  );
};

export default Register;
