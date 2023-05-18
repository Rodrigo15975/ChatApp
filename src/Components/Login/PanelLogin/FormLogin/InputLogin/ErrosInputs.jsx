import React from "react";

const ErrosInputs = ({ touched, errors, name }) => {
  return (
    <>
      <div>
        {touched[name] && errors[name] && (
          <div className="txtError">{errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default ErrosInputs;
