import React, { useState } from "react";
import {
  SocialLinks,
 ContactInput,
  StyledFooterText,
  StyledFooterTitle,
  FooterSection,
} from "./styledindex.tsx";
import { Row, Col, Button, Flex, Image, Modal , Input} from "antd";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import { StyledButton } from "../button/index.tsx";
import StyledLink from "../styledLink.ts";
import { WorkSubTitle, WorkText } from "../home/style.ts";
import modalImage from "../../assets/modalImage.png";
const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#000244",
        color: "white",
        // marginTop: "12%",
        width: "100%",
      }}
    >
      <FooterSection>
        <Row gutter={64}>
          <Col span={13}>
            <StyledFooterTitle> EmoAnalytica</StyledFooterTitle>
            <StyledFooterText>
              Dive Deep into Your Customer Interactions And Uncover Valuable
              Insights into Their Emotions and Sentiments. Empower Your Business
              To Drive Meaningful Engagement and Enhance Customer Satisfaction
            </StyledFooterText>
            <Button
              type="link"
              style={{
                marginTop: "3%",
                backgroundColor: "#C1CFED",
                color: "#141414",
              }}
            >
              Try Now !
            </Button>
          </Col>
          <Col span={4}>
            <StyledFooterTitle> Menu</StyledFooterTitle>

            <StyledFooterText>
              <Flex vertical>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink >Features</StyledLink>
                <StyledLink to="/analyze">How it Works</StyledLink>
                <StyledLink>FAQs</StyledLink>
                <StyledLink onClick={showModal}>Contact Us</StyledLink>
              </Flex>
            </StyledFooterText>
          </Col>
          <Col span={6}>
            <StyledFooterTitle>Important Links</StyledFooterTitle>
            <StyledFooterText>
              <Flex vertical>
                <StyledLink>Privacy Policy</StyledLink>
                <StyledLink>Terms and Conditions</StyledLink>
              </Flex>
            </StyledFooterText>
            <SocialLinks>
              <StyledFooterTitle>Social Links</StyledFooterTitle>
              <Flex gap={20}>
                <StyledLink>
                  {" "}
                  <Image src={facebook} preview={false} />
                </StyledLink>
                <StyledLink>
                  {" "}
                  <Image src={youtube} preview={false} />
                </StyledLink>

                <StyledLink>
                  {" "}
                  <Image src={instagram} preview={false} />
                </StyledLink>
              </Flex>
            </SocialLinks>
          </Col>
        </Row>
      </FooterSection>
      <Modal
  open={isModalVisible}
  onCancel={handleCancel}
  width={800}
  style={{ width: "100%" }}
  footer= {null}
>
  <Row style={{ marginTop: 0 }}>
    <Col
      span={14}
      style={{
        backgroundColor: "#000244",
        color: "white",
        width: "100%",
        height: "100vh",
        padding: "3%",
      
      }}
    >
      <Flex vertical style={{marginTop: "50%"}}>
      <WorkSubTitle style={{ color: "#C1CFED", fontSize: "28px" }}>
        Send Us A Message
      </WorkSubTitle>
      <WorkText style={{ color: "white" }}>
        Feel free to reach out with your enquiries we will get back to you
        as soon as we can!
      </WorkText>
      </Flex>
     
     
      <Image
        src={modalImage}
        preview={false}
       style={{height: "156px", width: "200px", marginTop: "120%"}}
      />
     
    </Col>

    <Col span={10} style={{ backgroundColor: "#C1CFED" }}>
      <Flex vertical style={{ padding: "30px" , marginTop: "30%"}} gap={'middle'}>
        <ContactInput
          placeholder="Enter Your Name"
          
        />
        <ContactInput placeholder="Your Email" />
        <ContactInput placeholder="Mobile Number"/>
        <ContactInput.TextArea placeholder="Write your message" />
        <Button type="primary" style={{ width: "100%" }}>
          Submit
        </Button>
      </Flex>
    </Col>
  </Row>
</Modal>
    </div>
  );
};
export default Footer;
