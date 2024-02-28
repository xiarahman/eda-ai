import React from "react";
import { Flex,  Card } from "antd";
import { useSelector } from "react-redux";
import { selectorAnalyzeText } from "../../../redux/Selectors/index.ts";
import GlobalSentimentProgress from "../../../components/sentiments/progress.tsx";
import { WorkTitle } from "../../../components/home/style.ts";

const SentimentCard = () => {
  // Access sentiment data from Redux store
  const { analysisResult } = useSelector(selectorAnalyzeText);
  if (!analysisResult?.top_three_sentiments) {
    return null;
  }
  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        marginTop: "10px",
        width: "600px",
        height: "250px",
        padding: "5px"
      }}
    >
           <Flex vertical gap={2}  >
           <WorkTitle>Sentiments</WorkTitle>
        <GlobalSentimentProgress sentimentData={analysisResult.top_three_sentiments} />
        </Flex>
    </Card>
  );
};
export default SentimentCard;
