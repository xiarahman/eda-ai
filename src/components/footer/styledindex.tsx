// StyledFooter.js
import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CopyrightText = styled.p`
  color: black;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  margin: 1rem;
  cursor: pointer;
  color: white;
  text-decoration: none;
  color: black;

  &:hover {
    color: #006fee;
  }
`;
