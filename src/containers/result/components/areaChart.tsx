import React from "react";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaCharts = () => {
  const frames = useSelector(
    (state: any) => state?.video?.data?.video_detail?.frames
  );

  return (
    <Flex>
      <AreaChart
        width={575}
        height={200}
        data={frames}
        syncId="anyId"
        margin={{
          left: -10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="frame_time" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={frames?.emotion_percentages[0]}
          stroke="yellow"
          fill="yellow"
        />
        <Area
          type="monotone"
          dataKey={frames?.emotion_percentages[1]}
          stroke="yellow"
          fill="yellow"
        />
        <Area
          type="monotone"
          dataKey={frames?.emotion_percentages[2]}
          stroke="yellow"
          fill="yellow"
        />
      </AreaChart>
    </Flex>
  );
};

export default AreaCharts;
