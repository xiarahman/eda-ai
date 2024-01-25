import React from "react";
import { useHistory, useParams } from "react-router-dom";
import AreaCharts from "./components/AreaChart.tsx";
import ProgressBar from "./components/progressbar.tsx";
import Sentiments from "./components/sentiment.tsx";
import Emotions from "./components/emotion.tsx";
import LiveResult from "./../result/live.tsx";
import TextFrom from "./../result/text.tsx";
import Upload from "./../result/upload.tsx";

const Result = () => {
  const type = useParams();
  const navigate = useHistory();

  const renderComponent = (type) => {
    switch (type) {
      case "video":
        return <Upload />;
      case "live":
        return <LiveResult />;
      case "text":
        return <TextFrom />;
      default:
        return <Upload />;
    }
  };
  return <>{renderComponent(type)}</>;
};

export default Result;
