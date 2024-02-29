import { styled } from "styled-components";
import { Button } from "antd";
export const AnalysisContainer = styled.div`
  display: flex;
  margin-top: 8%;
`;
export const PreviewColumn = styled.div`
  flex: 1;
  height: 600px;
  overflow-y: auto;
  padding: 20px;
  margin-left: 5%;
`;
export const ResultsColumn = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const ResultsWrapper = styled.div`
  flex: 1;
`;
export const LoadMoreButton = styled(Button)`
  margin-top: 20px;
`;
// export const Container = styled.div`
//   min-width: 1040px;
//   min-height: 855px;
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   align-items: center;
//   //padding-top: 12rem;
//   background-color: gray;
// `;

// export const PreviewSection = styled.div`
//   background-color: red;
// `;

// export const ResultSection = styled.div`
//   background-color: blue;
// `;

// export const EmotionResult = styled.div`
//   background-color: yellow;
// `;

// export const SentimentResult = styled.div`
//   background-color: blue;
// `;
