import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";
export const StyledLink = styled(Link)`
  cursor: pointer;
  margin-right: 1rem;
  color: #f5f5f5 !important;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #6cc0e5;
  }
`;
export const StyledScrollLink= styled(ScrollLink)`

cursor: pointer;
margin-right: 1rem;
  color: #f5f5f5 !important;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #6cc0e5;
  }
`
;

