import React from "react";
import LiveResult from "./../result/live.tsx";
import TextFrom from "./../result/text.tsx";
import Upload from "./../result/upload.tsx";
import { useParams } from "react-router-dom";
const Result = () => {
  const { opt, job_id } = useParams<{ opt: string; job_id: string }>();

  const renderComponent = (val) => {
    switch (val) {
      case "video":
        return <Upload job_id={job_id} />;
      case "live":
        return <LiveResult job_id={job_id} />;
      case "text":
        return <TextFrom />;
    }
  };

  return <>{opt && renderComponent(opt)}</>;
};

export default Result;
