// import React from "react";
// import { Flex } from "antd";
// import ProgressBar from "./components/progressbar.tsx";
// import AreaCharts from "./components/areaChart.tsx";

// const LiveResult = () => {
//   return (
//     <Flex
//       gap="middle"
//       align="center"
//       justify="space-between"
//       style={{
//         height: "100vh",
//         maxWidth: "1040px",
//         margin: "0 auto",
//       }}
//     >
//       <Flex vertical gap="middle" style={{ flexGrow: "1" }}>
//         <h2 className="section-heading">Preview</h2>
//         <Flex
//           justify="space-between"
//           gap="middle"
//           vertical
//           style={{
//             backgroundColor: "#f5f5f5",
//             flexGrow: "1",
//             padding: "1.5rem",
//             borderRadius: "5px",
//             minWidth: "400px",
//           }}
//         >
//           <div style={{ flexGrow: "1", minHeight: "570px" }}>
//             Frames Captured From Live
//           </div>
//         </Flex>
//       </Flex>
//       {/* Results Block */}
//       <Flex vertical gap="middle" style={{ flexGrow: "1" }}>
//         <h2 className="section-heading">Results</h2>

//         <Flex
//           justify="space-between"
//           gap="middle"
//           vertical
//           style={{
//             backgroundColor: "#f5f5f5",
//             flexGrow: "1",
//             padding: "1.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           <Flex vertical>
//             <h3 className="card-heading">Emotions</h3>
//             <span className="card-subheading">67 Frames</span>
//           </Flex>
//           <Flex flex={1} justify="center">
//             <ProgressBar />
//           </Flex>
//           <Flex flex={1} justify="center">
//             happy angry neutral
//           </Flex>
//         </Flex>
//         {/* Area Chart */}
//         <Flex
//           vertical
//           gap="large"
//           style={{
//             backgroundColor: "#f5f5f5",
//             flexGrow: "1",
//             padding: "1.5rem",
//             borderRadius: "5px",
//           }}
//         >
//           <Flex gap="large" justify="space-between">
//             <Flex vertical>npm star
//               <h3 className="card-heading">Graph</h3>
//               <span className="card-subheading">15 mins 20 sec</span>
//             </Flex>
//             <Flex>happy angry neutral</Flex>
//           </Flex>
//           <AreaCharts />
//         </Flex>
//       </Flex>
//     </Flex>
//   );
// };

// //             <Flex
// //               style={{
// //                 backgroundColor: "#f5f5f5",
// //                 flexGrow: "1",
// //                 padding: "1.5rem",
// //                 borderRadius: "5px",
// //               }}
// //               vertical
// //             >
// //               <Flex justify="space-between">
// //                 <Flex vertical>
// //                   <h3>Sentiments</h3>
// //                   <span>67 sentances</span>
// //                 </Flex>
// //                 <RightOutlined className="font-size-icon" />
// //               </Flex>

// //               <Sentiments />
// //             </Flex>
// //           </Flex>

// //           {/* Area Chart */}
// //           <Flex
// //             vertical
// //             style={{
// //               backgroundColor: "#f5f5f5",
// //               flexGrow: "1",
// //               padding: "1.5rem",
// //               borderRadius: "5px",
// //             }}
// //           >
// //             <Flex gap="large" justify="space-between">
// //               <Flex vertical>
// //                 <h3>Graph</h3>
// //                 <span>15 mins 20 sec</span>
// //               </Flex>
// //               <Flex>happy agry neutral</Flex>
// //             </Flex>
// //             <AreaCharts />
// //           </Flex>
// //         </Flex>
// //       </Flex>
// //     </>
// //   );
// // };

// // export default LiveResult;
