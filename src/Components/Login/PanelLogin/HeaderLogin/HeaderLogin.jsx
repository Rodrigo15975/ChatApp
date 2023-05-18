import React from "react";
import { ContTextHeader, ContTitleHeader } from "./StyledHeader/StyledHeader";
import iconChat from "./SVG/ChatHeaderIcon 101.svg";
const HeaderLogin = () => {
  return (
    <>
      <ContTitleHeader>
        <div>
          <img src={iconChat} alt="Chat" />
          <h2>Welcome to Braun Chat</h2>
        </div>
      </ContTitleHeader>
      <ContTextHeader>
        <p>¡Descubre la emoción de chatear con tus amigos en línea!</p>
      </ContTextHeader>
    </>
  );
};

export default HeaderLogin;
