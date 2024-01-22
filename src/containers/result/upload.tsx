import React from "react";
import { Flex } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import ProgressBar from "./components/progressbar.tsx";
import Emotions from "./components/emotion.tsx";
import Sentiments from "./components/sentiment.tsx";
import AreaCharts from "./components/AreaChart.tsx";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UploadResult = () => {
  const navigate = useNavigate();
  return (
    <Flex
      gap="middle"
      align="space-between"
      justify="center"
      style={{
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "8rem 0",
      }}
    >
      <Flex
        gap="middle"
        align="start"
        justify="stretch"
        vertical
        style={{ flexGrow: "1", minWidth: "400px" }}
      >
        <h2 className="section-heading">Preview</h2>
        <VideoPlayer />
        <Flex style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
          <Slider />
        </Flex>
      </Flex>

      {/* Results Block */}
      <Flex vertical gap="middle" style={{ flexGrow: "1" }}>
        <h2 className="section-heading">Results</h2>

        <Flex gap="middle" align="start" style={{ alignItems: "stretch" }}>
          <Flex
            justify="space-between"
            gap="middle"
            style={{
              backgroundColor: "#f5f5f5",
              flexGrow: "1",
              padding: "1.5rem",
              borderRadius: "5px",
            }}
          >
            <Flex
              vertical
              align="space-between"
              gap="middle"
              style={{ minHeight: "100%", borderRadius: "5px" }}
            >
              <Flex vertical align="space-between" style={{ flexGrow: "1" }}>
                <h3 className="card-heading">Emotions</h3>
                <span className="card-subheading">67 Frames</span>
              </Flex>
              <ProgressBar />
            </Flex>
            <Flex justify="flex-end" gap="small" vertical>
              <Emotions label="Facial" value={30} emotion="Happy" />
              <Emotions label="S" value={40} emotion="Happy" />
            </Flex>
          </Flex>

          <Flex
            gap="middle"
            style={{
              backgroundColor: "#f5f5f5",
              flexGrow: "1",
              padding: "1rem",
              borderRadius: "5px",
            }}
            vertical
          >
            <Flex justify="space-between">
              <Flex vertical>
                <h3 className="card-heading">Sentiments</h3>
                <span className="card-subheading">67 sentances</span>
              </Flex>
              <RightOutlined
                className="font-size-icon"
                onClick={() => navigate("/sentiment-detail")}
              />
            </Flex>

            <Sentiments />
          </Flex>
        </Flex>

        {/* Area Chart */}
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
          <Flex gap="large" justify="space-between">
            <Flex vertical>
              <h3 className="card-heading">Graph</h3>
              <span className="card-subheading">15 mins 20 sec</span>
            </Flex>
            <Flex>happy angry neutral</Flex>
          </Flex>
          <AreaCharts />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadResult;
