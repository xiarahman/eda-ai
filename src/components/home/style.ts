import { styled } from "styled-components";
import { Typography, Row, Col, Space, Image, Button , Collapse} from "antd";
import mainImage from "../../assets/HomeImage.jpg";
import bottomImage from "../../assets/HomeBottomImage.png";
const { Title, Text } = Typography;

export const BannerImageContainer = styled.div`
  width: 100%;
  height: auto;
  line-height: normal;
`;
export const BannerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
 background-repeat: no-repeat;
`;

export const BannerContent = styled.div`
  position: relative;
  text-align: left;
  color: white;
  margin-top: 15%;
  margin-left: 10%;
`;

export const StyledBannerText= styled(Typography.Text)`
color: white;
font-weight: 500;
font-size: 20px;
line-height: normal;
`;

export const StyledContentImage = styled(Image)`
height: 180px;
width: 300px;
`;
export const StyledVideoContent = styled.div`
  background-color: #c1cfed;
  color: white;
  margin-top: 8%;
`;
export const StyledInputContent = styled.div`
  background-color: none;
`;
export const StyledLiveContent = styled.div`
  background-color: #8fcddc;
`;

export const StyledTitle = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;
export const StyledText = styled(Typography.Text)`
  font-size: 20px;
  font-weight: 400;
`;
export const StyledAnalyzeButton = styled(Button)`
  background-color: #262e5b;
  margin-top: 10px;
  color: white;
`;
export const FAQContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const StyledCollapse = styled(Collapse)`
  background: none;
`;

export const StyledSpace = styled(Space)`
  text-align: center;
  padding: 20px;
  background-color: "#F5F5F5";
`;
export const BottomImageContainer = styled.div`
  width: 100%;
`;
export const BottomImage = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-image: url(${bottomImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const BottomLineContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;
export const StyledBottomTitle = styled(Typography)`
  font-size: 46px;
  font-weight: 900;
  margin-top: 5%;
`;
export const StyledBottomButton = styled(Button)`
  color: "#262E5B";
  background-color: "white";
  margin-top: 10px;
`;