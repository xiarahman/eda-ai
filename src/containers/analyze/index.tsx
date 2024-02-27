import React, { useState } from "react";
import Text from "../../components/text/index.tsx";
import { OptionsDiv } from "./styledindex.tsx";
import {
  FontSizeOutlined,
  PaperClipOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import Upload from "./upload/index.tsx";
import Webcam from "./webcam/index.tsx";
import TextFrom from "./text/index.tsx";
import { Flex } from "antd";

const Analyze = () => {
  const [item, setItem] = useState("");

  const renderComponent = (val) => {
    switch (val) {
      case "video":
        return <Upload />;
      case "live":
        return <Webcam />;
      case "text":
        return <TextFrom />;
      default:
        return <Upload />;
    }
  };

  return (
    <Flex
      align="center"
      gap="large"
      style={{
        minWidth: "1040px",
        minHeight: "830px",
        paddingTop: "6rem",
        flexGrow: "1",
      }}
      vertical
    >
      <Flex gap="middle">
        <OptionsDiv
          onClick={() => setItem("video")}
          className={item === "video" ? "active" : ""}
        >
          <Text type={"h1"} className="per-size">
            <PaperClipOutlined /> Upload Video
          </Text>
        </OptionsDiv>
        <OptionsDiv
          onClick={() => setItem("live")}
          className={item === "live" ? "active" : ""}
        >
          <Text type={"h1"} className="per-size">
            <VideoCameraOutlined /> Webcam
          </Text>
        </OptionsDiv>
        <OptionsDiv
          onClick={() => setItem("text")}
          className={item === "text" ? "active" : ""}
        >
          <Text type={"h1"} className="per-size">
            <FontSizeOutlined /> Text
          </Text>
        </OptionsDiv>
      </Flex>
      <Flex justify="center">{item && renderComponent(item)}</Flex>
    </Flex>
  );
};

export default Analyze;
