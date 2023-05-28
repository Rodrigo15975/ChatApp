import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, google } from "../../../../../Firebase/Config";

const ButtonGoogle = () => {
  const loginGoogle = async () => {
    try {
      const provider = await signInWithPopup(auth, google);
      const user = provider.user;
      const { accessToken, photoURL, displayName } = user;
      const partialToken = `${accessToken.substring( 0, 5 )}...${accessToken.substring(accessToken.length - 5)}`;
      localStorage.setItem("tokenGoogle", partialToken);  
      localStorage.setItem("photoGoogle", photoURL);
      localStorage.setItem("userNameGoogle", displayName)
      } catch (error) {
      console.log(error);
    }
  }  
  return (
    <div>
      <button onClick={loginGoogle} type="button"  className="btnGoogle">Google</button>
    </div>
  );
};

export default ButtonGoogle;
