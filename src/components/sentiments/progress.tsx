import React from "react";
import { styled } from "styled-components";
import { Progress } from "antd";

export const CardHeading = styled.h4`
  font-family: "Poppins";
  font-size: 16px !important;
  font-weight: 500 !important;
  color: #262e5b;
`;
const GlobalSentimentProgress = ({ sentimentData }) => {
  if (!sentimentData || sentimentData.length < 1) {
    return null;
  }
  return (
    <>
      {sentimentData.map((sentimentItem, index) => (
        <div key={index}>
          <CardHeading>{sentimentItem.sentiment}</CardHeading>
          <Progress
            percent={Math.floor(sentimentItem.percentage) || 0}
            status="active"
            strokeColor={
              sentimentItem.sentiment === "positive"
                ? "#169038"
                : sentimentItem.sentiment === "neutral"
                ? "#C1CFED"
                : "#F53C2B"
            }
            style={{ minWidth: 300 }}
          />
        </div>
      ))}
    </>
  );
};

export default GlobalSentimentProgress;
