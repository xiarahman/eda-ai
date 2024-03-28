// StyledUploader.js
import styled from "styled-components";
import { Upload } from "antd";

export const { Dragger } = Upload;

export const StyledDraggerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
`;

export const StyledDragger = styled(Dragger)`
  width: 628px;
  height: 300px;
  color: white;
  //background-color: #dedede;
  & :hover {
    background-color: background: #f5f5f5 !important;
  }

  && .ant-upload {
    background-color: background: #f5f5f5;
    border: 3px dot #38393b;
    padding: 0 1rem;
  }

  && .ant-upload-list-item-name {
    background-color: #fff;
    color: #262e5b;
  }
  && .ant-upload-text {
    color: #262e5b !important;
    font-weight: 500 !important;
  }

  && .ant-upload-hint {
    color: #9fa1a6 !important;
    font-weight: 500 !important;
  }

  && .anticon {
    color: #262e5b !important;
  }

  @media (max-width: 768px) {
    width: 328px;
    height: 200px;
  }
`;

export const StyledUploadText = styled.p`
  color: white;
`;
