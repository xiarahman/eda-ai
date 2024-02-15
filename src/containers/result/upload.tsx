import React, { useEffect } from "react";
import { Flex, Space } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import ProgressBar from "./components/progressbar.tsx";
import Emotions from "./components/emotion.tsx";
import Sentiments from "./components/sentiment.tsx";
import AreaCharts from "./components/areaChart.tsx";
import { RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { videoFetchRequest } from "../../redux/Slice/index.ts";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

import { useHistory, useParams } from "react-router-dom";
import { getVideos } from "../../redux/selectors/index.ts";

const UploadResult = ({ job_id }) => {
  const history = useHistory();
  const { chartsData, data } = useSelector(getVideos);
  const dispatch = useDispatch();
  const { opt } = useParams<any>();

  useEffect(() => {
    if (!data) {
      dispatch(videoFetchRequest({ job_id }));
      console.log("%cupload.tsx line:34 data", "color: #007acc;", data);
    }
  }, [dispatch, job_id, data]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Flex
      gap="middle"
      align="space-between"
      justify="center"
      style={{
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "8rem 0",
      }}
    >
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
              style={{ minHeight: "100%", borderRadius: "5px" }}
            >
              <Flex vertical align="space-between" style={{ flexGrow: "1" }}>
                <h3 className="card-heading">Emotions</h3>
                <span className="card-subheading">
                  {data?.no_of_frames} Frames
                </span>
              </Flex>
              <ProgressBar />
            </Flex>
            <Flex justify="flex-end" gap="small" vertical>
              <Emotions
                label="Facial"
                value={55}
                emotion={data?.video_detail?.cumulative_emotion}
              />
              <Emotions
                label="Speech"
                value={40}
                emotion={data?.audio_detail?.cumulative_emotion}
              />
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
              <Flex vertical>
                <h3 className="card-heading">Sentiments</h3>
                <span className="card-subheading">
                  {data?.no_of_sentences} Sentences
                </span>
              </Flex>
              <RightOutlined
                className="font-size-icon"
                onClick={() =>
                  history.push(`/sentiment-detail/${opt}/${job_id}`)
                }
              />
            </Flex>

            <Sentiments />
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
              <span className="card-subheading">15 mins 20 sec</span>
            </Flex>
            <Flex>
              {chartsData?.top_three_emotions?.map((item) => (
                <Space>{item?.emotion} </Space>
              ))}
            </Flex>
          </Flex>
          <AreaCharts job_id={job_id} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadResult;
