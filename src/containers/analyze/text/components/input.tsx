import React from "react";
import { StyledTextArea, Inputdiv, ButtonsDiv } from "./styledinput.tsx";
import Text from "../../../../components/text/index.tsx";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Button from "../../../../components/button/index.tsx";
const InputForm = () => {
  return (
    <Inputdiv>
      <StyledTextArea
        rows={12}
        placeholder="Enter your text here..."
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
      <ButtonsDiv>
        <Upload>
          <Button type={"primary"} cls="btn-color">
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>

        <Button type={"primary"} href={"/analyze"} cls="btn-width">
          Analyze
        </Button>
      </ButtonsDiv>
      <Text type={"p"} cls="btn-des">
        Support for a single upload. Only supports .txt or csv extensions.
      </Text>
    </Inputdiv>
  );
};

export default InputForm;
