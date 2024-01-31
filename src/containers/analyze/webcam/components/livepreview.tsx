import React, { useEffect, useRef, useState } from "react";
import { ButtonDiv, Preview, Section, styles } from "./styledLivePreview.tsx";
import Button from "../../../../components/button/index.tsx";
import axios from "axios";
import Webcam from "react-webcam";
import { io } from "socket.io-client";

const videoConstraints = {
  width: 505,
  height: 360,
  facingMode: "user",
};

const LivePreview = ({ setJobId, jobId }) => {
  const webcamRef: any = useRef(null);
  const socket: any = useRef(null);
  const [capturedImages, setCapturedImages] = useState<any>("");
  const [showFrames, setShowFrames] = useState(false);
  const [finalEmotion, setFinalEmotion] = useState(null);

  const setNewImage = (data, emotion) => {
    setCapturedImages(`data:image/jpg;base64,${data}`);
    setFinalEmotion(emotion);
  };

  // Function to capture and send images every second
  const captureAndSendImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();

      // Emit the image data through the WebSocket
      if (socket.current) {
        socket.current.emit("live_stream", { imageData: imageSrc });
        socket.current.on(
          "processed_frame",
          ({ imageData, job_id, final_prediction }) => {
            console.log("Called");
            if (imageData) {
              setNewImage(imageData, final_prediction);
            }

            if (!jobId) {
              setJobId(job_id);
            }
          }
        );
      }
    }
  };

  // Set up a interval to capture and send images every second
  useEffect(() => {
    if (showFrames) {
      setInterval(captureAndSendImage, 1000);
    }

    // Cleanup function to clear the interval when the component is unmounted
  }, [showFrames]);

  const handleDisconnect = async () => {
    axios
      .get(
        `https://cf6c-203-175-67-12.ngrok-free.app/get-live-streams?job_id=${jobId}`
      )
      .then((response) => {
        const finalPrediction = response.data[0]?.final_prediction;
        setFinalEmotion(finalPrediction);
        console.log("ddd" + response);
      })

      .then((response) => console.log("ddd" + response))
      .catch((err) =>
        console.log("%cwebcam.tsx line:128 err", "color: #007acc;", err)
      );
  };

  const toggleWebcam = () => {
    if (showFrames) {
      setShowFrames(false);
      socket.current.disconnect();
    } else {
      setShowFrames(true);
      socket.current = io("http://192.168.18.127:8081");
    }
    // Reset final emotion when starting the webcam
    setFinalEmotion(null);
  };

  useEffect(() => {
    if (!showFrames && jobId) {
      handleDisconnect();
    }
  }, [showFrames, jobId]);

  return (
    <Section>
      <Preview style={showFrames ? styles : {}}>
        {/* Add video link here */}
        <Webcam
          videoConstraints={videoConstraints}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true}
        />
      </Preview>
      <Preview style={!showFrames ? styles : {}}>
        <img src={capturedImages} alt="" />
      </Preview>
      <ButtonDiv>
        <Button type={"primary"} cls="btn-width btn-end" onClick={toggleWebcam}>
          {showFrames ? "Stop Stream" : "Start Stream"}
        </Button>
      </ButtonDiv>
    </Section>
  );
};

export default LivePreview;
