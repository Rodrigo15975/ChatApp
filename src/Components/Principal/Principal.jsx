import React from 'react';
import Perfil from "./Perfil/Perfil";
import {  ContPerfil,  ContSearchFriend,  MainPrincipal} from "./StyledPrincipal/styledPrincipal";
import SearchFriends from "./SearchFriends/SearchFriends";
import PanelChat from '../PanelChat/PanelChat';

const Principal = () => {
  return (
    <>
    <MainPrincipal>
      <ContPerfil>
        <Perfil />        
      </ContPerfil>
      <ContSearchFriend>
        <SearchFriends />
      </ContSearchFriend>
    </MainPrincipal>
    <PanelChat/>
    </>
  );
};

export default Principal;
