import React from "react";
import styled from "styled-components";
import Text from "../../../components/text/index.tsx";
import { useSelector } from "react-redux";

const SentimentPer = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 5px;
  background: #c1cfed;
`;

const Emotions = ({ label, value, emotion }) => {
  const data = useSelector((state: any) => state?.video?.data);
  return (
    <SentimentPer>
      <Text type={"p"} className="card-heading">
        {label}
      </Text>
      <Text type={"h1"} className="card-heading medium accent">
        {value}% - {emotion}
      </Text>
    </SentimentPer>
  );
};
export default Emotions;
