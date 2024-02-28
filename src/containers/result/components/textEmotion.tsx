import React, { useState } from "react";
import { Card, Space, Button, Flex } from "antd";
import Text from "../../../components/text/index.tsx";
import { useSelector } from "react-redux";
import { selectorAnalyzeText } from "../../../redux/Selectors/index.ts";
import { UploadPieChart } from "../../../components/emotionsPieChart/index.tsx";

const EmotionCard = () => {
  const { analysisResult } = useSelector(selectorAnalyzeText);
  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        width: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text type={"p"} className="emotions-card">
        Emotions
      </Text>
      <UploadPieChart pieChartData={analysisResult?.top_three_emotions} />
    </Card>
  );
};
export default EmotionCard;


