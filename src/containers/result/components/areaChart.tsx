import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import { chartsDataFetchRequest } from "../../../redux/slice/videoSlice.tsx";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { reducer } from "../../../redux/slice/chartSlice.tsx";
import saga from "../../../redux/saga/chartSaga.tsx";

const AreaCharts = ({ job_id }) => {
  const chartsData = useSelector((state: any) => state?.chart?.chartsData);
  const [keys, setKeys] = useState(Object.keys(chartsData));
  const dispatch = useDispatch();

  useInjectSaga({ key: "chart", saga });
  useInjectReducer({ key: "chart", reducer: reducer });

  const emoHexCode = (emotion) => {
    switch (emotion) {
      case "happy":
        return "#FFF172";
      case "sad":
        return "#56577A";
      case "neutral":
        return "#AFAFAF";
      case "angry":
        return "#FF1500";
      case "fear":
        return "#9C9DD7";
    }
  };

  useEffect(() => {
    dispatch(chartsDataFetchRequest({ job_id }));
  }, [dispatch, job_id]);

  console.log("Charts Data:", chartsData);
  return (
    chartsData && (
      <Flex>
        <AreaChart
          width={575}
          height={200}
          data={chartsData}
          syncId="anyId"
          margin={{
            left: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={keys[1]} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={keys[0]}
            stroke={emoHexCode(keys[0])}
            fill={emoHexCode(keys[0])}
          />
          <Area
            type="monotone"
            dataKey={keys[2]}
            stroke={emoHexCode(keys[1])}
            fill={emoHexCode(keys[1])}
          />
          <Area
            type="monotone"
            dataKey={keys[3]}
            stroke={emoHexCode(keys[2])}
            fill={emoHexCode(keys[2])}
          />
        </AreaChart>
      </Flex>
    )
  );
};

export default AreaCharts;
