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

const LiveResult = ({ job_id }) => {
  const dispatch = useDispatch();
  useInjectSaga({ key: "video", saga });
  useInjectReducer({ key: "video", reducer: reducer });
  const { chartsData } = useSelector(getVideos);

  useEffect(() => {
    dispatch(liveStreamFetchRequest({ job_id }));
    if (chartsData) console.log("Fetched Data :: ", chartsData);
  }, []);
  return (
    <Flex
      gap="middle"
      align="center"
      justify="space-between"
      style={{
        height: "100vh",
        maxWidth: "1040px",
        margin: "0 auto",
      }}
    >
      {/* Results Block */}
      <Flex gap="middle" style={{ flexGrow: "1" }}>
        {/* <h2 className="section-heading">Results</h2> */}

        <Flex
          justify="space-between"
          gap="middle"
          vertical
          style={{
            backgroundColor: "#f5f5f5",
            flexGrow: "1",
            padding: "1.5rem",
            borderRadius: "5px",
          }}
        >
          <Flex vertical>
            <h3 className="card-heading">Emotions</h3>
          </Flex>

          <Flex flex={1} justify="center">
            <UploadPieChart pieChartData={chartsData?.top_three_emotions} />
          </Flex>
          <Flex flex={1} justify="start">
            {chartsData?.top_three_emotions &&
              chartsData?.top_three_emotions.length > 0 && (
                <h4 className="card-heading">
                  Final Prediction: {chartsData.top_three_emotions[0].emotion}
                </h4>
              )}
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
          <AreaCharts chartsData={chartsData} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LiveResult;
