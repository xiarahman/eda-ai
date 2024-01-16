import React from "react";
import {
  Container,
  EmotionResult,
  PreviewSection,
  ResultSection,
  SentimentResult,
} from "./styledtext.tsx";
const TextResult = () => {
  return (
    <>
      <Container>
        <PreviewSection>text preview</PreviewSection>
        <ResultSection>
          <EmotionResult>Emotion Result</EmotionResult>
          <SentimentResult>Sentiment Result</SentimentResult>
        </ResultSection>
      </Container>
    </>
  );
};

export default TextResult;
