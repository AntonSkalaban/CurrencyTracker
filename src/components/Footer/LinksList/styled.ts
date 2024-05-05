import { styled } from "styled-components";

import { textSecondary } from "components/styled";

export const StyledLinksList = styled.div`
  width: 157px;

  @media ${({ theme }) => theme.media.medium} {
    width: 110px;
  }
`;

export const ListTitle = styled.h5`
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.fontMain};
  margin-bottom: 40px;

  @media ${({ theme }) => theme.media.medium} {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
  }
`;

export const LinkItem = styled.li`
  margin-bottom: 27px;
  @media ${({ theme }) => theme.media.medium} {
    margin-bottom: 18px;
  }
`;

export const Link = styled.a`
  ${textSecondary}
  @media ${({ theme }) => theme.media.medium} {
    font-size: 18px;
  }
`;
