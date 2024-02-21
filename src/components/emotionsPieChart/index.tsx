import { Flex } from "antd";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Happy", 11],
  ["Sad", 2],
  ["Neutral", 2],
  ["Angry", 2],
  ["Admiration", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  is3D: false,
};

export function UploadPieChart() {
  return (
    <Flex style={{ backgroundColor: "#f5f5f5" }}>
      <Chart
        chartType="PieChart"
        width={375}
        height={200}
        data={data}
        options={options}
        style={{ backgroundColor: "#f5f5f5" }}
      />
    </Flex>
  );
}
