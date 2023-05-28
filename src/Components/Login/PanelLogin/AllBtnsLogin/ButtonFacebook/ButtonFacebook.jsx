import React from "react";
import { auth, facebook } from "../../../../../Firebase/Config";
import { signInWithPopup} from "firebase/auth";
const ButtonFacebook = () => {
  const loginFacebook = async () => {
    try {
      const provider = await signInWithPopup(auth, facebook);
      const user = provider.user;
      const { accessToken, photoURL, displayName } = user;
      const partialToken = `${accessToken.substring( 0, 5 )}...${accessToken.substring(accessToken.length - 5)}`;
      localStorage.setItem("tokenFacebook", partialToken);
      localStorage.setItem("photoFacebook", photoURL );
      localStorage.setItem("userNameFacebook", displayName);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={loginFacebook} type="button" className="btnFacebook">
        Facebook
      </button>
    </div>
  );
};

export default ButtonFacebook;
