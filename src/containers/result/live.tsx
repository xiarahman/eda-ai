import React from "react";
import { Flex } from "antd";
import ProgressBar from "./components/progressbar.tsx";
import AreaCharts from "./components/AreaChart.tsx";

const LiveResult = () => {
  return (
    <Flex
      gap="middle"
      align="center"
      justify="space-between"
      style={{
        height: "100vh",
        maxWidth: "1040px",
        margin: "0 auto",
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
          <div style={{ flexGrow: "1", minHeight: "570px" }}>
            Frames Captured From Live
          </div>
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

export default LiveResult;
