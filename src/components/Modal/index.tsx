import { createPortal } from "react-dom";
import {
  StyledCloseBtn,
  StyledModalContainer,
  StyledModalContent,
  StyledModalOverlay,
} from "./styeld";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, close }) => {
  return (
    <>
      {createPortal(
        <>
          <StyledModalOverlay />
          <StyledModalContainer>
            <StyledCloseBtn onClick={close}>
              <p>X</p>
            </StyledCloseBtn>
            <StyledModalContent>{children}</StyledModalContent>
          </StyledModalContainer>
        </>,
        document.body,
      )}
    </>
  );
};
