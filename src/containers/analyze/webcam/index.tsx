import React, { useState } from "react";
import LivePreview from "./components/livepreview.tsx";

const Webcam = () => {
  const [jobId, setJobId] = useState(null);
  return (
    <>
      <LivePreview jobId={jobId} setJobId={setJobId} />
    </>
  );
};

export default Webcam;
