import React from "react";
import quoteComma from "../../../assets/Vector.png"
import {
  Content,
  StyledSpace,
  StyledText,
} from "../style.ts";
import { Row, Col, Image } from "antd";
const CardsContent: React.FC = () => {
  return (
      <Content>
      {/* Description of Product */}
        <Row>
          <Col span={22}>
            <StyledSpace>
              <StyledText style={{fontFamily:"Poppins", fontWeight: "semi-bold"}}>
                Dive Deep Into Your Customer Interactions And Uncover <u><i>Valuable Insights </i></u>
                Into Their <u> <i>Emotions</i></u>  And Sentiments. Empower Your
                Business 
                To Drive Meaningful Engagement And Enhance <u><i> Customer Satisfaction.</i> </u>
              </StyledText>
            </StyledSpace>
          </Col>
          <Col span={2}>
            <Image src={quoteComma} style={{marginTop: "60%"}}/>
          </Col>
        </Row>
      </Content>
  );
};
export default CardsContent;
