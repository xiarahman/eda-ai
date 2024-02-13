import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ file }) => {
  return (
    <>
      <ReactPlayer
        url={`https://eae.smartdemo.live${file}`}
        controls={true}
        width="100%"
        height="433px"
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
