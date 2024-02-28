import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Text from "../../components/text/index.tsx";
import { Row, Col, Button, List, Space, Image } from "antd";
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
const AnalysisResult: React.FC<AnalysisResultProps> = () => {
  // Retrieve analysis result from Redux state
  const { analysisResult } = useSelector(selectorAnalyzeText);
  const [displayedSentences, setDisplayedSentences] = useState<number>(5);
const history= useHistory();
  // Load more sentences event handler
  const handleLoadMore = () => {
    setDisplayedSentences((prevCount) => prevCount + 4);
  };

  // Function to determine sentiment icon and text color
  const getSentimentIconAndColor = (sentiment: string) => {
    if (sentiment === "positive") {
      return { icon : <LikeOutlined/>, color: "#00942A" };
    } else if (sentiment === "negative") {
      return { icon: <LikeOutlined rotate={180} />, color: "#f5222d" };
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
                        Emotion: {item.pred_emotion}
                      </Text>
                      {/* Display sentiment icon and colored text */}
<Space direction= 'horizontal' size={3}>

                      <Text
                        type={"p"}
                        className="sentiment-name"

                      >
                        {/* {getSentimentIconAndColor(item.pred_sentiment).icon}{" "} */}
                      Sentiment: {capitalizeFirstLetter(item.pred_sentiment)} 
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
        </Space>
        {/* Render load more button */}
        <Space direction="vertical" size={8}>
        {displayedSentences < analysisResult?.detailed_analysis.length && (
          <LoadMoreButton type="primary" onClick={handleLoadMore}>
            Load More
          </LoadMoreButton>
        )}
        <Button 
          onClick={() => {history.push(`/analyze`);
          window.location.reload();
        }}
         
        style={{marginTop: 20, backgroundColor: "transparent", border: "none", outline: "none"}} >
        
          <ArrowLeftOutlined
            className="font-size-icon"
            size={52}
          
            style={{backgroundColor: "transparent", border: "none", outline: "none"}}
          />
          Go back
        </Button>
        </Space>
        
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
