import { useSelector } from "react-redux";
import { Title3 } from "components/styled";
import { getModalData } from "store/slice";
import { quotesIcons } from "constants/icons";
import { CurrencyConverter } from "./CurrencyConverter";
import { StyledLogoContainer, StyledModalContentContainer } from "./styled";

export const CardModalContent: React.FC = () => {
  const { title, code } = useSelector(getModalData);

  return (
    <StyledModalContentContainer>
      <StyledLogoContainer>{quotesIcons[code]}</StyledLogoContainer>
      <Title3>
        {title} ({code})
      </Title3>
      <CurrencyConverter />
    </StyledModalContentContainer>
  );
};
