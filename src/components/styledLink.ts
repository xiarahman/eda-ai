import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  cursor: pointer;
  margin-right: 1rem;
  color: #f5f5f5 !important;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #6cc0e5;
  }
`;

export default StyledLink;