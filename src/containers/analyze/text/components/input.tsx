import React, { useState, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Text from "../../../../components/text/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { StyledTextArea, Inputdiv, ButtonsDiv } from "./styledinput.tsx";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { selectorAnalyzeText } from "../../../../redux/selectors/index.ts";
import { analyzeTextRequest } from "../../../../redux/Slice/index.ts";
const InputForm = () => {
  // State variables
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useDispatch();
  const { loading, analysisResult } = useSelector(selectorAnalyzeText);
  const { push } = useHistory();
  // Handler for input change event
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value); // Update input text state
  };
  // Handler for dispatching action when user click on submit button of input area
  const handleAnalyze = () => {
    dispatch(analyzeTextRequest({ payloadData: inputText }));
  };
  // Effect to redirect to result page when api response is available through analysis result
  useEffect(() => {
    if (Object.keys(analysisResult)?.length) {
      push("/text-result");
    } else {
      push("/analyze");
    }
  }, [analysisResult, loading]);
  // Handler for file upload button
  const handleFileUpload = (info: any) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result as string;
        setInputText(fileContent);
      };
      reader.readAsText(info.file.originFileObj);
    }
  };
  return (
    <Inputdiv>
      {/* Input text area */}
      <StyledTextArea
        rows={12}
        placeholder="Enter your text here..."
        value={inputText}
        onChange={handleInputChange}
      />
      {/* Upload and submit buttons */}
      <ButtonsDiv>
        <Upload
          customRequest={({ onSuccess }) => setTimeout(onSuccess, 0)} // Custom request function to prevent default behavior
          showUploadList={true}
          onChange={handleFileUpload}
        >
          <Button type={"primary"} className="btn-color">
            <UploadOutlined /> Upload File
          </Button>
        </Upload>
        <Button
          type={"primary"}
          onClick={handleAnalyze}
          disabled={loading}
          className="btn-width"
        >
          {loading ? "Analyzing..." : "Submit"}
        </Button>
      </ButtonsDiv>
      {/* Description text */}
      <Text type={"p"} className="btn-des">
        Support for a single upload. Only supports <br />
        .txt or csv extensions.
      </Text>
    </Inputdiv>
  );
};
export default InputForm;
