import React from "react";
import { Flex } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import ProgressBar from "./components/progressbar.tsx";
import Emotions from "./components/emotion.tsx";
import Sentiments from "./components/sentiment.tsx";
import AreaCharts from "./components/areaChart.tsx";
import { RightOutlined } from "@ant-design/icons";

const UploadResult = () => {
  return (
    <Flex
      gap="middle"
      align="start"
      justify="space-between"
      style={{
        height: "100vh",
        maxWidth: "1040px",
        paddingTop: "7rem",
      }}
    >
      <Flex gap="middle" align="start" vertical>
        <h2>Preview</h2>
        <VideoPlayer />
        <Slider />
      </Flex>
      {/* Results Block */}
      <Flex vertical gap="middle">
        <h2>Results</h2>

        <Flex gap="middle" align="start" style={{ alignItems: "stretch" }}>
          <Flex
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
              gap="middle"
              style={{ minHeight: "100%", borderRadius: "5px" }}
            >
              <Flex vertical style={{ flexGrow: "1" }}>
                <h3>Emotions</h3>
                <span>67 Frames</span>
              </Flex>
              <ProgressBar />
            </Flex>
            <Flex justify="space-between" vertical>
              <Emotions />
              <Emotions />
            </Flex>
          </Flex>

          <Flex
            style={{
              backgroundColor: "#f5f5f5",
              flexGrow: "1",
              padding: "1.5rem",
              borderRadius: "5px",
            }}
            vertical
          >
            <Flex justify="space-between">
              <Flex vertical>
                <h3>Sentiments</h3>
                <span>67 sentances</span>
              </Flex>
              <RightOutlined className="font-size-icon" />
            </Flex>

            <Sentiments />
          </Flex>
        </Flex>

        {/* Area Chart */}
        <Flex
          vertical
          style={{
            backgroundColor: "#f5f5f5",
            flexGrow: "1",
            padding: "1.5rem",
            borderRadius: "5px",
          }}
        >
          <Flex gap="large" justify="space-between">
            <Flex vertical>
              <h3>Graph</h3>
              <span>15 mins 20 sec</span>
            </Flex>
            <Flex>happy agry neutral</Flex>
          </Flex>
          <AreaCharts />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadResult;
