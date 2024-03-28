import styled from "styled-components";
import { Typography, Input, Button } from "antd";

export const FooterContainer = styled.div`
  background-color: #000244;
  color: white;
  width: 100%;
  padding: 5% 8%;
`;
export const SocialLinks = styled.div`
  margin-top: 10%;
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
  cursor: pointer;
  margin-left: -60%;
  color: white;
  font-size: 13px;
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    margin-left: -80%;
  }
`;
export const ModalTitle= styled(StyledFooterTitle)`
color: #C1CFED;
 font-size: 28px;
`;
