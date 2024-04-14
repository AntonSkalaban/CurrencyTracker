import { useState } from "react";
import { Overlay } from "components/UI/Overlay";
import { BurgerIcon, BurgerIconContainer, BurgerMenuContent } from "./styled";

interface BurgerMenuProsp {
  children: React.ReactNode;
}

export const BurgerMenu: React.FC<BurgerMenuProsp> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>
      <BurgerIconContainer>
        <BurgerIcon $isOpen={isOpen} onClick={toggle}>
          <span />
          <span />
          <span />
        </BurgerIcon>
      </BurgerIconContainer>
      {isOpen && <Overlay />}
      <BurgerMenuContent $isOpen={isOpen}>{children}</BurgerMenuContent>
    </>
  );
};
