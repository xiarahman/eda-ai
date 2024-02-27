import { Link } from "react-scroll";
import { styled } from "styled-components";

export const NavBar = styled.div`
  background-color: #141414;
  color: white;
  padding: 1% 5%;
  width: 100%;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NavTitle = styled.div`
  color: #c1cfed;
  font-family: Sora;
  font-size: 18;
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #c1cfed;
  }
`;
