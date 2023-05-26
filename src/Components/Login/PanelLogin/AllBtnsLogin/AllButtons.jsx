import React from "react";
import { MainContButtons } from "./StyledAllButtons";
import ButtonGoogle from "./ButtonGoogle/ButtonGoogle";
import ButtonFacebook from "./ButtonFacebook/ButtonFacebook";
const AllButtons = () => {
  return (
    <>
      <MainContButtons>
        <div>
          <ButtonGoogle />
          <ButtonFacebook />
        </div>
      </MainContButtons>
    </>
  );
};

export default AllButtons;
