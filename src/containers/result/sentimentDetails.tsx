import { Flex } from "antd";
import React from "react";
import SentenceCard from "./components/sentenceCard.tsx";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";

const SentimentDetails = () => {
  const { push } = useHistory();
  const { opt, job_id } = useParams<any>();
  return (
    <div
      style={{
        height: "100vh",
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "8rem 0",
        overflow: "hidden", // Hide the scroll bar
      }}
    >
      <Flex
        vertical
        align="center"
        gap="large"
        style={{
          height: "100%",
          overflowY: "auto", // Allow scrolling in the vertical direction
        }}
      >
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
        <div
          style={{
            overflowY: "auto", // Allow scrolling in the vertical direction
          }}
        >
          <SentenceCard />
        </div>
      </Flex>
    </div>
  );
};

export default SentimentDetails;
