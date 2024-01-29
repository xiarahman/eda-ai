import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { Image } from "antd";
import { useSelector } from "react-redux";

const StyledImage = styled(Image)`
  object-fit: cover !important;
  width: 100px !important;
  height: 100px !important;
  background-color: #222222 !important;
`;

const Slider = () => {
  const data = useSelector((state: any) => state?.video?.data);
  return (
    <Slide
      slidesToShow={5}
      slidesToScroll={1}
      arrows={false}
      autoplay={true}
      duration={2000}
    >
      {data?.video_detail?.frames?.map((frame, index) => (
        <div key={index}>
          <StyledImage
            src={`https://cf6c-203-175-67-12.ngrok-free.app${frame?.frame_path}`}
          />
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
