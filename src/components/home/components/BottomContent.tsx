import React from "react";
import {
  BottomImageContainer,
  BottomImage,
  BottomLineContent,
  BottomTitle,
  StyledAnalyzeButton
} from "../style.ts";
const BottomContent: React.FC = () => {
  return (
      <BottomImageContainer>
        <BottomImage />
        <BottomLineContent>
          <BottomTitle>
            Ready to Experience
            <br /> Emotions in a New Light?
          </BottomTitle>
          <StyledAnalyzeButton type={'link'} href={'/analyze'}>Analyze</StyledAnalyzeButton>
        </BottomLineContent>
      </BottomImageContainer>
  );
};
export default BottomContent;
