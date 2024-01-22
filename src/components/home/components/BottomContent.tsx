import React from "react";
import { BottomImageContainer, BottomImage,BottomLineContent,StyledBottomTitle, StyledBottomButton } from "../style.ts";

const BottomContent: React.FC = () => {
  return (
    <>
      <BottomImageContainer>
        <BottomImage />
        <BottomLineContent>
          <StyledBottomTitle style={{ color: "white" }}>
            Ready to Experience
            <br /> Emotions in a New Light?
          </StyledBottomTitle>
          <StyledBottomButton shape="round">Analyze</StyledBottomButton>
        </BottomLineContent>
      </BottomImageContainer>
      
    </>
  );
};
export default BottomContent;
