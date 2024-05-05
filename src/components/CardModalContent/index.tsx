import { FC } from "react";
import { useSelector } from "react-redux";

import { H3 } from "components";
import { getModalData } from "store/slice";
import { quotesIcons } from "constants/index";

import { CurrencyConverter } from "./CurrencyConverter";
import { StyledLogoContainer, StyledModalContentContainer } from "./styled";

export const CardModalContent: FC = () => {
  const { title, code } = useSelector(getModalData);

  return (
    <StyledModalContentContainer>
      <StyledLogoContainer>{quotesIcons[code]}</StyledLogoContainer>
      <H3>
        {title} ({code})
      </H3>
      <CurrencyConverter />
    </StyledModalContentContainer>
  );
};
