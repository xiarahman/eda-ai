import React, { useState, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Text from "../../../../components/text/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { StyledTextArea, Inputdiv, ButtonsDiv } from "./styledinput.tsx";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { selectorAnalyzeText } from "../../../../redux/Selectors/index.ts";
import { analyzeTextRequest } from "../../../../redux/Slice/index.ts";

const InputForm = () => {
  // State variables
  const [inputText, setInputText] = useState<string>("");
  const [fileUploaded, setFileUploaded] = useState<any>(null); // Track uploaded file information
  const dispatch = useDispatch();
  const { loading, analysisResult } = useSelector(selectorAnalyzeText);
  const { push } = useHistory();
 

  // Handler for input change event
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setInputText(newText); // Update input text state

    // Check if input text is empty, then remove the file
    if (newText.trim() === "") {
      setFileUploaded(null);
    }
  };

  // Handler for dispatching action when user clicks on submit button of input area
  const handleAnalyze = () => {
    if (inputText.trim() === "") {
      message.error("Please enter text.");
      return;
    }
    
    // Check for special characters and symbols in the input text
    const regex = /[!@#$%^&*()_+\=\[\]{};:"\\|<>\/]+/;
    if (regex.test(inputText)) {
      message.error("Please remove special characters and symbols from the input.");
      return;
    }

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
        setFileUploaded(info.file); // Set uploaded file information
      };
      reader.readAsText(info.file.originFileObj);
    } else if (info.file.status === "removed") {
      setInputText(""); // Clear input text when file is removed
      setFileUploaded(null); // Set uploaded file information to null when file is removed
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
  maxCount={1}
  accept=".txt"
  customRequest={({ onSuccess }) => setTimeout(onSuccess, 0)} // Custom request function to prevent default behavior
  showUploadList={{
    showDownloadIcon: false,
    showRemoveIcon: true,
    showPreviewIcon: false, // hide the preview icon
  }}
  onChange={handleFileUpload}
  onRemove={() => setFileUploaded(null)} // Set uploaded file information to null when file is removed
>
<Button type={"primary"} className="btn-color">
      <UploadOutlined /> Upload File
    </Button>
    {fileUploaded &&
    <span> ({(fileUploaded.size / 1024).toFixed(2)} KB)</span>
  }
 
</Upload>
        <Button
          type={"primary"}
          onClick={handleAnalyze}
          disabled={loading || (!fileUploaded && inputText.trim() === "")}
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
