// Footer.js
import React from "react";
import {
  FooterContainer,
  CopyrightText,
  SocialLinks,
  StyledLink,
} from "./styledindex.tsx";

const Footer = () => {
  return (
    <div
      className="align-center"
      style={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #D9D9D9;",
        borderBottom: "1px solid #D9D9D9;",
        position: "fixed",
        bottom: 0,
        width: "100vw",
      }}
    >
      <FooterContainer className="boxed">
        <CopyrightText>Copyrights &copy; 2023</CopyrightText>
        <SocialLinks>
          <StyledLink>fb</StyledLink>
          <StyledLink>yt</StyledLink>
          <StyledLink>ig</StyledLink>
        </SocialLinks>
      </FooterContainer>
    </div>
  );
};

export default Footer;
