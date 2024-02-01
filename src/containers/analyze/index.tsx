import { useHistory, useParams } from "react-router-dom";
import React from "react";
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
  const type = useParams();
  const navigate = useHistory();

  const renderComponent = (type) => {
    switch (type) {
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
      style={{ minWidth: "1040px", paddingTop: "10rem" }}
      vertical
    >
      <Flex gap="middle">
        <OptionsDiv
          onClick={() => navigate.push("/video")}
          className={type === "video" ? "active" : ""}
        >
          <Text type={"h1"} className="per-size">
            <PaperClipOutlined /> Upload Video
          </Text>
        </OptionsDiv>
        <OptionsDiv
          onClick={() => navigate.push("/live")}
          className={type === "live" ? "active" : ""}
        >
          <Text type={"h1"} className="per-size">
            <VideoCameraOutlined /> Webcam
          </Text>
        </OptionsDiv>
        <OptionsDiv
          onClick={() => navigate.push("/text")}
          className={type === "text" ? "active" : ""}
        >
          <Text type={"h1"} className="per-size">
            <FontSizeOutlined /> Text
          </Text>
        </OptionsDiv>
      </Flex>
      <Flex justify="center">{renderComponent(type)}</Flex>
    </Flex>
  );
};

export default Analyze;
