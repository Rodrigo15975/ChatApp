import styled from "styled-components";
import bg from "./img/estilo-fondo-textura-elegante-blanco_23-2148432200.avif";
export const ConteinerRegister  = styled.div`
  margin: auto;
  max-width: 120rem ;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConteinerFormRegister = styled.div`
  flex: 0 1 41.9375rem;
  min-height: 54.0625rem;
  border: .2rem solid #6663FF;
  border-radius: .4rem;
`;