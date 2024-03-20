import { Flex } from "antd";
import React, { useMemo } from "react";
import { Chart } from "react-google-charts";

export const options = {
  pieHole: 0.4,
  pieSliceText: "Percentage",
  pieSliceTextStyle: {
    color: "black",
  },
  is3D: true,
  tooltip: {
    text: "percentage percent",
  },
  chartArea: { width: 300, height: 300 },
};

// Define CSS directly in the component
const customCSS = `
  svg > g > g:last-child {
    pointer-events: none;
  }
`;

export function UploadPieChart({ pieChartData = [] }) {
  //Updating the data according to pieChart format
  const updateData = useMemo(() => {
    const actualResult = [["Emotion", "Percentage"]];

    pieChartData.forEach((item) => {
      actualResult.push([item?.emotion, item?.percentage]);
    });

    return actualResult;
  }, [pieChartData]);

  return (
    <Flex style={{ backgroundColor: "transparent" }}>
      <style>{customCSS}</style>
      {/* Apply custom CSS */}
      <Chart
        chartType="PieChart"
        width={350}
        height={250}
        data={updateData}
        options={options}
        style={{ backgroundColor: "transparent" }}
      />
    </Flex>
  );
}
