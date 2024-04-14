import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoadingSpinner = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  -webkit-animation: crabbly_spinner infinite 0.75s linear;
  -moz-animation: crabbly_spinner infinite 0.75s linear;
  -o-animation: crabbly_spinner infinite 0.75s linear;
  animation: ${rotate} infinite 0.75s linear;
  border: 4px solid ${({ theme }) => theme.colors.ligthGreen};
  border-top-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;

  margin: 20px auto;
`;
