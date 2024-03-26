import { styled } from "styled-components";
import { Typography, Card, Space, Button, Collapse, Image } from "antd";
import mainImage from "../../assets/HomeImage.png";

export const BannerImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000244;
  position: relative;
`;
export const BannerImage = styled.image`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 25%;
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    left: 0;
  }
`;
export const StyledImage = styled(Image)`
  @media (max-width: 768px) {
    margin-left: 45%;
    margin-top: 5%;
  }
`;
export const StyledTitle = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;
export const BannerContent = styled.div`
  position: relative;
  color: white;
  text-align: left;
  margin-top: 18%;
  margin-left: 10%;
  @media (max-width: 768px) {
    text-align: center;
    margin-left: 5%;
    margin-top: 120%;
  }
`;
export const BannerTitle = styled(StyledTitle)`
  color: white;
  font-family: Sora;
  font-size: 48px;
  line-height: 150%;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
export const WorkTitle = styled(StyledTitle)`
  margin-top: 2%;
  fonts-size: 28px;
  font-family: Sora;
  font-weight: 600;
`;
export const WorkSubTitle = styled(WorkTitle)`
  font-size: 44px;
`;
export const WorkNumberSubTitle = styled(WorkTitle)`
  font-size: 38px;
  color: #adadad;
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

export const Content = styled.div`
  background-color: #c1cfed;
  color: white;
  padding: 2%;
  font-family: Poppins;
  font-weight: 600;
`;
export const StyledSpace = styled(Space)`
  // padding: 20px;
  background-color: "#F5F5F5";
`;
export const StyledText = styled(Typography)`
  font-size: 32px;
  font-weight: 500;
  font-family: Poppins;
  padding-left: 2%;
  
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 800;
    padding: 2%;
  }
`;
export const WorkText = styled(StyledText)`
  font-size: 16px;
  font-weight: 480;
  font-family: Poppins;
`;
export const FAQContainer = styled.div`
  max-width: 700px;
  margin: 10px;
`;
export const StyledCollapse = styled(Collapse)`
  background: white;
`;
export const CardsContainer = styled.div`
  background-color: white;
  padding-top: 8%;
  padding: 1%;
`;
export const StyledCard = styled(Card)`
  background-color: #f5f5f5;
  padding: 3%;
  text-align: center;
  margin-top: 8px;
`;
