import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { auth, google } from "../../../../../Firebase/Config";
import { useNavigate } from "react-router-dom";
import { AuthGlobal } from "../../../../../Context/ContextAuth";
const ButtonGoogle = () => {
  const { setUser} = useContext(AuthGlobal);
  const navigate = useNavigate();
  const loginGoogle = async () => {
    try {
      const provider = await signInWithPopup(auth, google);
      const user = provider.user;
      const { accessToken } = user;
      const partialToken = `${accessToken.substring( 0, 5 )}...${accessToken.substring(accessToken.length - 5)}`;
      sessionStorage.setItem("tokenGoogle", partialToken);
      onAuthStateChanged(auth, (user) =>  user ? (setUser(user), navigate("/principal")) : setUser(null));
      return;
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
