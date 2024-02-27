import { Flex } from "antd";
import React, { useMemo } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Emotion", "Percentage"],
  ["neutral", 11],
  ["Sad", 2],
];

export const options = {
  pieHole: 0.4,
  pieSliceText: "Percentage",
  pieSliceTextStyle: {
    color: "black",
  },
  is3D: false,
  tooltip: {
    text: "percentage percent",
  },
};

export function UploadPieChart({ pieChartData = [] }) {
  const updateData = useMemo(() => {
    const actualResult = [["Emotion", "Percentage"]];

    pieChartData.forEach((item) => {
      actualResult.push([item?.emotion, item?.percentage]);
    });

    return actualResult;
  }, [pieChartData]);

  console.log(updateData, pieChartData);
  return (
    <Flex style={{ backgroundColor: "#f5f5f5" }}>
      <Chart
        chartType="PieChart"
        width={350}
        height={250}
        data={updateData}
        options={options}
        style={{ backgroundColor: "#f5f5f5" }}
      />
    </Flex>
  );
}
