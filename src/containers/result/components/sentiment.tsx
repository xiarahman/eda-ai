import React from "react";
import styled from "styled-components";
import Text from "../../../components/text/index.tsx";
import { Flex, Progress } from "antd";
import thumbsup from "../../../assets/up.png";

const SentimentPer = styled.div`
  width: 100%;
  margin-top: -50px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c1cfed;
  backdrop-filter: blur(60px);
  border-radius: 5px;
  img {
    width: 30px;
    height: 30px;
  }
`;

const Sentiments = () => (
  <Flex vertical align="center">
    <Progress type="dashboard" percent={75} strokeWidth={10} size={150} />
    <SentimentPer>
      <Text type={"p"} cls="">
        0%
      </Text>
      <img className="thumbsup" src={thumbsup} alt="" />
      <Text type={"p"} cls="">
        100%
      </Text>
    </SentimentPer>
  </Flex>
);
export default Sentiments;
