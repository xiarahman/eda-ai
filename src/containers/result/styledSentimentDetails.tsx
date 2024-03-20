import { Flex } from "antd";
import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 1040px;
  margin: 0 auto;
  padding: 8rem 0;
  overflow: hidden; // Hide the scroll bar
`;

export const MainFlex = styled(Flex)`
  height: 100%;
  overflow-y: auto; // Allow scrolling in the vertical direction
`;

export const SentenceCardDiv = styled.div`
  overflow-y: auto;
`;
