import React from "react";
import {
  BannerImageContainer,
  BannerImage,
  BannerContent,
  BannerTitle,
  StyledButton,
} from "../style.ts";
const Banner: React.FC = () => {
  return (
    <BannerImageContainer id="home">
      <BannerImage />
      <BannerContent>
        <BannerTitle>
          AI-Powered Facial <br /> And Speech
          <br />
          Emotion Detection
        </BannerTitle>
        <StyledButton type={"link"} href={"/analyze"} >Try Now !</StyledButton>
      </BannerContent>
    </BannerImageContainer>
  );
};
export default Banner;
