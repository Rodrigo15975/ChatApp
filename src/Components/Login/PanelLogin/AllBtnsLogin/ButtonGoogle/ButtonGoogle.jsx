import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { auth, google } from "../../../../../Firebase/Config";
import { useNavigate } from "react-router-dom";
import { AuthGlobal } from "../../../../../Context/ContextAuth";
const ButtonGoogle = () => {
  const { setTokenUser, setUser, setPhotoUser } = useContext(AuthGlobal);
  const navigate = useNavigate();
  const loginGoogle = async () => {
    try {
      const provider = await signInWithPopup(auth, google);
      const user = provider.user;
      const { accessToken, photoURL } = user;
      const partialToken = `${accessToken.substring( 0, 5 )}...${accessToken.substring(accessToken.length - 5)}`;
      sessionStorage.setItem("tokenGoogle", partialToken);
      setTokenUser(partialToken);
      setPhotoUser(photoURL);
      onAuthStateChanged(auth, (user) => user ? (setUser(user.displayName), navigate("/principal") ) : setUser(null) );
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
