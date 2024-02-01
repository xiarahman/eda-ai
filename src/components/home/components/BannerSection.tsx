import React from "react";
import Text from "../../text/index.tsx"; 
import {
  BannerImageContainer, 
  BannerImage, 
  BannerContent, 
  BannerTitle, 
} from "../style.ts";
const Banner: React.FC = () => {
  return (
    <BannerImageContainer> 
      <BannerImage /> 
      <BannerContent> 
        {/* Title */}
        <Text type={"h3"} cls="banner-title">
          Sensing Sentiments: 
        </Text>
        {/* Subtitle */}
        <BannerTitle>
          AI-Powered <br />
          Facial and Speech
          <br />
          Emotion Detection
        </BannerTitle>
        {/* Description */}
        <Text type={"h4"} cls="banner-text">
          Discover a new realm of emotional understanding with EDA, an
          AI-powered platform <br /> merging facial and speech emotion
          detection.
        </Text>
      </BannerContent>
    </BannerImageContainer>
  );
};
export default Banner; 
