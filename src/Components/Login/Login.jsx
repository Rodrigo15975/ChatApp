import React from "react";
import {
  BurbleBottomLeft,
  BurbleBottomRight,
  BurbleLeft,
  BurbleRight,
  ConteinerImgPhone,
  ConteinerLogin,
  MainLogin,
} from "./StyledLogin/Styled-Login";
import bg from "./img/image 99.webp";
import PanelLogin from "./PanelLogin/PanelLogin";
const Login = () => {
  return (
    <>
      <MainLogin>
        <BurbleLeft />
        <BurbleRight />
        <BurbleBottomLeft />
        <BurbleBottomRight />
        <ConteinerLogin>
          <PanelLogin/>
        </ConteinerLogin>
        <ConteinerImgPhone>
          <img src={bg} alt="Phone" />
        </ConteinerImgPhone>
      </MainLogin>
    </>
  );
};

export default Login;
