import React, { useEffect } from "react";
import { Row, Col, Flex } from "antd";
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
        <Row gutter={[16, 16]}>
          {/* Emotions Section */}
          <Col xs={24} lg={12}>
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
                      Final Prediction:{" "}
                      {chartsData.top_three_emotions[0].emotion}
                    </CardHeading>
                  )}
              </Flex>
            </EmotionSectionFlex>
          </Col>

          {/* Area Chart */}
          <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
            <AreaChartFlex vertical gap="large">
              <Flex gap="large" justify="space-between">
                <Flex vertical>
                  <CardHeading>Graph</CardHeading>
                </Flex>
              </Flex>
              <AreaCharts chartsData={chartsData} />
            </AreaChartFlex>
          </Col>
        </Row>
      </MainFlex>
      {/* Go Back Button */}
      <Row justify="center">
        <Col>
          <GoBackButtonFlex onClick={() => history.push(`/analyze`)}>
            <ArrowLeftOutlined />
            <span style={{ width: 6 }} />
            Go Back
          </GoBackButtonFlex>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveResult;
