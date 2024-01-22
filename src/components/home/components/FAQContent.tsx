import React, { useState } from "react";
import { Typography, Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { StyledSpace, StyledCollapse, FAQContainer } from "../style.ts";
const {Title, Text}=Typography
const { Panel } = Collapse;


const FAQ: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | string[]>([]);

  const customExpandIcon = (panelProps: { isActive?: boolean }) => (
    <span>{panelProps.isActive ? <UpOutlined /> : <DownOutlined />}</span>
  );

  const handlePanelChange = (keys: string | string[]) => {
    setExpandedPanel(keys);
  };

  return (
    <StyledSpace direction="vertical">
      <Title level={3}>FAQs</Title>
      <FAQContainer>
        <StyledCollapse
          accordion
          expandIconPosition="right"
          onChange={handlePanelChange}
          activeKey={expandedPanel}
          expandIcon={customExpandIcon}
        >
          <Panel header="Lorem ipsum is a dummy text right?" key="1">
            <Text>
              Lorem ipsum dolor sit amet consectetur. At eget aliquet commodo ut
              ante molestie vestibulum ullamcorper.
            </Text>
          </Panel>

          <Panel header="Lorem ipsum is a dummy text right?" key="2">
            <Text>
              Lorem ipsum dolor sit amet consectetur. At eget aliquet commodo ut
              ante molestie vestibulum ullamcorper.
            </Text>
          </Panel>

          <Panel header="Lorem ipsum is a dummy text right?" key="3">
            <Text>
              Lorem ipsum dolor sit amet consectetur. At eget aliquet commodo ut
              ante molestie vestibulum ullamcorper.
            </Text>
          </Panel>
          <Panel header="Lorem ipsum is a dummy text right?" key="4">
            <Text>
              Lorem ipsum dolor sit amet consectetur. At eget aliquet commodo ut
              ante molestie vestibulum ullamcorper.
            </Text>
          </Panel>

          <Panel header="Lorem ipsum is a dummy text right?" key="5">
            <Text>
              Lorem ipsum dolor sit amet consectetur. At eget aliquet commodo ut
              ante molestie vestibulum ullamcorper.
            </Text>
          </Panel>
        </StyledCollapse>
      </FAQContainer>
    </StyledSpace>
  );
};

export default FAQ;
