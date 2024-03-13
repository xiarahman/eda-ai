import React from "react";
import { Nav, NavBar } from "./styledindex.tsx";
import { useLocation } from "react-router-dom";
import { StyledButton } from "../home/style.ts";
import { animateScroll as scroll } from "react-scroll";
import { StyledLink, StyledScrollLink } from "../styledLink.ts";
const Header = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <NavBar>
      <Nav>
        <div>EmoAnalytica</div>
        <div>
{!isHomePage?(
  <StyledLink to="/">Home</StyledLink>
):(
  <StyledScrollLink to="home" smooth duration={500}>
  Home
</StyledScrollLink>
)}
          
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
