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
          justify="space-between"
          gap="middle"
          vertical
          style={{
            backgroundColor: "#f5f5f5",
            padding: "1.5rem",
            borderRadius: "5px",
          }}
        >
          <Flex vertical>
            <h3 className="card-heading">Emotions</h3>
          </Flex>

          <Flex justify="center">
            <UploadPieChart pieChartData={chartsData?.top_three_emotions} />
          </Flex>
          <Flex justify="start">
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
            </Flex>
          </Flex>
          <AreaCharts chartsData={chartsData} />
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

export default LiveResult;
