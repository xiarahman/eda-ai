import React from "react";
import { Flex } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const AreaCharts = ({ chartsData }) => {
  const formatXAxis = (tick) => {
    return tick.toFixed(2); // Format the tick value to have two decimal places
  };

  const formatTooltip = (value, name, props) => {
    if (props && props.payload) {
      return [`${props.payload.interval.toFixed(2)}: ${value.toFixed(2)}`]; // Format tooltip value and interval
    }
    return ""; // Return null if props.payload is undefined
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
          <Area type="monotone" dataKey="angry" stroke="red" fill="red" />
          <Area type="monotone" dataKey="sad" stroke="orange" fill="orange" />
          <Area type="monotone" dataKey="fear" stroke="purple" fill="purple" />
          <Area type="monotone" dataKey="neutral" stroke="gray" fill="gray" />
          <Area type="monotone" dataKey="happy" stroke="green" fill="green" />
        </AreaChart>
      </Flex>
    )
  );
};

export default AreaCharts;
