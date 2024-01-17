import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import pic from "../../../assets/accountpic.jpg";
import styled from "styled-components";
import { Image } from "antd";

const StyledImage = styled(Image)`
  object-fit: cover !important;
  width: 100px !important;
  height: 100px !important;
  background-color: #222222 !important;
`;

const Slider = () => {
  return (
    <>
      {/* {slides.length > 0 && ( */}
      <Slide
        slidesToShow={5}
        slidesToScroll={1}
        arrows={false}
        autoplay={true}
        duration={2000}
      >
        {/* {slides?.map((slide, index) => ( */}
        <div>
          <StyledImage src={pic} />
        </div>
        {/* ))} */}
      </Slide>
      {/* )} */}
    </>
  );
};

export default Slider;
