import React from "react";
import { Flex } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import ProgressBar from "./components/progressbar.tsx";
import Emotions from "./components/emotion.tsx";
import Sentiments from "./components/sentiment.tsx";
import AreaCharts from "./components/AreaChart.tsx";
import { RightOutlined } from "@ant-design/icons";
import SentenceCard from "./components/sentenceCard.tsx";

const TextResult = () => {
  return (
    <Flex
      gap="middle"
      align="stretch"
      justify="stretch"
      style={{
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "8rem 0",
      }}
    >
      <Flex vertical gap="middle" style={{ flexGrow: "1" }}>
        <h2 className="section-heading">Preview</h2>
        <Flex
          justify="space-between"
          gap="middle"
          vertical
          style={{
            backgroundColor: "#f5f5f5",
            flexGrow: "1",
            padding: "1.5rem",
            borderRadius: "5px",
            minWidth: "400px",
          }}
        >
          <SentenceCard />
        </Flex>
      </Flex>

      {/* Results Block */}
      <Flex vertical gap="middle" style={{ flexGrow: "1" }}>
        <h2 className="section-heading">Results</h2>

        <Flex
          justify="space-between"
          gap="middle"
          vertical
          style={{
            backgroundColor: "#f5f5f5",
            flexGrow: "1",
            padding: "1.5rem",
            borderRadius: "5px",
          }}
        >
          <Flex vertical>
            <h3 className="card-heading">Emotions</h3>
            <span className="card-subheading">67 Frames</span>
          </Flex>
          <Flex flex={1} justify="center">
            <ProgressBar />
          </Flex>
          <Flex flex={1} justify="center">
            happy angry neutral
          </Flex>
        </Flex>

        {/* Sentiement */}
        <Flex
          vertical
          gap="large"
          style={{
            backgroundColor: "#f5f5f5",
            flexGrow: "1",
            padding: "1.5rem",
            borderRadius: "5px",
          }}
        >
          <Flex vertical>
            <h3 className="card-heading">Sentiments</h3>
            <span className="card-subheading">15 mins 20 sec</span>
          </Flex>
          <div style={{ padding: "0 1rem" }}>
            <Sentiments />
          </div>
        </Flex>
      </Flex>
      {/* End */}
    </Flex>
  );
};

export default TextResult;
