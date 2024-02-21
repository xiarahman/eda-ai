import React from "react";
import { Progress } from "antd";

const GlobalSentimentProgress = ({ sentimentData }) => {
  if (!sentimentData || sentimentData.length < 3) {
    return null;
  }
  
const {percentage, sentiment}= sentimentData[0];

const formattedPercentage= Math.floor(percentage) || 0;
  // const formattedPercentageForNegative = Math.floor(sentimentData[0].percentage) || 0;
  // const formattedPercentageForNeutral = Math.floor(sentimentData[1].percentage) || 0;
  // const formattedPercentageForPositive = Math.floor(sentimentData[2].percentage) || 0;

  return (
    <>
      <h3 className="card-heading">{sentiment}</h3>
      <Progress
        percent={formattedPercentage}
        status="active"
        strokeColor="#169038"
        style={{ minWidth: 300 }}
      />
      {/* <h3 className="card-heading">Neutral</h3> */}
      {/* <Progress
        percent={formattedPercentageForNeutral}
        status="active"
        strokeColor="#C1CFED"
      />
      <h3 className="card-heading">Negative</h3>
      <Progress
        percent={formattedPercentageForNegative}
        status="active"
        strokeColor="#F53C2B"
      /> */}
    </>
  );
};

export default GlobalSentimentProgress;
