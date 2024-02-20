import { styled } from "styled-components";
import { Typography, Row, Card, Space, Button, Collapse } from "antd";
import mainImage from "../../assets/HomeImage.png";

export const BannerImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000244;
  position: relative;
`;
export const BannerImage = styled.div`
  position: absolute;
  width: 100%;
  left: 26%;
  height: 100%;
  background-image: url(${mainImage});
`;
export const StyledTitle = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;
export const BannerTitle = styled(StyledTitle)`
  color: white;
  font-family: Sora;
  font-size: 48px;
  line-height: 150%;
  font-weight: 900;
`;
export const WorkTitle = styled(StyledTitle)`
  fonts-size: 28px;
  font-family: Sora;
  font-weight: 600;
`;
export const WorkSubTitle = styled(WorkTitle)`
  font-size: 44px;
`;
export const StyledButton = styled(Button)`
  margin-top: 3%;
  background-color: #c1cfed;
  color: #141414;
  font-size: 14px;
  font-family: Sora;
  font-weight: 600;
  padding: 5px;
`;
export const BannerContent = styled.div`
  position: relative;
  text-align: left;
  color: white;
  margin-top: 15%;
  margin-left: 10%;
`;
export const Content = styled.div`
  background-color: #c1cfed;
  color: white;
  padding: 20px;
  font-family: Poppins;
  font-weight: 600;
`;
export const StyledSpace = styled(Space)`
  text-align: left;
  padding: 20px;
  padding-left: 160px;
  background-color: "#F5F5F5";
`;
export const StyledText = styled(Typography)`
  font-size: 26px;
  font-weight: 400;
`;
export const WorkText = styled(StyledText)`
font-size: 16px;
  font-weight: 480;
  font-family: Poppins

`;
export const FAQContainer = styled.div`
  max-width: 700px;
  margin: 10px;
`;
export const StyledCollapse = styled(Collapse)`
  background: white;
`;
export const StyledCard = styled(Card)`
  width: 280px;
  height: 220px;
  background-color: #f5f5f5;
  padding: 10px;
`;
