import styled from "styled-components";
import { Typography, Input, Button } from "antd";

export const FooterContainer = styled.div`
  background-color: #000244;
  color: white;
  width: 100%;
  padding: 5% 10%;
`;
export const SocialLinks = styled.div`
  margin-top: 15%;
`;
export const ContactInput = styled(Input)`
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
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
`;
export const ContactButton = styled(Button)`
  border: none;
  background-color: transparent;
  // padding: 0;
  cursor: pointer;
//  text-align: left;
  color: white;
  font-size: 13px;
  &:hover {
    color: white;
  }


`;
export const ModalTitle= styled(StyledFooterTitle)`
color: #C1CFED;
 font-size: 28px;
`;
