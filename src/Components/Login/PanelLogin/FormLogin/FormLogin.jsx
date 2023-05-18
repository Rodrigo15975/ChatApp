import React from "react";
import { Formik } from "formik";
import { LoginValidationSchena } from "./ValidationLogin/Validation";
import InputLogin from "./InputLogin/InputLogin";
import ButtonLogin from "./ButtonLogin/ButtonLogin";

const FormLogin = () => {
  const initialValues = { email: "", password: "" };

  const getDatosLogin = (datos) => {
    console.log(datos);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchena}
        onSubmit={getDatosLogin}
      >
        {/* El handleSubmit se comunica con el componente ButtonLogin */}
        {({ handleSubmit, getFieldProps, touched, errors }) => (
          <>
            <div>
              <InputLogin
                fieldProps={getFieldProps}
                touched={touched}
                errors={errors}
                label="Email"
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
            </div>
            {/* El Componente LoginButton, devuelve los datos a la funcionn getDatosLogin */}
            <div>
              <ButtonLogin handleSubmit={handleSubmit} />
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default FormLogin;
