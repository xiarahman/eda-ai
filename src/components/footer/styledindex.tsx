import styled from "styled-components";
import { Link } from "react-scroll";
import { Typography } from "antd";

export const FooterSection = styled.div`
  padding: 5% 10%;
`;

export const SocialLinks = styled.div`
  margin-top: 15%;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: #f5f5f5 !important;
  text-decoration: none;
  font-size: 14px;
`;
export const StyledFooterTitle = styled(Typography)`
  font-size: 20px;
  line-height: 25px;
  color: #c1cfed;
  margin-bottom: 5px;
  font-family: Poppins;
`;
export const StyledFooterText = styled(StyledFooterTitle)`
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
`;
