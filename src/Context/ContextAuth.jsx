import React, { useState, createContext } from "react";
export const AuthGlobal = createContext();
const ContextAuth = ({ children }) => {
  const [googleToken, setGoogleToken] = useState(null);
  const [facebookToken, setFacebooktoken] = useState(null);
  const [twitterToken, setTwittertoken] = useState(null);
  const [user, setUser] = useState(null);
  return (
    <AuthGlobal.Provider
      value={{
        setGoogleToken,
        setFacebooktoken,
        setTwittertoken,
        setUser,
        user,
      }}
    >
      {children}
    </AuthGlobal.Provider>
  );
};

export default ContextAuth;
