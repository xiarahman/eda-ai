import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ file }) => {
  return (
    <>
      <ReactPlayer
        url={`https://cf6c-203-175-67-12.ngrok-free.app${file}`}
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
