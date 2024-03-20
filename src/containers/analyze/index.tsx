import React, { useState } from "react";
import { MainFlex, MainText, OptionsDiv } from "./styledindex.tsx";
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
    <MainFlex align="center" gap="large" vertical>
      <Flex gap="middle">
        <OptionsDiv
          onClick={() => setItem("video")}
          className={item === "video" ? "active" : ""}
        >
          <MainText type={"h1"} className="">
            <PaperClipOutlined /> Upload Video
          </MainText>
        </OptionsDiv>
        <OptionsDiv
          onClick={() => setItem("live")}
          className={item === "live" ? "active" : ""}
        >
          <MainText type={"h1"} className="">
            <VideoCameraOutlined /> Webcam
          </MainText>
        </OptionsDiv>
        <OptionsDiv
          onClick={() => setItem("text")}
          className={item === "text" ? "active" : ""}
        >
          <MainText type={"h1"} className="">
            <FontSizeOutlined /> Text
          </MainText>
        </OptionsDiv>
      </Flex>
      <Flex justify="center">{item && renderComponent(item)}</Flex>
    </MainFlex>
  );
};

export default Analyze;
