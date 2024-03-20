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
        height="100%"
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          flexGrow: "1",
        }}
      ></ReactPlayer>
    </>
  );
};

export default VideoPlayer;
