import React from "react";
import { Progress, Space } from "antd";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const data = useSelector((state: any) => state?.video?.data);

  if (!data || !data.final_emotion || !data.final_emotion[0]) {
    return null;
  }

  const formattedPercentage = Math.floor(data.final_emotion[0].percentage) || 0;

  return (
    <Space wrap>
      <Progress
        type="dashboard"
        percent={formattedPercentage}
        format={() => (
          <>
            {formattedPercentage}%
            <br />
            <span className="font-size">Happy</span>
          </>
        )}
        strokeWidth={10}
        size={150}
      />
    </Space>
  );
};

export default ProgressBar;
