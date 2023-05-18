import styled from "styled-components";

export const ConteinerInputLogin = styled.div`
  flex: 0 1 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  label {
    flex: 0 1 22rem;
    color: #ff4e8d;
    font-size: var(--step--1);
  }
  input {
    border: none;
    flex: 0 1 22rem;
    height: 2.3rem;
    border: 0.1rem solid #6557ff;
    border-radius: 0.4rem;
  }
  div {
    flex: 0 1 22rem;
    border-radius: 0.2rem;
    background: #ff708b;
    font-size: 1.1rem;
    color: white;
    text-align: center;
  }
`;
