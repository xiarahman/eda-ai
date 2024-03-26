import React, { useState } from "react";
import {
  SocialLinks,
  ContactInput,
  StyledFooterText,
  StyledFooterTitle,
  ContactButton,
  FooterContainer,
  ModalTitle,
} from "./styledindex.tsx";
import { Row, Col, Button, Flex, Image, Modal, Input } from "antd";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import { StyledLink, StyledScrollLink } from "../styledLink.ts";
import { WorkText } from "../home/style.ts";
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
    <FooterContainer id="footer">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={13} lg={13}>
          <StyledFooterTitle>EmoAnalytica</StyledFooterTitle>
          <StyledFooterText>
            Dive Deep into Your Customer Interactions And Uncover Valuable
            Insights into Their Emotions and Sentiments. Empower Your Business
            To Drive Meaningful Engagement and Enhance Customer Satisfaction
          </StyledFooterText>

          <Button
            type="link"
            href={"/analyze"}
            style={{
              marginTop: "3%",
              backgroundColor: "#C1CFED",
              color: "#141414",
            }}
          >
            Try Now !
          </Button>
        </Col>
        <Col xs={24} sm={12} md={4} lg={4}>
          <StyledFooterTitle>Menu</StyledFooterTitle>

          <StyledFooterText>
            <Flex vertical>
              <StyledScrollLink to="home">Home</StyledScrollLink>
              <StyledScrollLink to="features" smooth duration={500}>
                Features
              </StyledScrollLink>
              <StyledScrollLink to="work" smooth duration={500}>
                How it Works
              </StyledScrollLink>
              <StyledScrollLink to="faq" smooth duration={500}>
                FAQs
              </StyledScrollLink>

<ContactButton onClick={showModal}>Contact Us</ContactButton>

              
            </Flex>
          </StyledFooterText>
        </Col>
        <Col xs={24} sm={12} md={7} lg={7}>
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
      <Modal
      
              open={isModalVisible}
              onCancel={handleCancel}
              width={800}
              style={{height: "500px"}}
              footer={null}
              centered={true}
            >
              <Row>
                <Col
                  span={14}
                  style={{
                    backgroundColor: "#000244",
                    color: "white",
                    padding: "3%",
                  }}
                >
                  <Flex vertical style={{ marginTop: "30%" }}>
                    <ModalTitle>
                      Send Us A Message
                    </ModalTitle>
                    <WorkText style={{ color: "white" }}>
                      Feel free to reach out with your enquiries we will get back to
                      you as soon as we can!
                    </WorkText>
                  </Flex>
      
                  <Image
                    src={modalImage}
                    preview={false}
                    style={{ height: "156px", width: "200px", marginTop: "80%" }}
                  />
                </Col>
      
                <Col span={10} style={{ backgroundColor: "#C1CFED" }}>
                  <Flex
                    vertical
                    style={{ padding: "30px", marginTop: "30%" }}
                    gap={"middle"}
                  >
                    <ContactInput placeholder="Enter Your Name" />
                    <ContactInput placeholder="Your Email" />
                    <ContactInput placeholder="Mobile Number" />
                    <ContactInput.TextArea placeholder="Write your message" rows={6} />
                    <Button type="primary">
                      Submit
                    </Button>
                  </Flex>
                </Col>
              </Row>
            </Modal>
    </FooterContainer>
  );
};

export default Footer;

// import React, { useState } from "react";
// import {
//   SocialLinks,
//   ContactInput,
//   StyledFooterText,
//   StyledFooterTitle,
//   ContactButton,
//   FooterContainer,
//   ModalTitle,
// } from "./styledindex.tsx";
// import { Row, Col, Button, Flex, Image, Modal, Input } from "antd";
// import facebook from "../../assets/facebook.png";
// import youtube from "../../assets/youtube.png";
// import instagram from "../../assets/instagram.png";
// import {StyledLink, StyledScrollLink} from "../styledLink.ts";
// import {  WorkText} from "../home/style.ts";
// import modalImage from "../../assets/modalImage.png";
// const Footer = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };
//   return (
//     <FooterContainer id="footer">
//         <Row gutter={64}>
//           <Col span={13}>
//             <StyledFooterTitle> EmoAnalytica</StyledFooterTitle>
//             <StyledFooterText>
//               Dive Deep into Your Customer Interactions And Uncover Valuable
//               Insights into Their Emotions and Sentiments. Empower Your Business
//               To Drive Meaningful Engagement and Enhance Customer Satisfaction
//             </StyledFooterText>
         
