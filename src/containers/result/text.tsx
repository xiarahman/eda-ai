import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../../components/text/index.tsx";
import { Row, Col, Button, List, Space } from "antd";
import { useInjectSaga, useInjectReducer } from "redux-injectors";
import EmotionCard from "./components/textEmotion.tsx";
import SentimentCard from "./components/textSentiment.tsx";
import { mapEmotions, mapSentiments } from "./components/helper.tsx";
import { AnalysisResultProps } from "./components/textType.js";
import {
  AnalysisContainer,
  PreviewColumn,
  ResultsColumn,
  ResultsWrapper,
  LoadMoreButton,
} from "./styledtext.tsx";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import saga from "../../redux/Saga/rootSaga.tsx";
import reducer from "../../redux/Slice/textSlice.tsx";
import { selectorAnalyzeText } from "../../redux/selectors/index.ts";

const AnalysisResult: React.FC<AnalysisResultProps> = () => {
  // Retrieve analysis result from Redux state
  const { analysisResult } = useSelector(selectorAnalyzeText);

  // useInjectSaga({ key: "input", saga });
  // useInjectReducer({ key: "input", reducer: reducer });
  // State variables for selected emotion, selected sentiment, and displayed sentences
  const [selectedEmotion, setSelectedEmotion] = useState<string | undefined>(
    analysisResult.top_three_emotions[0]?.emotion
  );
  const [selectedSentiment, setSelectedSentiment] = useState<
    string | undefined
  >(analysisResult.top_three_sentiments[0]?.sentiment);
  const [displayedSentences, setDisplayedSentences] = useState<number>(3);
  // Event handlers for selecting emotion and sentiment
  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
  };
  const handleSentimentSelect = (sentiment: string) => {
    setSelectedSentiment(sentiment);
  };
  // Map available emotions and sentiments from analysis result
  const availableEmotions = mapEmotions(analysisResult.top_three_emotions);
  const availableSentiments = mapSentiments(
    analysisResult.top_three_sentiments
  );
  // Load more sentences event handler
  const handleLoadMore = () => {
    setDisplayedSentences((prevCount) => prevCount + 2);
  };

  // Function to determine sentiment icon and text color
  const getSentimentIconAndColor = (sentiment: string) => {
    if (sentiment === "Positive") {
      return { icon: <SmileOutlined />, color: "#1890ff" };
    } else if (sentiment === "Negative") {
      return { icon: <FrownOutlined />, color: "#f5222d" };
    } else {
      return { icon: null, color: "inherit" };
    }
  };

  return (
    <AnalysisContainer>
      {/* Preview column */}
      <PreviewColumn>
        <Text type={"h4"} className="preview">
          Preview
        </Text>
        <Space direction="vertical">
          {/* preview sentences  */}
          {analysisResult?.detailed_analysis
            .slice(0, displayedSentences)
            .map((item, index) => (
              <List itemLayout="vertical" key={index}>
                <List.Item
                  title={`Sentence ${index + 1}`}
                  actions={[
                    <Space direction="horizontal" size={20}>
                      {/* Display predicted emotion */}
                      <Text type={"p"} className="emotion-name">
                        {item.pred_emotion}
                      </Text>
                      {/* Display sentiment icon and colored text */}
                      <Text
                        type={"p"}
                        className="sentiment-name"
                        style={{
                          color: getSentimentIconAndColor(item.pred_sentiment)
                            .color,
                        }}
                      >
                        {getSentimentIconAndColor(item.pred_sentiment).icon}{" "}
                        {item.pred_sentiment}
                      </Text>
                    </Space>,
                  ]}
                >
                  {/* Display sentence*/}
                  <div>{item.sentence}</div>
                </List.Item>
                <hr />
              </List>
            ))}
        </Space>
        {/* Render load more button */}
        {displayedSentences < analysisResult?.detailed_analysis.length && (
          <LoadMoreButton type="primary" onClick={handleLoadMore}>
            Load More
          </LoadMoreButton>
        )}
      </PreviewColumn>
      {/* Results column */}
      <ResultsColumn>
        <ResultsWrapper>
          <Text type={"h4"} className="results">
            Results
          </Text>
          {/* Render EmotionCard component */}
          <EmotionCard />
          {/* Render SentimentCard component */}
          <SentimentCard />
        </ResultsWrapper>
      </ResultsColumn>
    </AnalysisContainer>
  );
};
export default AnalysisResult;
