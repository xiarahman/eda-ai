import { Flex } from "antd";
import { styled } from "styled-components";

export const Container = styled.div`
  padding: 7rem 0;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-direction: column;
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

export const EmotionSectionFlex = styled(Flex)`
  background-color: #f5f5f5;
  padding: 1.5rem;
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
