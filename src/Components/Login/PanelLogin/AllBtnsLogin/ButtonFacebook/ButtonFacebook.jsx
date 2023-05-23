import React, { useContext } from "react";
import { AuthGlobal } from "../../../../../Context/ContextAuth";
import { auth, facebook } from "../../../../../Firebase/Config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const ButtonFacebook = () => {
  const { setUser} = useContext(AuthGlobal);
  const navigate = useNavigate();
  const loginFacebook = async () => {
    try {
      const provider = await signInWithPopup(auth, facebook);
      const user = provider.user;
      const { accessToken } = user;
      const partialToken = `${accessToken.substring( 0, 5 )}...${accessToken.substring(accessToken.length - 5)}`;
      sessionStorage.setItem("tokenFacebook", partialToken);
      onAuthStateChanged(auth, (user) =>  user ? (setUser(user), navigate("/principal")) : setUser(null));
      return;
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
