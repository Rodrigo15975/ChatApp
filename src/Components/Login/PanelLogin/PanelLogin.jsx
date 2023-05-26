import React from "react";
import {  ContPanelLogin,  ConteinerButtonsLogin,  ConteinerFormLogin,  ConteinerHeaderLogin,} from "./StyledPanel/StyledPanel";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import FormLogin from "./FormLogin/FormLogin";
import AllButtons from "./AllBtnsLogin/AllButtons";
const PanelLogin = () => {
  return (
    <>
      <ContPanelLogin>
        <ConteinerHeaderLogin>
          {/* cabezera login */}
          <HeaderLogin />
        </ConteinerHeaderLogin>
        <ConteinerFormLogin>
          {/* formulario de login */}
          <FormLogin />
        </ConteinerFormLogin>
        <ConteinerButtonsLogin>
          {/* botones de login, como googgle . facebook, twitter*/}
          <AllButtons />
        </ConteinerButtonsLogin>
      </ContPanelLogin>
    </>
  );
};

export default PanelLogin;
