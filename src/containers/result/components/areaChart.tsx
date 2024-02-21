import React, { useEffect } from "react";
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
import { chartsDataFetchRequest } from "../../../redux/Slice/index.ts";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { reducer } from "../../../redux/Slice/index.ts";
import saga from "../../../redux/Saga/index.ts";
import { getVideos } from "../../../redux/Selectors/index.ts";

const AreaCharts = ({ job_id }) => {
  const dispatch = useDispatch();
  useInjectSaga({ key: "video", saga });
  useInjectReducer({ key: "video", reducer: reducer });
  const { chartsData } = useSelector(getVideos);

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
      default:
        return "#000000"; // Default color if emotion is not recognized
    }
  };
  useEffect(() => {
    dispatch(chartsDataFetchRequest({ job_id }));
  }, [job_id]);

  const formatXAxis = (tick) => {
    return tick.toFixed(2); // Format the tick value to have two decimal places
  };

  const formatTooltip = (value, name, props) => {
    if (props && props.payload) {
      return [`${props.payload.interval.toFixed(2)}: ${value.toFixed(2)}`]; // Format tooltip value and interval
    }
    return null; // Return null if props.payload is undefined
  };

  return (
    chartsData?.chart_data && (
      <Flex>
        <AreaChart
          width={675}
          height={200}
          data={chartsData?.chart_data}
          syncId="anyId"
          margin={{
            left: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="interval" tickFormatter={formatXAxis} />{" "}
          {/* Utilize tickFormatter to format X-axis ticks */}
          <YAxis />
          <Tooltip labelFormatter={formatTooltip} />{" "}
          {/* Utilize labelFormatter to format tooltip */}
          <Area type="monotone" dataKey="angry" stroke="yellow" fill="yellow" />
          <Area type="monotone" dataKey="sad" stroke="red" fill="red" />
          <Area type="monotone" dataKey="fear" stroke="purple" fill="purple" />
          <Area type="monotone" dataKey="neutral" stroke="gray" fill="gray" />
        </AreaChart>
      </Flex>
    )
  );
};

export default AreaCharts;
