import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <>
      <ReactPlayer
        url={""}
        controls={true}
        width="500px"
        height="480px"
        style={{ backgroundColor: "#F5F5F5", borderRadius: "5px" }}
      />
    </>
  );
};

export default VideoPlayer;
