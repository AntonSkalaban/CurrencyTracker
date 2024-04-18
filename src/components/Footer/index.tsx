import React from "react";
import { Wrapper } from "components";
import { links, text } from "constants/index";
import Logo from "assets/svg/logo.svg";
import { LinksList } from "./LinksList";
import {
  FooterContentContainer,
  FooterLinksContainer,
  FooterText,
  FooterTextContainer,
  FooterTextContainerTitle,
  StyledFooter,
} from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterContentContainer>
          <FooterTextContainer>
            <FooterTextContainerTitle>
              <Logo />
              Modsen Currency Tracker
            </FooterTextContainerTitle>
            <FooterText>{text}</FooterText>
          </FooterTextContainer>
          <FooterLinksContainer>
            {Object.keys(links).map((title) => {
              return <LinksList key={title} title={title} links={Object.entries(links[title])} />;
            })}
          </FooterLinksContainer>
        </FooterContentContainer>
      </Wrapper>
    </StyledFooter>
  );
};
