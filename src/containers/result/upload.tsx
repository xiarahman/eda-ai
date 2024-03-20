import React, { useEffect } from "react";
import { Flex } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import AreaCharts from "../../components/areaChart/index.tsx";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  chartsDataFetchRequest,
  videoFetchRequest,
} from "../../redux/Slice/index.ts";

import { useHistory, useParams } from "react-router-dom";
import { getVideos } from "../../redux/Selectors/index.ts";
import { UploadPieChart } from "../../components/emotionsPieChart/index.tsx";
import GlobalSentimentProgress from "../../components/sentiments/progress.tsx";
import {
  AreaChartFlex,
  CardHeading,
  Container,
  EmotionAndSentimentSection,
  EmotionPieChartFlex,
  EmotionSectionFlex,
  GoBackButtonFlex,
  MainFlex,
  PreviewSectionFlex,
  ResultSectionFlex,
  SectionHeading,
  SentimentSectionFlex,
  SliderSectionFlex,
} from "./styledupload.tsx";

const UploadResult = ({ job_id }) => {
  const history = useHistory();
  const { chartsData, data } = useSelector(getVideos);
  const dispatch = useDispatch();
  const { opt } = useParams<any>();

  useEffect(() => {
    if (data) {
      dispatch(videoFetchRequest({ job_id }));
      dispatch(chartsDataFetchRequest({ job_id }));
    }
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data?.final_sentiment) {
    return null;
  }
  return (
    <Container>
      <MainFlex gap="middle">
        <PreviewSectionFlex gap="middle" align="start" justify="top" vertical>
          <SectionHeading>Preview</SectionHeading>
          <VideoPlayer file={data?.video_detail?.file_path} />
          <SliderSectionFlex id="slider" vertical>
            <Slider />
          </SliderSectionFlex>
        </PreviewSectionFlex>

        {/* Results Block */}
        <ResultSectionFlex vertical gap="middle">
          <SectionHeading>Results</SectionHeading>

          <EmotionAndSentimentSection gap="middle" align="start">
            {/* Emotions Section */}
            <EmotionSectionFlex justify="space-between" gap="middle">
              <EmotionPieChartFlex vertical align="space-between" gap="middle">
                <Flex vertical style={{ flexGrow: "1" }}>
                  <CardHeading>Emotions</CardHeading>
                </Flex>
                <UploadPieChart pieChartData={data?.final_emotion} />

                <Flex flex={1} justify="start">
                  {data?.final_prediction &&
                    data?.final_prediction.length > 0 && (
                      <CardHeading>
                        Final Prediction: {data?.final_prediction}
                      </CardHeading>
                    )}
                </Flex>
              </EmotionPieChartFlex>
            </EmotionSectionFlex>
            {/* Sentiment Section */}
            <SentimentSectionFlex gap="middle" vertical>
              <Flex justify="space-between">
                <Flex vertical gap="small">
                  <CardHeading>Sentiments</CardHeading>
                  <Flex vertical gap="small" style={{ marginTop: 40 }}>
                    <GlobalSentimentProgress
                      sentimentData={data.final_sentiment}
                    />
                    <RightOutlined
                      className="font-size-icon"
                      onClick={() =>
                        history.push(`/sentiment-detail/${opt}/${job_id}`)
                      }
                    />
                  </Flex>
                </Flex>
              </Flex>
            </SentimentSectionFlex>
          </EmotionAndSentimentSection>

          {/* Area Chart */}
          <AreaChartFlex vertical gap="large">
            <Flex gap="large" justify="space-between">
              <Flex vertical>
                <CardHeading>Graph</CardHeading>
              </Flex>
            </Flex>
            <AreaCharts chartsData={chartsData} />
          </AreaChartFlex>
        </ResultSectionFlex>
      </MainFlex>
      {/* Go Back Button */}
      <GoBackButtonFlex
        style={{
          minWidth: "1100px",
          cursor: "pointer",
          margin: "0 auto",
          justifyContent: "start",
        }}
        onClick={() => history.push(`/analyze`)}
      >
        <ArrowLeftOutlined />
        <span style={{ width: 6 }} />
        Go Back
      </GoBackButtonFlex>
    </Container>
  );
};

export default UploadResult;
