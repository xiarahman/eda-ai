import { Flex } from "antd";
import { styled } from "styled-components";

export const Container = styled.div`
  padding: 2rem ;
  
`;
export const SectionHeading = styled.h2`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 500;
  color: #c4c4c4;
`;
export const SliderSectionFlex = styled(Flex)`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 2%;
`;

export const CardHeading = styled.h4`
  font-family: "Poppins";
  font-size: 16px !important;
  font-weight: 500 !important;
  color: #262e5b;
`;
export const GoBackButtonFlex = styled(Flex)`
  min-width: 1100px;
  cursor: pointer;
  margin: 0 auto;
  justify-content: start;
`;
