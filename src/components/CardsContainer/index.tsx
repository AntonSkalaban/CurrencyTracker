import { CardData } from "types/card";
import { Card } from "..";
import { StyledCardsContainer } from "./styled";

interface CardsContainerProps {
  cards: CardData[];
  isFetching: boolean;
  withModal?: boolean;
}

export const CardsContainer: React.FC<CardsContainerProps> = ({ cards, isFetching, withModal }) => {
  return (
    <StyledCardsContainer>
      {cards.map(({ img, title, subtitle, code }) => {
        return (
          <Card
            key={code}
            img={img}
            title={title}
            subtitle={subtitle}
            code={code}
            withModal={withModal}
            isFetching={isFetching}
          />
        );
      })}
    </StyledCardsContainer>
  );
};
