import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import Text from "../../components/text/index.tsx";
import { Section, OptionsDiv } from "./styledindex.tsx";
import {
  FontSizeOutlined,
  PaperClipOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Upload from "./upload/index.tsx";
import Webcam from "./webcam/index.tsx";
import TextFrom from "./text/index.tsx";

const Analyze = () => {
  const { type } = useParams();
  const navigate = useNavigate();

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
    <>
      <Section>
        <OptionsDiv onClick={() => navigate("/video")}>
          <Text type={"h1"} cls="per-size">
            <PaperClipOutlined /> Upload Video
          </Text>
        </OptionsDiv>
        <OptionsDiv onClick={() => navigate("/live")}>
          <Text type={"h1"} cls="per-size">
            <VideoCameraOutlined /> Webcam
          </Text>
        </OptionsDiv>
        <OptionsDiv onClick={() => navigate("/text")}>
          <Text type={"h1"} cls="per-size">
            <FontSizeOutlined /> Text
          </Text>
        </OptionsDiv>
      </Section>
      {renderComponent(type)}
    </>
  );
};

export default Analyze;
