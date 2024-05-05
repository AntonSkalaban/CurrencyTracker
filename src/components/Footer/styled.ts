import { styled } from "styled-components";
import { flexSpaceBetweenMixin, greenGradientText, P } from "components/styled";

export const StyledFooter = styled.footer`
  margin-top: 96px;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

export const FooterTextContainer = styled.div`
  width: 428px;

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }
`;

export const FooterTextContainerTitle = styled.h4`
  ${greenGradientText}

  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  margin-bottom: 18px;

  @media ${({ theme }) => theme.media.small} {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const FooterText = styled(P)`
  font-size: 24px;
  line-height: 36px;

  @media ${({ theme }) => theme.media.medium} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const FooterLinksContainer = styled.div`
  ${flexSpaceBetweenMixin}
`;
