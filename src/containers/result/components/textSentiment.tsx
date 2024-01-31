import React from "react";
import styled from "styled-components";
import Text from "../../../components/text/index.tsx";
import { Flex, Progress, Card } from "antd";
import thumbsup from "../../../assets/up.png";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "./helper.tsx";
const SentimentPer = styled.div`
  width: 200px;
  margin-top: -50px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c1cfed;
  backdrop-filter: blur(60px);
  border-radius: 5px;
  img {
    width: 24px;
    height: 24px;
  }
`;

const SentimentCard = () => {
  // Access sentiment data from Redux store
  const sentimentData = useSelector((state:any) => state.input.analysisResult.top_three_sentiments[0]);

  if (!sentimentData) {
    return null;
  }

  // Extract sentiment percentage and name
  const { percentage, sentiment } = sentimentData;
  const formattedPercentage = Math.floor(percentage) || 0;

  return (
    
     <Card style={{ backgroundColor: "#f5f5f5", marginTop: '10px', width:"600px", height:'250px'}}>
     <Flex vertical align="center"  >
     <Progress
        type="dashboard"
        percent={formattedPercentage}
        strokeWidth={10}
        size={150}
      />
      <SentimentPer>
      <Text type={"p"} className="card-heading medium accent">
        0%
  </Text>
      {/* <img className="thumbsup" src={thumbsup} alt="" /> */}
        <Text type={"p"} className="card-heading medium accent">
         {capitalizeFirstLetter(sentiment)} 
        </Text>
       
        <Text type={"p"} className="card-heading medium accent">
          100%
        </Text>
      </SentimentPer>
      </Flex>
     </Card>
   
  
  );
};

export default SentimentCard;




// import React from "react";
// import styled from "styled-components";
// import Text from "../../../components/text/index.tsx";
// import { Flex, Progress } from "antd";
// import thumbsup from "../../../assets/up.png";
// import { useSelector } from "react-redux";
 
// const SentimentPer = styled.div`
//   min-width: 100%;
//   margin-top: -50px;
//   padding: 0.5rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #c1cfed;
//   backdrop-filter: blur(60px);
//   border-radius: 5px;
//   img {
//     width: 24px;
//     height: 24px;
//   }
// `;
 
// const Sentiments = () => {
//   const data = useSelector((state: any) => state?.video?.data);
 
//   if (!data || !data.final_sentiment || !data.final_sentiment[0]) {
//     return null;
//   }
 
//   const formattedPercentage =
//     Math.floor(data.final_sentiment[0].percentage) || 0;
//   return (
//     <Flex vertical align="center">
//       <Progress
//         type="dashboard"
//         percent={formattedPercentage}
//         strokeWidth={10}
//         size={150}
//       />
//       <SentimentPer>
//         <Text type={"p"} className="card-heading medium accent">
//           0%
//         </Text>
//         <img className="thumbsup" src={thumbsup} alt="" />
//         <Text type={"p"} className="card-heading medium accent">
//           100%
//         </Text>
//       </SentimentPer>
//     </Flex>
//   );
// };
// export default Sentiments;
 





// import React from "react";
// import styled from "styled-components";
// import Text from "../../../components/text/index.tsx";
// import { Flex, Progress } from "antd";
// import thumbsup from "../../../assets/up.png";

// const SentimentPer = styled.div`
//   min-width: 100%;
//   margin-top: -50px;
//   padding: 0.5rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #c1cfed;
//   backdrop-filter: blur(60px);
//   border-radius: 5px;
//   img {
//     width: 24px;
//     height: 24px;
//   }
// `;

// const Sentiments = () => (
//   <Flex vertical align="center">
//     <Progress type="dashboard" percent={75} strokeWidth={10} size={150} />
//     <SentimentPer>
//       <Text type={"p"} className="card-heading medium accent">
//         0%
//       </Text>
//       <img className="thumbsup" src={thumbsup} alt="" />
//       <Text type={"p"} className="card-heading medium accent">
//         100%
//       </Text>
//     </SentimentPer>
//   </Flex>
// );
// export default Sentiments;
