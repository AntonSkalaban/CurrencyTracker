import { styled } from "styled-components";

export const StyledCardContainer = styled.div`
  width: 100%;
  height: 153px;
  background: ${({ theme }) => theme.colors.bgSecondary};

  display: flex;
  align-items: center;
  gap: 30px;

  padding: 30px 27px 30px 28px;

  border: 1px solid rgba(71, 71, 71, 1);
  border-radius: 8px;
`;

export const StyledIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: pink;
`;

export const StyledCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
