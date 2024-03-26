import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Drawer, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { StyledButton } from "../home/style.ts";
import { StyledLink, StyledScrollLink } from "../styledLink.ts";
import { NavBar, Nav,StyledDiv, MobileMenuButton } from "./styledindex.tsx";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const handleLinkClick = () => {
    onClose();
  };
  return (
    <NavBar>
      <Nav>
        <div>EmoAnalytica</div>
        <div>
          {!isHomePage ? (
            <StyledLink to="/">Home</StyledLink>
          ) : (
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
<Flex justify="space-between">
<StyledDiv style={{ color: "white", marginTop: "1rem" }}>
            EmoAnalytica
          </StyledDiv>
      <MobileMenuButton
        type="text"
        onClick={showDrawer}
        icon={<MenuOutlined />}
      />
<Drawer
        placement="right"
        closable={true}
        onClose={onClose}
        open={visible}
        height={100}
        style={{
          backgroundColor: "#141414",
          color: "white",
          padding: "3%",
        }}
      >
        <div
          style={{
            color: "black",
            display: "flex",
            flexDirection: "column",
            fontSize: "32px",
          }}
        >
          
          {!isHomePage ? (
            <StyledLink to="/">Home</StyledLink>
          ) : (
            <StyledScrollLink
              to="home"
              smooth
              duration={500}
              onClick={handleLinkClick}
             
            >
              Home
            </StyledScrollLink>
          )}
          <StyledScrollLink
            to="features"
            smooth
            duration={500}
            onClick={handleLinkClick}
          >
            Features
          </StyledScrollLink>
          <StyledScrollLink
            to="work"
            smooth
            duration={500}
            onClick={handleLinkClick}
          >
            How it Works
          </StyledScrollLink>
          <StyledScrollLink
            to="faq"
            smooth
            duration={500}
          >
            FAQs
          </StyledScrollLink>
          <StyledScrollLink
            to="footer"
            smooth
            duration={500}
          >
            Contact Us
          </StyledScrollLink>
          <StyledButton
            type={"link"}
            href={"/analyze"}
            style={{ marginTop: 2 }}
          >
            Try Now!
          </StyledButton>
        </div>
      </Drawer>
      </Flex>
    </NavBar>
  );
};

export default Header;

// import React from "react";
// import { Nav, NavBar } from "./styledindex.tsx";
// import { useLocation } from "react-router-dom";
// import { StyledButton } from "../home/style.ts";
// import { animateScroll as scroll } from "react-scroll";
// import { StyledLink, StyledScrollLink } from "../styledLink.ts";
// const Header = () => {

//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   return (
//     <NavBar>
//       <Nav>
//         <div>EmoAnalytica</div>
//         <div>
// {!isHomePage?(
//   <StyledLink to="/">Home</StyledLink>
// ):(
//   <StyledScrollLink to="home" smooth duration={500}>
//   Home
// </StyledScrollLink>
// )}

//           <StyledScrollLink to="features" smooth duration={500}>
//             Features
//           </StyledScrollLink>
//           <StyledScrollLink to="work" smooth duration={500}>
//             How it Works
//           </StyledScrollLink>
//           <StyledScrollLink to="faq" smooth duration={500}>
//             FAQs
//           </StyledScrollLink>

//           <StyledScrollLink to="footer" smooth duration={500}>
//             Contact Us
//           </StyledScrollLink>
//         </div>
//         <StyledButton type={"link"} href={"/analyze"} style={{ marginTop: 0 }}>
//           Try Now!
//         </StyledButton>
//       </Nav>
//     </NavBar>
//   );
// };
// export default Header;
