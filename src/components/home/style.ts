import { styled } from "styled-components";
import { Typography, Row, Col, Space, Image, Button , Collapse} from "antd";
import mainImage from "../../assets/HomeImage.jpg";
import bottomImage from "../../assets/HomeBottomImage.png";
export const BannerImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  line-height: normal;
  position:relative;
  padding-bottom: 20px;
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
export const StyledContentImage = styled(Image)`
height: 180px;
width: 300px;
margin-top: 5%
`;
export const StyledVideoContent = styled.div`
  background-color: #c1cfed;
  color: white;
  
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
export const BannerTitle=styled(StyledTitle)`
 color: white;
  font-size: 42px;
   font-weight:900;
`;
export const StyledText = styled(Typography)`
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
  margin: 10px;
`;
export const StyledCollapse = styled(Collapse)`
  background: none;

`
export const StyledSpace = styled(Space)`
  text-align: left;
  padding: 20px;
  padding-left: 160px;
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
export const BottomTitle=styled(StyledTitle)`
color:white;
`
export const BottomLineContent = styled.div`
  position: relative;
  margin-top: 5%;
  text-align: center;
  color: white;
`;

