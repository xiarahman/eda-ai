import React from "react";
import { BannerImageContainer, BannerImage,BannerContent, StyledBannerText } from "../style.ts";

import { Typography } from "antd";

const {  Title} = Typography;


const Banner: React.FC = () => {
  return (
    <>
      <BannerImageContainer>
        <BannerImage />
        <BannerContent>
          <StyledBannerText >
            Sensing Sentiments:
          </StyledBannerText>
          <Title  style={{ color: "white", fontSize:"42px", fontWeight:"900" }}>
            AI-Powered <br />
            Facial and Speech
            <br />
            Emotion Detection
          </Title>
          <StyledBannerText >
            Discover a new realm of emotional understanding with [App Name], an
            AI-powered platform <br /> merging facial and speech emotion
            detection.
          </StyledBannerText>
        </BannerContent>
      </BannerImageContainer>
    </>
  );
};

export default Banner;
