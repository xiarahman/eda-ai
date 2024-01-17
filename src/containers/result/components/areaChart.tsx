import { Flex } from "antd";
import React, { PureComponent } from "react";
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

export default class AreaCharts extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/synchronized-line-charts-zc3nl";

  render() {
    return (
      <Flex>
        <AreaChart
          width={575}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            left: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="yellow" fill="yellow" />
          <Area type="monotone" dataKey="uv" stroke="red" fill="red" />
          <Area type="monotone" dataKey="amt" stroke="gray" fill="gray" />
        </AreaChart>
      </Flex>
    );
  }
}
