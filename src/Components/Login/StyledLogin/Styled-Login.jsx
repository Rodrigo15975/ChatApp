import styled from "styled-components";

export const MainLogin = styled.main`
  min-height: 100vh;
  max-width: 120rem;
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
export const ConteinerLogin = styled.div`
  flex: 0 1 44rem;
  min-height: 52rem;
  outline: #6663ff 0.3rem solid;
  border-radius: 0.4rem;
  padding: 1rem;
`;
export const ConteinerImgPhone = styled.div`
  flex: 0 1 35rem;
  min-height: 35rem;
  display: flex;
  align-items: center;
  justify-content: start;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const BurbleLeft = styled.div`
  position: absolute;
  height: 5rem;
  width: 5rem;
  clip-path: circle();
  left: -1rem;
  top: -1rem;
  background-color: #5754ff;
`;
export const BurbleRight = styled.div`
  position: absolute;
  height: 5rem;
  width: 5rem;
  background-color: #548eff;
  clip-path: circle();
  right: -1rem;
  top: -1rem;
`;
export const BurbleBottomRight = styled.div`
  position: absolute;
  height: 5rem;
  width: 5rem;
  background-color: #5754ff;
  clip-path: circle();
  right: -1rem;
  bottom: -1rem;
`;
export const BurbleBottomLeft = styled.div`
  position: absolute;
  height: 5rem;
  width: 5rem;
  background-color: #548eff;
  clip-path: circle();
  left: -1rem;
  bottom: -1rem;
`;
