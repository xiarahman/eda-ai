import { Flex } from "antd";
import { styled } from "styled-components";

export const Container = styled.div`
  padding: 7rem 0;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-direction: column;
`;

export const PreviewSection = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
`;

export const VideoPreview = styled.div`
  display: flex;
  width: 400px;
  padding-top: 8px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
`;

export const SectionHeading = styled.h2`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  color: #c4c4c4;
`;

export const CardHeading = styled.h4`
  font-family: "Poppins";
  font-size: 16px !important;
  font-weight: 500 !important;
  color: #262e5b;
`;

export const MainFlex = styled(Flex)`
  margin: 0 auto;
  max-width: 1100px;
`;

export const PreviewSectionFlex = styled(Flex)`
  flexgrow: 1;
  min-width: 400px;
`;

export const SliderSectionFlex = styled(Flex)`
  width: 100%;
  background-color: #f5f5f5;
`;

export const ResultSectionFlex = styled(Flex)`
  flexgrow: 1;
`;

export const EmotionAndSentimentSection = styled(Flex)`
  align-items: stretch;
`;

export const EmotionSectionFlex = styled(Flex)`
  background-color: #f5f5f5;
  flexgrow: 1;
  padding: 1.5rem;
  border-radius: 5px;
`;

export const EmotionPieChartFlex = styled(Flex)`
  min-height: 100px;
  min-width: 200px;
  border-radius: 5px;
`;

export const SentimentSectionFlex = styled(Flex)`
  background-color: #f5f5f5;
  flexgrow: 1;
  padding: 1rem;
  border-radius: 5px;
`;

export const AreaChartFlex = styled(Flex)`
  background-color: #f5f5f5;
  flexgrow: 1;
  padding: 1.5rem;
  border-radius: 5px;
`;

export const GoBackButtonFlex = styled(Flex)`
  min-width: 1100px;
  cursor: pointer;
  margin: 0 auto;
  justify-content: start;
`;
