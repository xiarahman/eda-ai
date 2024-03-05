import React, { useEffect } from "react";
import { Flex, Space } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import AreaCharts from "../../components/areaChart/index.tsx";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  chartsDataFetchRequest,
  videoFetchRequest,
} from "../../redux/Slice/index.ts";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

import { useHistory, useParams } from "react-router-dom";
import { getVideos } from "../../redux/selectors/index.ts";
import { UploadPieChart } from "../../components/emotionsPieChart/index.tsx";
import GlobalSentimentProgress from "../../components/sentiments/progress.tsx";

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
    <div
      style={{
        padding: "7rem 0",
        display: "flex",
        justifyContent: "space-between",
        gap: "40px",
        flexDirection: "column",
      }}
    >
      <Flex gap="middle" style={{ margin: "0 auto", maxWidth: "1100px" }}>
        <Flex
          gap="middle"
          align="start"
          justify="top"
          vertical
          style={{ flexGrow: "1", minWidth: "400px" }}
        >
          <h2 className="section-heading">Preview</h2>
          <VideoPlayer file={data?.video_detail?.file_path} />
          <Flex
            id="slider"
            vertical
            style={{ width: "100%", backgroundColor: "#f5f5f5" }}
          >
            <Slider />
          </Flex>
        </Flex>

        {/* Results Block */}
        <Flex vertical gap="middle" style={{ flexGrow: "1" }}>
          <h2 className="section-heading">Results</h2>

          <Flex gap="middle" align="start" style={{ alignItems: "stretch" }}>
            <Flex
              justify="space-between"
              gap="middle"
              style={{
                backgroundColor: "#f5f5f5",
                flexGrow: "1",
                padding: "1.5rem",
                borderRadius: "5px",
              }}
            >
              <Flex
                vertical
                align="space-between"
                gap="middle"
                style={{
                  minHeight: "100px",
                  minWidth: "200px",
                  borderRadius: "5px",
                }}
              >
                <Flex vertical style={{ flexGrow: "1" }}>
                  <h3 className="card-heading">Emotions</h3>
                </Flex>
                <UploadPieChart pieChartData={data?.final_emotion} />

                <Flex flex={1} justify="start">
                  {data?.final_prediction &&
                    data?.final_prediction.length > 0 && (
                      <h4 className="card-heading">
                        Final Prediction: {data?.final_prediction}
                      </h4>
                    )}
                </Flex>
              </Flex>
            </Flex>

            <Flex
              gap="middle"
              style={{
                backgroundColor: "#f5f5f5",
                flexGrow: "1",
                padding: "1rem",
                borderRadius: "5px",
              }}
              vertical
            >
              <Flex justify="space-between">
                <Flex vertical gap="small">
                  <h3 className="card-heading">Sentiments</h3>
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
            </Flex>
          </Flex>

          {/* Area Chart */}
          <Flex
            vertical
            gap="large"
            style={{
              backgroundColor: "#f5f5f5",
              flexGrow: "1",
              padding: "1.5rem",
              borderRadius: "5px",
            }}
          >
            <Flex gap="large" justify="space-between">
              <Flex vertical>
                <h3 className="card-heading">Graph</h3>
              </Flex>
            </Flex>
            <AreaCharts chartsData={chartsData} />
          </Flex>
        </Flex>
      </Flex>
      {/* Go Back Button */}
      <Flex
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
      </Flex>
    </div>
  );
};

export default UploadResult;
