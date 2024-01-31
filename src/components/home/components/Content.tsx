import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledVideoContent,
  StyledSpace,
  StyledAnalyzeButton,
  StyledContentImage,
  StyledLiveContent,
  StyledTitle,
  StyledText,
  StyledInputContent,
} from "../style.ts";
import { Row, Col, Image } from "antd";
import VideoImage from "../../../assets/VideoImage.png";
import TextImage from "../../../assets/TextImage.png";
import LiveImage from "../../../assets/LiveImage.png";
const Content: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Analyze Uploaded Videos */}
      <StyledVideoContent>
        <Row>
          <Col span={18}>
            <StyledSpace direction="vertical" size={3}>
              <StyledTitle>
                Analyze <br />
                Uploaded Videos
              </StyledTitle>
              <StyledText>
                Upload any video and let our advanced AI algorithms unveil the
                emotions <br />
                within moments. Gain profound insights into emotional nuances
                for personal <br />
                and professional applications.
              </StyledText>
              <StyledAnalyzeButton
                shape="round"
                onClick={() => navigate("/analyze")}
              >
                Analyze
              </StyledAnalyzeButton>
            </StyledSpace>
          </Col>
          <Col span={6}>
            <StyledContentImage src={VideoImage} />
          </Col>
        </Row>
      </StyledVideoContent>
       {/* Analyze Input Text */}
      <StyledInputContent>
        <Row>
          <Col span={18}>
            <StyledSpace direction="vertical" size={3}>
              <StyledTitle >
                Analyze <br />
                Input Text
              </StyledTitle>
              <StyledText>
                Transform written words into emotional insights. Enhance
                <br /> communication strategies, understand sentiment, and
                optimize <br />
                interactions.
              </StyledText>
              <StyledAnalyzeButton
                shape="round"
                onClick={() => navigate("/text")}
              >
                Analyze
              </StyledAnalyzeButton>
            </StyledSpace>
          </Col>
          <Col span={6}>
            <StyledContentImage src={TextImage} />
          </Col>
        </Row>
      </StyledInputContent>
       {/* Analyze Live Stream */}
      <StyledLiveContent>
        <Row>
          <Col span={18}>
            <StyledSpace direction="vertical" size={3}>
              <StyledTitle>
                Analyze <br />
                Live Streams
              </StyledTitle>
              <StyledText>
                Upload any video and let our advanced AI algorithms unveil the
                emotions <br />
                within moments. Gain profound insights into emotional nuances
                for personal <br />
                and professional applications.
              </StyledText>
              <StyledAnalyzeButton
                shape="round"
                onClick={() => navigate("/analyze")}
              >
                Analyze
              </StyledAnalyzeButton>
            </StyledSpace>
          </Col>
          <Col span={6}>
            <StyledContentImage src={LiveImage} />
          </Col>
        </Row>
      </StyledLiveContent>
    </>
  );
};
export default Content;
