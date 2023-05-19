import styled from "styled-components";

export const ContPanelLogin = styled.div`  
  width: 100%;
  min-height: 50rem;
`;


export const ConteinerHeaderLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const ConteinerFormLogin = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 20rem ;
  justify-content: center;
  h2{
    margin: 1rem 0 1rem 0;
    color: #7848FF;
    font-size: var(--step-1);
    display: flex;   
    align-items: center;
  }
`;

export const ConteinerButtonsLogin = styled.div`
  flex: 0 1 22rem; 
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  justify-content: center;
  button{
    height: 3rem;
    width: 100%;
    background-color: #5748FF;
    color: #fff;
    font-size: var(--step-0);
  }
  .registerAndForget{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .forget{
      color: #FF4E8D;
      text-decoration: underline;
    }
    .register{
      color: #408CFF;
      text-decoration: underline;
    }
  }
`;
