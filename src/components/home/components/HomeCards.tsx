import React from "react";
import { Row, Col, Image } from "antd";
import pattern from "../../../assets/pattern.png";
import video from "../../../assets/video.png";
import live from "../../../assets/live.png";
import text from "../../../assets/text.png";
import { StyledCard } from "../style.ts";
const { Meta } = StyledCard;
const HomeCards: React.FC = () => {
  return (
    <div style={{ backgroundColor: "white", padding: "20px 2px" }}>
      <Row gutter={8}>
        <Col span={3}>
          <Image src={pattern} preview={false} style={{ marginTop: 60 }} />
        </Col>
        <Col span={6}>
          <StyledCard>
            <Image src={video} preview={false} style={{ marginLeft: "58%" }} />
            <Meta
              title="Analyze Recorded Videos"
              description="Upload any video to analyse emotions of your customers"
            ></Meta>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Image src={live} preview={false} style={{ marginLeft: "58%" }} />
            <Meta
              title="Analyze Live Streams"
              description="Upload any video to analyse emotions of your customers"
            ></Meta>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Image src={text} preview={false} style={{ marginLeft: "58%" }} />
            <Meta
              title="Analyze Text Files"
              description="Upload any text to analyse emotions of your customers"
            ></Meta>
          </StyledCard>
        </Col>
        <Col span={3}>
          <Image src={pattern} preview={false} style={{ marginTop: 60 }} />
        </Col>
      </Row>
    </div>
  );
};
export default HomeCards;
