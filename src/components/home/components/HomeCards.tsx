import React from "react";
import { Row, Col, Image } from "antd";
import pattern from "../../../assets/pattern.png";
import video from "../../../assets/video.png";
import live from "../../../assets/live.png";
import text from "../../../assets/text.png";
import { CardsContainer, StyledCard } from "../style.ts";
const { Meta } = StyledCard;

const HomeCards: React.FC = () => {
 
  return (
    <CardsContainer id= "features">
      <Row gutter={16}>
        <Col xs={20} sm={20} md={3} lg={3} xxl={3}>
          <Image src={pattern} preview={false} />
        </Col>
        
        <Col xs={20} sm={20} md={6} lg={6} xxl={6}>
          <StyledCard>
            <Image src={video} preview={false} />
            <Meta
              title="Analyze Recorded Videos"
              description="Upload any video to analyse emotions of your customers"
            ></Meta>
          </StyledCard>
        </Col>
        <Col xs={20} sm={20} md={6} lg={6} xxl={6}>
          <StyledCard>
            <Image src={live} preview={false} />
            <Meta
              title="Analyze Live Streams"
              description="Upload any video to analyse emotions of your customers"
            ></Meta>
          </StyledCard>
        </Col>
        <Col xs={20} sm={20} md={6} lg={6} xxl={6}>
          <StyledCard>
            <Image src={text} preview={false} />
            <Meta
              title="Analyze Text Files"
              description="Upload any text to analyse emotions of your customers"
            ></Meta>
          </StyledCard>
        </Col>
        <Col xs={20} sm={20} md={3} lg={3} xxl={3}>
          <Image src={pattern} preview={false} />
        </Col>
      </Row>
    </CardsContainer>
  );
};
export default HomeCards;
