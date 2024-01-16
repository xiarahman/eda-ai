import React from "react";
import styled from "styled-components";
import Text from "../../../components/text/index.tsx";

const SentimentPer = styled.div`
  width: 200px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 5px;
  background: #c1cfed;
`;

const Emotions = () => (
  <SentimentPer>
    <Text type={"p"} cls="per-size">
      Facial
    </Text>
    <Text type={"h1"} cls="per-size">
      30% - Happy
    </Text>
  </SentimentPer>
);
export default Emotions;
