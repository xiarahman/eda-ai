import React, { useState } from "react";
import { Card, Space, Button, Flex } from "antd";
import Text from "../../../components/text/index.tsx";
import ProgressBar from "./textProgressBar.tsx";
import { getColorForEmotion } from "./helper.tsx";
import { useSelector } from "react-redux";

import { useInjectSaga, useInjectReducer } from "redux-injectors";
import { capitalizeFirstLetter } from "./helper.tsx";
import { selectorAnalyzeText } from "../../../redux/Selectors/index.ts";

const EmotionCard = () => {
  const { analysisResult } = useSelector(selectorAnalyzeText);

  // State variables for selected emotion
  const [selectedEmotion, setSelectedEmotion] = useState<string | undefined>(
    analysisResult?.top_three_emotions[0]?.emotion
  );

  const availableEmotions = analysisResult.top_three_emotions.map(
    (emotion) => emotion.emotion
  );

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
  };

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
      <Flex vertical align="center">
        <ProgressBar
          // Set the value of the progress bar based on the selected emotion
          value={Math.floor(
            analysisResult?.top_three_emotions.find(
              (emotion) =>
                emotion.emotion.toLowerCase() === selectedEmotion?.toLowerCase()
            )?.percentage ?? 0
          )}
          // Set the color of the progress bar based on the selected emotion
          color={getColorForEmotion(selectedEmotion ?? "")}
          // Set the label of the progress bar to the selected emotion
          label={selectedEmotion ?? ""}
        />
        <Space direction="horizontal" size={10}>
          {/* Map through the available emotions and render a Button */}
          {availableEmotions.map((emotion, index) => (
            <Button
              key={index}
              type="text"
              // Set the onClick handler to call handleEmotionSelect with the current emotion
              onClick={() => handleEmotionSelect(emotion)}
            >
              {capitalizeFirstLetter(emotion)}
            </Button>
          ))}
        </Space>
      </Flex>
    </Card>
  );
};

export default EmotionCard;

// import React from "react";
// import styled from "styled-components";
// import Text from "../../../components/text/index.tsx";

// const SentimentPer = styled.div`
//   padding: 0.5rem 1.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: flex-start;
//   border-radius: 5px;
//   background: #c1cfed;
// `;

// const Emotions = ({ label, value, emotion }) => (
//   <SentimentPer>
//     <Text type={"p"} className="card-heading">
//       {label}
//     </Text>
//     <Text type={"h1"} className="card-heading medium accent">
//       {value}% - {emotion}
//     </Text>
//   </SentimentPer>
// );
// export default Emotions;
