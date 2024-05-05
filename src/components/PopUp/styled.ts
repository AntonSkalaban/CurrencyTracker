import { keyframes, styled } from "styled-components";

import { flexCenterMixin } from "components/styled";

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

  ${flexCenterMixin}
  border-radius: 8px;

  background-color: pink;

  padding: 15px;

  color: white;
  z-index: 99999;
  animation: ${drop} 1s;
`;

export const StyledText = styled.p`
  font-size: 25px;
  text-align: center;
`;
