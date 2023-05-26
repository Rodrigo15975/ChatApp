import React, { useState, createContext } from "react";
export const AuthGlobal = createContext();
const ContextAuth = ({ children }) => {
  const [tokenUser, setTokenUser] = useState(null);
  const [user, setUser] = useState(null);
  const [photoUser, setPhotoUser] = useState(null);
  return (
    <AuthGlobal.Provider
      value={{
        setTokenUser,
        tokenUser,
        setUser,
        user,
        setPhotoUser,
        photoUser
      }}
    >
      {children}
    </AuthGlobal.Provider>
  );
};

export default ContextAuth;