//             <Button
//               type="link"
//               href={"/analyze"}
//               style={{
//                 marginTop: "3%",
//                 backgroundColor: "#C1CFED",
//                 color: "#141414",
//               }}
//             >
//               Try Now !
//             </Button>
//           </Col>
//           <Col span={4}>
//             <StyledFooterTitle> Menu</StyledFooterTitle>

//             <StyledFooterText>
//               <Flex vertical>
//               <StyledLink to="/">Home</StyledLink>
//           <StyledScrollLink to="features" smooth duration={500}>
//             Features
//           </StyledScrollLink>
//           <StyledScrollLink to="work" smooth duration={500}>
//             How it Works
//           </StyledScrollLink>
//           <StyledScrollLink to="faq" smooth duration={500}>
//             FAQs
//           </StyledScrollLink>
         
//                 {/* <StyledLink onClick={showModal}>Contact Us</StyledLink> */}
//                 <ContactButton
//                   onClick={showModal}
//                 >
//                   Contact Us
//                 </ContactButton>
//               </Flex>
//             </StyledFooterText>
//           </Col>
//           <Col span={6}>
//             <StyledFooterTitle>Important Links</StyledFooterTitle>
//             <StyledFooterText>
//               <Flex vertical>
//                 <StyledLink>Privacy Policy</StyledLink>
//                 <StyledLink>Terms and Conditions</StyledLink>
//               </Flex>
//             </StyledFooterText>
//             <SocialLinks>
//               <StyledFooterTitle>Social Links</StyledFooterTitle>
//               <Flex gap={20}>
//                 <StyledLink>
//                   {" "}
//                   <Image src={facebook} preview={false} />
//                 </StyledLink>
//                 <StyledLink>
//                   {" "}
//                   <Image src={youtube} preview={false} />
//                 </StyledLink>

//                 <StyledLink>
//                   {" "}
//                   <Image src={instagram} preview={false} />
//                 </StyledLink>
//               </Flex>
//             </SocialLinks>
//           </Col>
//         </Row>
//       <Modal
      
//         open={isModalVisible}
//         onCancel={handleCancel}
//         width={800}
//         style={{height: "500px"}}
//         footer={null}
//         centered={true}
//       >
//         <Row>
//           <Col
//             span={14}
//             style={{
//               backgroundColor: "#000244",
//               color: "white",
//               padding: "3%",
//             }}
//           >
//             <Flex vertical style={{ marginTop: "30%" }}>
//               <ModalTitle>
//                 Send Us A Message
//               </ModalTitle>
//               <WorkText style={{ color: "white" }}>
//                 Feel free to reach out with your enquiries we will get back to
//                 you as soon as we can!
//               </WorkText>
//             </Flex>

//             <Image
//               src={modalImage}
//               preview={false}
//               style={{ height: "156px", width: "200px", marginTop: "80%" }}
//             />
//           </Col>

//           <Col span={10} style={{ backgroundColor: "#C1CFED" }}>
//             <Flex
//               vertical
//               style={{ padding: "30px", marginTop: "30%" }}
//               gap={"middle"}
//             >
//               <ContactInput placeholder="Enter Your Name" />
//               <ContactInput placeholder="Your Email" />
//               <ContactInput placeholder="Mobile Number" />
//               <ContactInput.TextArea placeholder="Write your message" rows={6} />
//               <Button type="primary">
//                 Submit
//               </Button>
//             </Flex>
//           </Col>
//         </Row>
//       </Modal>
//     </FooterContainer>
//   );
// };
// export default Footer;
