import React, { useState } from "react";
import { Typography, Collapse, Flex } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { StyledCollapse, FAQContainer } from "../style.ts";
const { Title, Text } = Typography;
const { Panel } = Collapse;
const FAQ: React.FC = () => {
  // State to manage expanded panels
  const [expandedPanel, setExpandedPanel] = useState<string | string[]>([]);
  // Custom expand icon
  const customExpandIcon = (panelProps: { isActive?: boolean }) => (
    <span>{panelProps.isActive ? <UpOutlined /> : <DownOutlined />}</span>
  );
  // Function to handle panel change
  const handlePanelChange = (keys: string | string[]) => {
    setExpandedPanel(keys);
  };
  // Array of FAQ data
  const faqData = [
    {
      question: "What is EmoAnalytica?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. At eget aliquet commodo ut ante molestie vestibulum ullamcorper.",
    },
    // Add more FAQ items as needed
  ];
  return (
    <Flex
      vertical
      align="center"
      gap="middle"
      id="faq"
      style={{ 
        backgroundColor: "#C1CFED",
         padding: "30px"
         }}>
      <Title level={3}>FAQs</Title>
      <FAQContainer>
        {/* Collapse component */}
        <StyledCollapse
          accordion
          expandIconPosition="right"
          onChange={handlePanelChange}
          activeKey={expandedPanel}
          expandIcon={customExpandIcon}
        >
          {/* Map over FAQ data to generate panels */}
          {faqData.map((faq, index) => (
            <Panel header={faq.question} key={index.toString()}>
              <Text>{faq.answer}</Text>
            </Panel>
          ))}
        </StyledCollapse>
      </FAQContainer>
    </Flex>
  );
};
export default FAQ;
