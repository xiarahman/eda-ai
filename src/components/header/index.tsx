import React from "react";
import { Nav, NavBar, NavTitle } from "./styledindex.tsx";
import { StyledButton } from "../home/style.ts";
import { useHistory } from "react-router";
import StyledLink from "../styledLink.ts";
const Header = () => {
  const { push } = useHistory();
  return (
    <NavBar>
      <Nav>
        <div>EmoAnalytica</div>
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink>Features</StyledLink>
          <StyledLink>How It Works</StyledLink>
          <StyledLink>FAQs</StyledLink>
          <StyledLink>Contact Us</StyledLink>
        </div>
        <StyledButton type={"link"} href={"/analyze"} style={{ marginTop: 0 }}>
          Try Now!
        </StyledButton>
      </Nav>
    </NavBar>
  );
};
export default Header;
