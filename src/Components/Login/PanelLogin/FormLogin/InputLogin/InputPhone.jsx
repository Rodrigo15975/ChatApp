import React from "react";
import { ConteinerInputLogin } from "./StyledInputLogin";
import { Field } from "formik";
import ErrosInputs from "./ErrosInputs";

const InputPhone = ({ fieldProps, touched, errors, label, type, name }) => {
  const getFieldClass = (touched, errors, name) => {
    if (touched[name] && errors[name]) return "form-field error";
    else if (touched[name] && !errors[name]) return "form-field value";
    else return "form-field";
  };
  return (
    <>
      <ConteinerInputLogin className={getFieldClass(touched, errors, name)}>
        <label htmlFor={name}>{label}</label>
        <Field {...fieldProps(name)} type={type} name={name} id={name} />
        <ErrosInputs errors={errors} touched={touched} name={name} />
      </ConteinerInputLogin>
    </>
  );
};

export default InputPhone;
