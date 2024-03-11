import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Text from "../../components/text/index.tsx";
import { List, Space, Flex } from "antd";
import EmotionCard from "./components/textEmotion.tsx";
import SentimentCard from "./components/textSentiment.tsx";
import { capitalizeFirstLetter } from "./components/helper.tsx";
import { AnalysisResultProps } from "./components/textType.js";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  AnalysisContainer,
  PreviewColumn,
  ResultsColumn,
  ResultsWrapper,
  LoadMoreButton,
} from "./styledtext.tsx";
import { selectorAnalyzeText } from "../../redux/Selectors/index.ts";
import { getColorForSentiment } from "./components/helper.tsx";
import { LikeOutlined } from "@ant-design/icons";
import { analyzeTextSuccess } from "../../redux/Slice/index.ts";
const AnalysisResult: React.FC<AnalysisResultProps> = () => {
  // Retrieve analysis result from Redux state
  const { analysisResult } = useSelector(selectorAnalyzeText);
  const [displayedSentences, setDisplayedSentences] = useState<number>(5);
  const history = useHistory();
  const dispatch = useDispatch();
  // Load more sentences event handler
  const handleLoadMore = () => {
    setDisplayedSentences((prevCount) => prevCount + 4);
  };

  // Function to determine sentiment icon and text color
  const getSentimentIconAndColor = (sentiment: string) => {
    if (sentiment === "positive") {
      return { icon: <LikeOutlined />, color: "#00942A" };
    } else if (sentiment === "negative") {
      return { icon: <LikeOutlined rotate={180} />, color: "#f5222d" };
    } else {
      return { icon: null, color: "inherit" };
    }
  };
  useEffect(() => {
    return () => {
      dispatch(analyzeTextSuccess({}));
      history.push("/analyze");
    };
  }, []);

  return (
    <div
      style={{
        padding: "0px 0px 25px 0px",
        display: "flex",
        justifyContent: "space-between",
        gap: "40px",
        flexDirection: "column",
      }}
    >
      <AnalysisContainer>
        {/* Preview column */}
        <PreviewColumn>
          <h2 className="section-heading">Preview</h2>

          <Space direction="vertical">
            {/* preview sentences  */}
            {Object.keys(analysisResult?.detailed_analysis || {}) &&
              analysisResult?.detailed_analysis
                ?.slice(0, displayedSentences)
                ?.map((item, index) => (
                  <List itemLayout="vertical" key={index}>
                    <List.Item
                      title={`Sentence ${index + 1}`}
                      actions={[
                        <Space direction="horizontal" size={20}>
                          {/* Display predicted emotion */}
                          <Text type={"p"} className="emotion-name">
                            Emotion: {item.pred_emotion}
                          </Text>
                          {/* Display sentiment icon and colored text */}
                          <Space direction="horizontal" size={3}>
                            <Text type={"p"} className="sentiment-name">
                              {/* {getSentimentIconAndColor(item.pred_sentiment).icon}{" "} */}
                              Sentiment:{" "}
                              {capitalizeFirstLetter(item.pred_sentiment)}
                            </Text>
                          </Space>
                        </Space>,
                      ]}
                    >
                      {/* Display sentence*/}
                      <div>{item.sentence}</div>
                    </List.Item>
                    <hr />
                  </List>
                ))}
            {/* Render load more button */}
            {displayedSentences < analysisResult?.detailed_analysis?.length && (
              <LoadMoreButton type="primary" onClick={handleLoadMore}>
                Load More
              </LoadMoreButton>
            )}
          </Space>

          {/* <Space direction="vertical" size={8}> */}

          {/* </Space> */}
        </PreviewColumn>
        {/* Results column */}
        <ResultsColumn>
          <ResultsWrapper>
            <h2 className="section-heading">Results</h2>
            {/* Render EmotionCard component */}
            <EmotionCard />
            {/* Render SentimentCard component */}
            <SentimentCard />
          </ResultsWrapper>
        </ResultsColumn>
      </AnalysisContainer>
      <Flex
        style={{
          minWidth: "1100px",
          cursor: "pointer",
          margin: "0 auto",
          justifyContent: "start",
        }}
        onClick={() => {
          history.push(`/analyze`);
          // window.location.reload();
        }}
      >
        <ArrowLeftOutlined />
        <span style={{ width: 6 }} />
        Go Back
      </Flex>
    </div>
  );
};
export default AnalysisResult;
