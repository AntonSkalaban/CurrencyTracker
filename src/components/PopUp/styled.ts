import { keyframes, styled } from "styled-components";

const drop = keyframes`
  from {
    top: -100px;
  }

  to {
    top: 20px;
  }
`;

export const StyledPopUp = styled.div`
  width: 300px;
  height: fit-content;

  position: absolute;
  top: 20px;
  left: calc(50% - 150px);
  border-radius: 8px;
  padding: 15px;
  background-color: pink;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: ${drop} 1s;
`;

export const StyledText = styled.p`
  font-size: 25px;
  text-align: center;
`;
