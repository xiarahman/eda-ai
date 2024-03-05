import React from "react";
import { Progress } from "antd";
const GlobalSentimentProgress = ({ sentimentData }) => {
  if (!sentimentData || sentimentData.length < 1) {
    return null;
  }
  return (
    <>
      {sentimentData.map((sentimentItem, index) => (
        <div key={index}>
          <h3 className="card-heading">{sentimentItem.sentiment}</h3>
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
