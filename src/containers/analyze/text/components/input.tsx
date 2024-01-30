import React, { useState, ChangeEvent, useNavigate } from "react";
import {useHistory} from 'react-router-dom'
import Text from "../../../../components/text/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { analyzeTextRequest } from "../../../../redux/slice/textSlice.tsx";
import { StyledTextArea, Inputdiv, ButtonsDiv } from "./styledinput.tsx";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {Button} from "antd";
// import Button from "../../../../components/button/index.tsx";
import AnalysisResult from "../../../result/text.tsx";

const InputForm = () => {
  const [inputText, setInputText] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false); 
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.input.loading);
  const analysisResult = useSelector((state: any) => state.input.analysisResult); 
  console.log(analysisResult);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleAnalyze = () => {
    dispatch(analyzeTextRequest({ payloadData: inputText }))
  };

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
      <StyledTextArea
        rows={12}
        placeholder="Enter your text here..."
        value={inputText}
        onChange={handleInputChange}
      />
      <ButtonsDiv>
        <Upload
          customRequest={({ onSuccess }) => setTimeout(onSuccess, 0)}
          showUploadList={false}
          onChange={handleFileUpload}
        >
          <Button type={"primary"} className="btn-color">
            <UploadOutlined /> Click to Upload
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
      <Text type={"p"} className="btn-des">
        Support for a single upload. Only supports .txt or csv extensions.
      </Text>

      {analysisResult && ( 
        <AnalysisResult result={analysisResult} />
      )}
    </Inputdiv>
  );
};

export default InputForm;


