import React from "react";
import { Progress, Space } from "antd";
const ProgressBar = () => (
  <Space wrap>
    <Progress type="dashboard" percent={75} strokeWidth={10} />
  </Space>
);
export default ProgressBar;
