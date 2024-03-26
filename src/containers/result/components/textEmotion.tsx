import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import Text from "../../../components/text/index.tsx";
import { useSelector } from "react-redux";
import { selectorAnalyzeText } from "../../../redux/Selectors/index.ts";
import { UploadPieChart } from "../../../components/emotionsPieChart/index.tsx";

// Styled Card component
const StyledCard = styled(Card)`
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const EmotionCard = () => {
  const { analysisResult } = useSelector(selectorAnalyzeText);
  return (
    <StyledCard>
      <Text type={"p"} className="emotions-card">
        Emotions
      </Text>
      <UploadPieChart pieChartData={analysisResult?.top_three_emotions} />
    </StyledCard>
  );
};

export default EmotionCard;
