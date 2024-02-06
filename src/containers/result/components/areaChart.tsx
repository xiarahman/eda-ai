// import React from "react";
// import { Flex } from "antd";
// import { useSelector } from "react-redux";
// import {
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   AreaChart,
//   Area,
// } from "recharts";
// const YAxisData = [
//   {
//     per: "0%",
//   },
//   {
//     per: "25%",
//   },
//   {
//     per: "50%",
//   },
//   {
//     per: "100%",
//   },
// ];
// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// let x = [
//   {
//     angry: 8.333333333333332,
//     fear: 0.0,
//     interval: 0.0,
//     sad: 0.0,
//   },
//   {
//     angry: 16.666666666666664,
//     fear: 0.0,
//     interval: 4.170833333333333,
//     sad: 0.0,
//   },
//   {
//     angry: 25.0,
//     fear: 0.0,
//     interval: 8.341666666666667,
//     sad: 0.0,
//   },
//   {
//     angry: 33.33333333333333,
//     fear: 0.0,
//     interval: 12.5125,
//     sad: 0.0,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 0.0,
//     interval: 16.683333333333334,
//     sad: 0.0,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 8.333333333333332,
//     interval: 20.854166666666664,
//     sad: 0.0,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 8.333333333333332,
//     interval: 25.025,
//     sad: 8.333333333333332,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 8.333333333333332,
//     interval: 29.195833333333333,
//     neutral: 8.333333333333332,
//     sad: 8.333333333333332,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 8.333333333333332,
//     interval: 33.36666666666667,
//     neutral: 8.333333333333332,
//     sad: 16.666666666666664,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 8.333333333333332,
//     interval: 37.537499999999994,
//     neutral: 8.333333333333332,
//     sad: 25.0,
//   },
//   {
//     angry: 41.66666666666667,
//     fear: 8.333333333333332,
//     interval: 41.70833333333333,
//     neutral: 8.333333333333332,
//     sad: 33.33333333333333,
//   },
//   {
//     angry: 50.0,
//     fear: 8.333333333333332,
//     interval: 45.87916666666666,
//     neutral: 8.333333333333332,
//     sad: 33.33333333333333,
//   },
// ];

// const AreaCharts = () => {
//   const Adata = useSelector((state: any) => state?.video?.data);
//   return (
//     <Flex>
//       <AreaChart
//         width={575}
//         height={200}
//         data={x}
//         syncId="anyId"
//         margin={{
//           left: -10,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="angry" stroke="yellow" fill="yellow" />
//         <Area type="monotone" dataKey="sad" stroke="red" fill="red" />
//         <Area type="monotone" dataKey="fear" stroke="gray" fill="gray" />
//         <Area type="monotone" dataKey="neutral" stroke="gray" fill="gray" />
//       </AreaChart>
//     </Flex>
//   );
// };

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
import { reducer } from "../../../redux/slice/videoSlice.tsx";
import saga from "../../../redux/saga/videoSaga.tsx";
import { getVideos } from "../../../redux/selectors/index.ts";
// const CustomTooltip = ({ active, payload, label }) => {
//   console.log(payload);

//   if (active) {
//     return (
//       <div className="custom-tooltip" style={{ background: "white" }}>
//         <div className="label">{`Interval: ${label}`}</div>
//         {payload.map((item) => {
//           console.log(
//             "%cAreaChart.tsx line:201 item",
//             "color: #007acc;",
//             item?.payload
//           );
//           if (item?.payload?.angry) {
//             <div>Angry: {item?.payload?.angry}</div>;
//           }
//           if (item?.interval) {
//             <div>Interval: {item?.interval}</div>;
//           }
//           if (item?.neutral) {
//             <div>Neutral: {item?.neutral}</div>;
//           }
//           if (item?.sad) {
//             <div>Sad: {item?.sad}</div>;
//           }
//           return "";
//         })}
//       </div>
//     );
//   }
// };
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
    }
  };
  useEffect(() => {
    dispatch(chartsDataFetchRequest({ job_id }));
  }, [job_id]);

  return (
    chartsData?.chart_data && (
      <Flex>
        <AreaChart
          width={575}
          height={200}
          data={chartsData?.chart_data}
          syncId="anyId"
          margin={{
            left: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="interval" />
          <YAxis />
          <Tooltip />
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
