import React from "react";
import quoteComma from "../../../assets/Vector.png";
import { Content, StyledSpace, StyledText } from "../style.ts";
import { Row, Col, Image } from "antd";

const CardsContent: React.FC = () => {
  return (
    <Content id="content">
      {/* Description of Product */}
      <Row>
        <Col xs={22} lg={22}>
          <StyledSpace>
            <StyledText>
              Dive Deep Into Your Customer Interactions And Uncover
              <u>
                <i>Valuable Insights </i>
              </u> 
              Into Their 
              <u>
                <i>Emotions </i>
              </u>
              And Sentiments. Empower Your Business To Drive Meaningful
              Engagement And Enhance
              <u>
                <i>Customer Satisfaction.</i>
              </u>
            </StyledText>
          </StyledSpace>
        </Col>
        <Col xs={2} lg={2}>
          <Image src={quoteComma} preview={false} style={{   marginTop: "2%" }} />
        </Col>
      </Row>
    </Content>
  );
};

export default CardsContent;
