import React from "react";
import { Typography, Collapse, Flex, Row, Col, Button, Image } from "antd";
import process from "../../../assets/process.png";
import report from "../../../assets/reports.png";
import option from "../../../assets/option.png";
import { StyledButton, WorkSubTitle, WorkText, WorkTitle } from "../style.ts";
const { Title} = Typography;
const Work: React.FC = () => {
  return (
    <Flex
      vertical
      align="center"
      gap="middle"
      style={{ backgroundColor: "#F5F5F5", padding: "30px" }}
    >
      <WorkTitle>How it Works</WorkTitle>
      <Row gutter={8}>
        <Col span={14}>
          <Title style={{ color: "#ADADAD", fontSize: "38px" }}>01</Title>
          <Flex vertical>
            <WorkSubTitle>
              Choose Your <br /> Option
            </WorkSubTitle>
            <WorkText>
              EmoAnalytica gives you <b>three</b> options to choose from.
              <br /> Select your desired option and start.
            </WorkText>
          </Flex>
          <StyledButton>Try Now !</StyledButton>
        </Col>
        <Col span={10}>
          <Image src={option} preview={false} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Image src={process} preview={false} />
        </Col>
        <Col span={12}>
          <Title style={{ color: "#ADADAD", fontSize: "38px" }}>02</Title>
          <Flex vertical>
            <WorkSubTitle>Process</WorkSubTitle>
            <WorkText>
              Our <b>AI </b>processes the video Our <b> ML model</b> recognizes
              faces <br /> and detects emotions
            </WorkText>
          </Flex>
          <StyledButton>Try Now !</StyledButton>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={14}>
          <Title style={{ color: "#ADADAD", fontSize: "38px" }}>03</Title>
          <Flex vertical>
            <WorkSubTitle>Reports</WorkSubTitle>
            <WorkText>
              Our <b>AI</b> processes the video Our <b>ML model</b> recognizes
              faces <br /> and detects emotions
            </WorkText>
          </Flex>
          <StyledButton>Try Now !</StyledButton>
        </Col>
        <Col span={10}>
          <Image src={report} preview={false} />
        </Col>
      </Row>
    </Flex>
  );
};
export default Work;
