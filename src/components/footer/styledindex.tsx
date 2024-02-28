import styled from "styled-components";
import { Link } from "react-scroll";
import { Typography, Input } from "antd";

export const FooterSection = styled.div`
  padding: 5% 10%;
`;

export const SocialLinks = styled.div`
  margin-top: 15%;
`;
export const ContactInput= styled(Input)`
width: 100%;
 height: 40px;
 color: black;
 font-weight: 600;

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

