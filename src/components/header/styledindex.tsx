import { Link } from "react-scroll";
import { styled } from "styled-components";
import { Drawer, Button } from "antd";
export const NavBar = styled.div`
  background-color: #141414;
  color: white;
  padding: 1% 5%;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 1% 2%;
  } 
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MobileMenuButton = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: white;
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #c1cfed;
  }
`;

