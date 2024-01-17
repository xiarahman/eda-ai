import { Flex } from "antd";
import React from "react";
import SentenceCard from "./components/sentenceCard.tsx";
import { ArrowLeftOutlined } from "@ant-design/icons";

const SentimentDetails = () => {
  return (
    <Flex
      vertical
      align="center"
      gap="large"
      style={{
        height: "100vh",
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "8rem 0",
      }}
    >
      <Flex justify="space-between" style={{ width: "100%" }}>
        <h2 className="section-heading">Sentance</h2>
        <button className="back-btn">
          <ArrowLeftOutlined />
          Back
        </button>
      </Flex>
      <SentenceCard />
    </Flex>
  );
};

export default SentimentDetails;
