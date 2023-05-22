import React, { useEffect, useContext } from "react";
import { AuthGlobal } from "../../../../../Context/ContextAuth";
import { auth, facebook } from "../../../../../Firebase/Config";
import {
  signInWithPopup,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const ButtonFacebook = () => {
  const { setUser } = useContext(AuthGlobal);
  const navigate = useNavigate();
  const loginFacebook = async () => {
    try {
      await signInWithPopup(auth, facebook);
      setPersistence(auth, browserLocalPersistence);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const outh = onAuthStateChanged(auth, (user) =>
      user ? (setUser(user), navigate("/principal")) : setUser(null)
    );
    return () => outh();
  }, []);

  return (
    <div>
      <button onClick={loginFacebook} type="button" className="btnFacebook">
        Facebook
      </button>
    </div>
  );
};

export default ButtonFacebook;
