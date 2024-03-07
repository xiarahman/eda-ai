import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { Image } from "antd";
import { useSelector } from "react-redux";
import { API_ENDPOINT } from "../../../utils/constants.ts";
import { getVideos } from "../../../redux/Selectors/index.ts";

const StyledImage = styled(Image)`
  object-fit: cover !important;
  width: 100px !important;
  height: 100px !important;
  background-color: #222222 !important;
`;

// Slider Component
const Slider = () => {
  const { data } = useSelector(getVideos);

  // Check if data and data.video_detail.frames are defined
  if (!data || !data.video_detail || !data.video_detail.frames) {
    return null; // or some fallback UI
  }

  return (
    <Slide
      slidesToShow={4}
      slidesToScroll={1}
      arrows={false}
      autoplay={true}
      duration={2000}
    >
      {data.video_detail.frames.map((frame, index) => (
        <div key={index}>
          <StyledImage src={`${API_ENDPOINT}/${frame?.frame_path}`} />
        </div>
      ))}
    </Slide>
  );
};

export default Slider;
