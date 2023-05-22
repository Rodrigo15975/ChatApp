import styled from "styled-components";
import media from "styled-media-query";

export const ContTitleHeader = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4.5rem;
  div {
    position: relative;
    h2 {
      color: #ff669d;
      font-size: var(--step-1);
      text-align: center;
    }
    img {
      position: absolute;
      top: -4.5rem;
      width: 5rem;
      left: -5rem;
      ${media.lessThan("30.625rem")`       
        top: -3.5rem;
        width: 3rem;
        left: -.5rem;
    `};
    }
  }
`;

export const ContTextHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    color: #656bff;
    text-align: center;
    font-size: var(--step-0);
  }
`;
