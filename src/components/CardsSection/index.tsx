import { CardsContainer } from "components/CardsContainer";
import { CardData } from "types/card";
import { Wrapper } from "..";
import { StyledCardsSection, StyledCardsSectionHeader, StyledCardsSectionTitle } from "./styled";

interface CardsSectionProps {
  title: string;
  data: CardData[];
  isFetching: boolean;
  withModal?: boolean;
}

export const CardsSection: React.FC<CardsSectionProps> = ({
  title,
  data,
  isFetching,
  withModal,
}) => {
  return (
    <StyledCardsSection>
      <Wrapper>
        <StyledCardsSectionHeader>
          {" "}
          <StyledCardsSectionTitle>{title}</StyledCardsSectionTitle>
        </StyledCardsSectionHeader>
        <CardsContainer cards={data} isFetching={isFetching} withModal={withModal} />
      </Wrapper>
    </StyledCardsSection>
  );
};
