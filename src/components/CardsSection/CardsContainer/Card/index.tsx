import { FC } from "react";
import { useDispatch } from "react-redux";
import { H3, P, StyledCardIconContainer } from "components";
import { setModalData, toggleModal } from "store/slice";

import { StyledCardContainer, StyledCardTextContainer } from "./styled";

interface CardProps {
  img: React.ReactNode;
  title: string;
  code: string;
  subtitle?: string;
  isFetching?: boolean;
  withModal?: boolean;
}

export const Card: FC<CardProps> = ({ img, title, subtitle, isFetching, withModal, code }) => {
  const dispatch = useDispatch();

  const hanldeClick = () => {
    if (withModal && !isFetching && subtitle) {
      dispatch(toggleModal());
      dispatch(setModalData({ title, subtitle, code }));
    }
  };

  return (
    <StyledCardContainer onClick={hanldeClick}>
      <StyledCardIconContainer>{img}</StyledCardIconContainer>
      <StyledCardTextContainer>
        <H3>{title}</H3>
        {isFetching ? <P>Fetching...</P> : <P>{subtitle}</P>}
      </StyledCardTextContainer>
    </StyledCardContainer>
  );
};
