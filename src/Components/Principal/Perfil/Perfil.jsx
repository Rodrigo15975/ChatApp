import React, { useState } from "react";
import { MainPerfil } from "./styledPerfil";
import ButtonExit from "../ButtonExit/ButtonExit";
import { m } from "framer-motion";
const variantsLogout = { initial: { opacity: 0 },  animate: { opacity: 1},  exit: { opacity: 0}}
const Perfil = () => {
  const [logOut, setLogOut] = useState(false);
  const userNameGoogle = localStorage.getItem("userNameGoogle");
  const userNameFb = localStorage.getItem("userNameFacebook");
  const  photoFb = localStorage.getItem("photoFacebook"); 
  const photoGoogle = localStorage.getItem("photoGoogle");
  const overLogout = () => setLogOut(true)  ;
  const outLogout = () => setLogOut(false)  ;
  
  return (
    <MainPerfil>
      <m.div onMouseOver={overLogout} onMouseOut={outLogout} className="contImg" >
        <img   src={photoFb || photoGoogle }  alt={userNameFb || userNameGoogle}        />
        <div className="logOut" >
        {logOut && <m.div  key={logOut}  variants={variantsLogout} > <ButtonExit /> </m.div> }
        </div>
      </m.div>
      <div className="contUserName" >
        <h2>{userNameFb || userNameGoogle}</h2>
      </div>
    </MainPerfil>
  );
};

export default Perfil;
