import { keyframes, styled } from "styled-components";
import { StyledP } from "components/styled";

const flash = keyframes`
  0% {
    scale: 0;
  }

  50% {
    scale: 1;
  }

  100% {
    scale: 0;
  }
`;

export const StyledText = styled(StyledP)`
  text-align: center;
`;

export const StyledLastUpdateContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 62px;
`;

export const StyledBigSircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 188, 79, 1);
  opacity: 0.34;

  position: absolute;
  top: -50%;
  left: -50%;

  animation: ${flash} 4s linear infinite;
`;

export const StyledSmallCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  background: rgba(0, 188, 79);
  position: relative;
`;
