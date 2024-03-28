import React from "react";
import ReactPlayer from "react-player";
import { API_ENDPOINT } from "../../../utils/constants.ts";

const VideoPlayer = ({ file }) => {
  return (
    <>
      <ReactPlayer
        url={`${API_ENDPOINT}/${file}`}
        controls={true}
        width="100%"
       
      ></ReactPlayer>
    </>
  );
};

export default VideoPlayer;
