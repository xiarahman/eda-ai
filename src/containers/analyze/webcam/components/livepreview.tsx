import React from "react";
import { ButtonDiv, Preview, Section } from "./styledLivePreview.tsx";
import Button from "../../../../components/button/index.tsx";

const LivePreview = () => {
  return (
    <Section>
      <Preview></Preview>
      <ButtonDiv>
        <Button type={"primary"} cls="btn-width btn-end">
          Start Stream
        </Button>
      </ButtonDiv>
    </Section>
  );
};

export default LivePreview;
