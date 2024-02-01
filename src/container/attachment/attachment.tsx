// Attachment.js
import React from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import {
  StyledDraggerContainer,
  StyledDragger,
  StyledUploadText,
} from "./Styled-attachment.tsx";
import { InboxOutlined } from "@ant-design/icons";

const Attachment = () => {
  const navigate = useHistory();
  const props = {
    name: "video",
    multiple: false,
    method: "post",
    crossOrigin: "use-credentials",
    action: "http://cf6c-203-175-67-12.ngrok-free.app/analyze_video",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        localStorage.setItem("job", info.file.response.job_id);
        navigate.push("/result/video");
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <StyledDraggerContainer>
      <StyledDragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <StyledUploadText className="ant-upload-text">
          Click or drag file to this area to upload
        </StyledUploadText>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </StyledDragger>
    </StyledDraggerContainer>
  );
};

export default Attachment;
