import React from "react";
import styled from "styled-components";
import Text from "../../../components/text/index.tsx";
import { Flex, Progress } from "antd";
import thumbsup from "../../../assets/up.png";
import { useSelector } from "react-redux";

const SentimentPer = styled.div`
  min-width: 100%;
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

const Sentiments = () => {
  const data = useSelector((state: any) => state?.video?.data);

  if (!data || !data.final_sentiment || !data.final_sentiment[0]) {
    return null;
  }

  const formattedPercentage =
    Math.floor(data.final_sentiment[0].percentage) || 0;
  return (
    <Flex vertical align="center">
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
        <img className="thumbsup" src={thumbsup} alt="" />
        <Text type={"p"} className="card-heading medium accent">
          100%
        </Text>
      </SentimentPer>
    </Flex>
  );
};
export default Sentiments;
