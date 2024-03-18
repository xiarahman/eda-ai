import React from "react";
import {
  StyledDraggerContainer,
  StyledDragger,
  StyledUploadText,
} from "./styledupload.tsx";
import type { UploadProps } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message } from "antd";

import { useHistory } from "react-router-dom";
import { API_ENDPOINT } from "../../../../utils/constants.ts";

const Uploader = () => {
  const { push } = useHistory();

  const props: UploadProps = {
    name: "video",
    multiple: false,
    method: "post",
    action: `${API_ENDPOINT}/analyze_video`,
    onChange(info) {
      const { status } = info.file;

      if (status === "done") {
        push(`/result/video/${info.file.response.job_id}`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <StyledDraggerContainer>
      <StyledDragger {...props} maxCount={1} listType="picture">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <StyledUploadText className="ant-upload-text">
          Click or drag file to this area to upload
        </StyledUploadText>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibited from uploading
          company data or other banned files.
        </p>
      </StyledDragger>
    </StyledDraggerContainer>
  );
};

export default Uploader;
