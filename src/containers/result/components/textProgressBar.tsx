import React from "react";
import { Progress } from "antd";
import { useSelector } from "react-redux";
interface CustomProgressProps {
  value: number;
  color: string;
  label: string;
}

const ProgressBar: React.FC<CustomProgressProps> = ({ value, color, label }) => {
 
  
  return (
    <Progress
      type="dashboard"
      percent={value}
      strokeWidth={10}
      width={150}
      strokeColor={color}
      format={() => (
        <div
          style={{
            textAlign: "center",
            padding: "15px",
            color: value === 100 ? "#000000" : "inherit",
          }}
        >
          <div>{value}%</div>
          <div style={{ marginTop: "10px" }}>{label}</div>
        </div>
      )}
    />
  );
};

export default ProgressBar;

// import React from "react";
// import { Progress, Space } from "antd";
// const ProgressBar = () => (
//   <Space wrap>
//     <Progress type="dashboard" percent={75} strokeWidth={10} size={150} />
//   </Space>
// );
// export default ProgressBar;
