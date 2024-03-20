import { Flex } from "antd";
import React from "react";
import SentenceCard from "./components/sentenceCard.tsx";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import {
  Container,
  MainFlex,
  SentenceCardDiv,
} from "./styledSentimentDetails.tsx";

const SentimentDetails = () => {
  const { push } = useHistory();
  const { opt, job_id } = useParams<any>();
  return (
    <Container>
      <MainFlex vertical align="center" gap="large">
        <Flex justify="space-between" style={{ width: "100%" }}>
          <h2 className="section-heading">Sentence</h2>
          <button
            className="back-btn"
            onClick={() => push(`/result/${opt}/${job_id}`)}
          >
            <ArrowLeftOutlined />
            Back
          </button>
        </Flex>
        <SentenceCardDiv>
          <SentenceCard />
        </SentenceCardDiv>
      </MainFlex>
    </Container>
  );
};

export default SentimentDetails;
