import React from "react";
import styled from "styled-components";
import { Flex, Card } from "antd";
import { useSelector } from "react-redux";
import GlobalSentimentProgress from "../../../components/sentiments/progress.tsx";
import { WorkTitle } from "../../../components/home/style.ts";
import { selectorAnalyzeText } from "../../../redux/Selectors/index.ts";

// Styled Card component
const StyledCard = styled(Card)`
  backgroundcolor: #f5f5f5;
  margin-top: 10px;
  width: 100%;
  height: 270px;
  padding: 5px;
`;

const SentimentCard = () => {
  // Access sentiment data from Redux store
  const { analysisResult } = useSelector(selectorAnalyzeText);
  if (!analysisResult?.top_three_sentiments) {
    return null;
  }
  return (
    <StyledCard>
      <Flex vertical gap={2}>
        <WorkTitle>Sentiments</WorkTitle>
        <GlobalSentimentProgress
          sentimentData={analysisResult.top_three_sentiments}
        />
      </Flex>
    </StyledCard>
  );
};
export default SentimentCard;
