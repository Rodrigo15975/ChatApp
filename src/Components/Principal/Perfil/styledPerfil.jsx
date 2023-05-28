import styled from "styled-components";

export const MainPerfil = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  .contImg {
    position: relative;
    img{
      border-radius: 2rem;
      max-width: 3.5rem;
      height: 3.5rem;
      cursor: pointer;
      border: #ffffff solid 0.2rem;
    }
    .logOut {
      position: absolute;
      width: 100%;
      
      .contBtnExit{
        button{
          height: 100%;
          width: 100%;
          color: #FFFFFF;
          font-size: 1rem;
          background-color: #3b3b3b;
        }
      }
    }
  }
  .contUserName{
    color: #FFFFFF;
    h2{
      font-size: var(--step--1);
    }
  }
`;
