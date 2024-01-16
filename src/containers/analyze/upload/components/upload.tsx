import React from "react";
import {
  StyledDraggerContainer,
  StyledDragger,
  StyledUploadText,
} from "./styledupload.tsx";
import type { UploadProps } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Uploader = () => {
  const navigate = useNavigate();

  const props: UploadProps = {
    onChange(info) {
      navigate("/result/upload");
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

export default Uploader;
