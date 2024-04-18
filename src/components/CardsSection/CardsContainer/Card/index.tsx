import { useDispatch } from "react-redux";
import { StyledCardIconContainer, StyledP, Title3 } from "components";
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

export const Card: React.FC<CardProps> = ({
  img,
  title,
  subtitle,
  isFetching,
  withModal,
  code,
}) => {
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
        <Title3>{title}</Title3>
        {isFetching ? <StyledP>Fetching...</StyledP> : <StyledP>{subtitle}</StyledP>}
      </StyledCardTextContainer>
    </StyledCardContainer>
  );
};
