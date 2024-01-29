import React, { useEffect } from "react";
import { Flex } from "antd";
import VideoPlayer from "./components/videoPlayer.tsx";
import Slider from "./components/slide.tsx";
import ProgressBar from "./components/progressbar.tsx";
import Emotions from "./components/emotion.tsx";
import Sentiments from "./components/sentiment.tsx";
import AreaCharts from "./components/AreaChart.tsx";
import { RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { videoFetchRequest } from "../../redux/slice/videoSlice.tsx";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

import { reducer } from "./../../redux/slice/videoSlice.tsx";
import saga from "./../../redux/saga/videoSaga.tsx";

const UploadResult = ({ job_id }) => {
  // const data = useSelector(getVideos);
  const data = useSelector((state: any) => state?.video?.data);
  const dispatch = useDispatch();
  useInjectSaga({ key: "video", saga });
  useInjectReducer({ key: "video", reducer: reducer });

  useEffect(() => {
    dispatch(videoFetchRequest({ job_id }));
  }, [dispatch, job_id]);

  console.log("Data:", data);
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
        justify="stretch"
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
              <Emotions label="Facial" value={30} emotion="Happy" />
              <Emotions label="S" value={40} emotion="Happy" />
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
              <RightOutlined className="font-size-icon" />
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
            <Flex>happy angry neutral</Flex>
          </Flex>
          <AreaCharts />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UploadResult;
