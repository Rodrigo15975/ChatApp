import React from "react";
import { MainContButtons } from "./StyledAllButtons";
import ButtonGoogle from "./ButtonGoogle/ButtonGoogle";
import ButtonTwitter from "./ButtonTwitter/ButtonTwitter";
import ButtonFacebook from "./ButtonFacebook/ButtonFacebook";

const AllButtons = () => {
  return (
    <>
      <MainContButtons>
        <div>
          <ButtonGoogle   />
          <ButtonFacebook   />
          <ButtonTwitter   />
        </div>
      </MainContButtons>
    </>
  );
};

export default AllButtons;
