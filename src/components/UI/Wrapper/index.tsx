import { StyledWrapper } from "./styled";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
