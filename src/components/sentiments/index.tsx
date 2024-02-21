import React from "react";
import { Progress } from "antd";
import { useSelector } from "react-redux";
const UploadSentiment = () => {
  const data = useSelector((state: any) => state?.video?.data);

  if (!data || !data.final_sentiment || data.final_sentiment.length < 3) {
    return null;
  }

  const formattedPercentageForNegative =
    Math.floor(data.final_sentiment[0].percentage) || 0;
  const formattedPercentageForNeutral =
    Math.floor(data.final_sentiment[1].percentage) || 0;
  const formattedPercentageForPositive =
    Math.floor(data.final_sentiment[2].percentage) || 0;

  return (
    <>
      <h3 className="card-heading">Positive</h3>
      <Progress
        percent={formattedPercentageForPositive}
        status="active"
        strokeColor=""
        style={{ minWidth: 300 }}
      />
      <h3 className="card-heading">Neutral</h3>
      <Progress
        percent={formattedPercentageForNeutral}
        status="active"
        strokeColor="#C1CFED"
      />
      <h3 className="card-heading">Negative</h3>
      <Progress
        percent={formattedPercentageForNegative}
        status="active"
        strokeColor="#F53C2B"
      />
    </>
  );
};

export default UploadSentiment;
