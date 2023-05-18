import React from "react";

const ErrosInputs = ({ touched, errors, name }) => {
  return (
    <>
      {touched[name] && errors[name] && (
        <div className="txtError">{errors[name]}</div>
      )}
    </>
  );
};

export default ErrosInputs;
