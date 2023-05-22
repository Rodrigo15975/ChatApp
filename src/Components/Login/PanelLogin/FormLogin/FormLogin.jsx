import React, { useState } from "react";
import { Formik } from "formik";
import { LoginValidationSchena } from "./ValidationLogin/Validation";
import InputLogin from "./InputLogin/InputLogin";
import ButtonLogin from "./ButtonLogin/ButtonLogin";
import { ContInputsForm } from "./StyledFormLogin";
import { ConteinerButtonsLogin } from "../StyledPanel/StyledPanel";
import InputPhone from "./InputLogin/InputPhone";
const initialValues = { email: "", password: "", phone: "" };

const FormLogin = () => {
  const [loginPhone, setLoginPhone] = useState(false);

  const getDatosLogin = (datos) => {
    console.log(datos);
  };

  return (
    <>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchena}
        onSubmit={getDatosLogin}
      >
        {/* El handleSubmit se comunica con el componente ButtonLogin */}
        {({ handleSubmit, getFieldProps, touched, errors }) => (
          <>
            <ContInputsForm>
              <InputLogin
                fieldProps={getFieldProps}
                touched={touched}
                errors={errors}
                label="Email or phone"
                type="email"
                name="email"
              />
              <InputLogin
                fieldProps={getFieldProps}
                touched={touched}
                errors={errors}
                label="Password"
                type="password"
                name="password"
              />
            </ContInputsForm>
            {/* El Componente LoginButton, devuelve los datos a la funcionn getDatosLogin */}
            <ConteinerButtonsLogin>
              <ButtonLogin handleSubmit={handleSubmit} />
              <div className="registerAndForget">
                <p className="forget">Forget Password</p>
                <p className="register">Registrarme</p>
              </div>
            </ConteinerButtonsLogin>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
