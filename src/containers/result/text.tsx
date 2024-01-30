import React, { useState, useEffect } from "react";
import { Card, Descriptions, Space, Button, Typography, Row, Col } from "antd";
import { Progress } from "antd";
const { Text } = Typography;

interface AnalysisResultProps {
  result: {
    detailed_analysis: {
      emotion_percentages: { [key: string]: number };
      pred_emotion: string;
      pred_sentiment: string;
      sentence: string;
      result: string | any;
    }[];
    top_three_emotions: { emotion: string; percentage: number }[];
    top_three_sentiments: { sentiment: string; percentage: number }[];
  };
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | undefined>(
    result.top_three_emotions[0]?.emotion
  );
  const [selectedSentiment, setSelectedSentiment] = useState<
    string | undefined
  >(result.top_three_sentiments[0]?.sentiment);
  const [displayedSentences, setDisplayedSentences] = useState<number>(3); 
  useEffect(() => {
    setSelectedEmotion(result.top_three_emotions[0]?.emotion);
    setSelectedSentiment(result.top_three_sentiments[0]?.sentiment);
  }, [result]);

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
  };

  const handleSentimentSelect = (sentiment: string) => {
    setSelectedSentiment(sentiment);
  };

  const getColorForEmotion = (emotion: string) => {
    switch (emotion.toLowerCase()) {
      case "happy":
        return "#FFF172";
      case "sad":
        return "#56577A";
      case "angry":
        return "#FF1500";
      case "fear":
        return "#9C9DD7";
      case "neutral":
        return "#AFAFAF";
      default:
        return result.top_three_emotions.length > 1 ? "#000000" : "#000000";
    }
  };

  const getColorForSentiment = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return "#FF4D4F";
      case "negative":
        return "#1890FF";
      case "neutral":
        return "#AFAFAF";
      default:
        return result.top_three_sentiments.length > 1 ? "#000000" : "#000000";
    }
  };

  const availableEmotions = result.top_three_emotions
    .filter((emotion) => emotion.percentage > 0)
    .map(
      (emotion) =>
        emotion.emotion.charAt(0).toUpperCase() + emotion.emotion.slice(1)
    );

  const availableSentiments = result.top_three_sentiments
    .filter((sentiment) => sentiment.percentage > 0)
    .map(
      (sentiment) =>
        sentiment.sentiment.charAt(0).toUpperCase() +
        sentiment.sentiment.slice(1)
    );

  const handleLoadMore = () => {
    setDisplayedSentences((prevCount) => prevCount + 3); 
  };

  return (
    <Row gutter={32}>
      <Col span={10}>
        <Text strong>Preview</Text>
        <Card style={{ minHeight: "100%" }}>
          <Space direction="vertical">
            {result.detailed_analysis.slice(0, displayedSentences).map((item, index) => (
              <React.Fragment key={index}>
                <Descriptions.Item label={`Sentence ${index + 1}`}>
                  <div style={{ wordWrap: "break-word", color: "black" }}>
                    {item.sentence}
                  </div>
                  <Space direction="horizontal" size={20}>
                    <Text>{item.pred_emotion}</Text>
                    <Text>{item.pred_sentiment}</Text>
                  </Space>
                </Descriptions.Item>
                <hr style={{ margin: "10px 0" }} />
              </React.Fragment>
            ))}
          </Space>
          {displayedSentences < result.detailed_analysis.length && (
            <Button type="primary" onClick={handleLoadMore} style={{ marginTop: "10px" }}>
              Load More
            </Button>
          )}
        </Card>
      </Col>

      <Col span={14}>
        <Text strong>Results</Text>
        <Card style={{ width: "100%", backgroundColor: "#f5f5f5", alignItems: 'center' }} >
          <Space direction="vertical" >

            <Text strong>Emotions</Text>
            <Progress
              type="dashboard"
              percent={
                result.top_three_emotions.find(
                  (emotion) =>
                    emotion.emotion.toLowerCase() ===
                    selectedEmotion?.toLowerCase()
                )?.percentage ?? 0
              }
              strokeWidth={10}
              width={150}
              strokeColor={getColorForEmotion(selectedEmotion ?? "")}
              format={() => (
                <div style={{ textAlign: "center", padding: "10px" }}>
                  <div>
                    {result.top_three_emotions.find(
                      (emotion) =>
                        emotion.emotion.toLowerCase() ===
                        selectedEmotion?.toLowerCase()
                    )?.percentage ?? 0}
                    %
                  </div>
                  <div style={{ marginTop: "10px" }}>{selectedEmotion}</div>
                </div>
              )}
            />
            <Space direction="horizontal" size={10}>
              {availableEmotions.map((emotion, index) => (
                <Button
                  key={index}
                  type="text"
                  onClick={() => handleEmotionSelect(emotion)}
                >
                  {emotion}
                </Button>
              ))}
            </Space>
          </Space>
        </Card>
        <Card style={{ width: "100%", backgroundColor: "#f5f5f5", marginTop: '5px' }} >
          <Space direction="vertical" >
            <Text strong>Sentiments</Text>
            <Progress
              type="dashboard"
              percent={
                result.top_three_sentiments.find(
                  (sentiment) =>
                    sentiment.sentiment.toLowerCase() ===
                    selectedSentiment?.toLowerCase()
                )?.percentage ?? 0
              }
              strokeWidth={10}
              width={150}
              strokeColor={getColorForSentiment(selectedSentiment ?? "")}
              format={() => (
                <div style={{ textAlign: "center", padding: "10px" }}>
                  <div>
                    {result.top_three_sentiments.find(
                      (sentiment) =>
                        sentiment.sentiment.toLowerCase() ===
                        selectedSentiment?.toLowerCase()
                    )?.percentage ?? 0}
                    %
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    {selectedSentiment}
                  </div>
                </div>
              )}
            />
            <Space direction="horizontal" size={10}>
              {availableSentiments.map((sentiment, index) => (
                <Button
                  key={index}
                  type="text"
                  onClick={() => handleSentimentSelect(sentiment)}
                  style={{ color: getColorForSentiment(sentiment) }}
                >
                  {sentiment}
                </Button>
              ))}
            </Space>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default AnalysisResult;


