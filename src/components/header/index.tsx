import React from "react";
import { Nav, NavBar } from "./styledindex.tsx";
import { StyledButton } from "../home/style.ts";
import { ContactButton } from "../footer/styledindex.tsx";
import { useHistory } from "react-router";
import { StyledLink, StyledScrollLink } from "../styledLink.ts";
const Header = () => {
  return (
    <NavBar>
      <Nav>
        <div>EmoAnalytica</div>
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledScrollLink to="features" smooth duration={500}>
            Features
          </StyledScrollLink>
          <StyledScrollLink to="work" smooth duration={500}>
            How it Works
          </StyledScrollLink>
          <StyledScrollLink to="faq" smooth duration={500}>
            FAQs
          </StyledScrollLink>
         
          <StyledScrollLink to="footer" smooth duration={500}>
            Contact Us
          </StyledScrollLink>
          
        </div>
        <StyledButton type={"link"} href={"/analyze"} style={{ marginTop: 0 }}>
          Try Now!
        </StyledButton>
      </Nav>
    </NavBar>
  );
};
export default Header;
