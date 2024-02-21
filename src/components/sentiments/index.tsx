import React from "react";
import { Progress } from "antd";
import { useSelector } from "react-redux";

const UploadSentiment = () => {
  const data = useSelector((state: any) => state?.video?.data);

  if (!data || !data.final_sentiment) {
    return null;
  }

  // Sort the final_sentiment array based on percentage in descending order
  const sortedSentiments = [...data.final_sentiment].sort(
    (a, b) => b.percentage - a.percentage
  );
  return (
    <>
      {sortedSentiments.map((sentiment) => (
        <div key={sentiment.sentiment}>
          <h3 className="card-heading">{sentiment.sentiment}</h3>
          <Progress
            percent={Math.floor(sentiment.percentage)}
            status="active"
            strokeColor={getStrokeColor(sentiment.sentiment)}
            style={{ minWidth: 300 }}
          />
        </div>
      ))}
    </>
  );
};

// Function to determine stroke color based on sentiment
const getStrokeColor = (sentiment) => {
  console.log("Sentiment:", sentiment);
  switch (sentiment) {
    case "positive":
      return "";
    case "neutral":
      return "#C1CFED";
    case "negative":
      return "#F53C2B";
    default:
      return "";
  }
};

export default UploadSentiment;
