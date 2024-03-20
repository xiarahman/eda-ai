import React, { useEffect } from "react";
import { Flex } from "antd";
import AreaCharts from "../../components/areaChart/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { liveStreamFetchRequest } from "../../redux/Slice/index.ts";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { reducer } from "../../redux/Slice/index.ts";
import saga from "../../redux/Saga/index.ts";
import { getVideos } from "../../redux/Selectors/index.ts";
import { UploadPieChart } from "../../components/emotionsPieChart/index.tsx";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { CardHeading } from "./styledupload.tsx";
import {
  Container,
  MainFlex,
  EmotionSectionFlex,
  AreaChartFlex,
  GoBackButtonFlex,
} from "./styledlive.tsx";

const LiveResult = ({ job_id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useInjectSaga({ key: "video", saga });
  useInjectReducer({ key: "video", reducer: reducer });
  const { chartsData } = useSelector(getVideos);

  useEffect(() => {
    dispatch(liveStreamFetchRequest({ job_id }));
  }, []);
  return (
    <Container>
      <MainFlex gap="middle">
        <EmotionSectionFlex justify="space-between" gap="middle" vertical>
          <Flex vertical>
            <CardHeading>Emotions</CardHeading>
          </Flex>

          <Flex justify="center">
            <UploadPieChart pieChartData={chartsData?.top_three_emotions} />
          </Flex>
          <Flex justify="start">
            {chartsData?.top_three_emotions &&
              chartsData?.top_three_emotions.length > 0 && (
                <CardHeading>
                  Final Prediction: {chartsData.top_three_emotions[0].emotion}
                </CardHeading>
              )}
          </Flex>
        </EmotionSectionFlex>
        {/* Area Chart */}
        <AreaChartFlex vertical gap="large">
          <Flex gap="large" justify="space-between">
            <Flex vertical>
              <CardHeading>Graph</CardHeading>
            </Flex>
          </Flex>
          <AreaCharts chartsData={chartsData} />
        </AreaChartFlex>
      </MainFlex>
      {/* Go Back Button */}
      <GoBackButtonFlex onClick={() => history.push(`/analyze`)}>
        <ArrowLeftOutlined />
        <span style={{ width: 6 }} />
        Go Back
      </GoBackButtonFlex>
    </Container>
  );
};

export default LiveResult;
