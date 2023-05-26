import React from "react";
const ButtonLogin = ({handleSubmit}) => {
  return (
    <>
      <button type="submit" onClick={handleSubmit}  >
        Sign In
      </button>
    </>
  );
};

export default ButtonLogin;
