// StyledAnalyze.js
import { Flex } from "antd";
import Text from "../../components/text/index.tsx";
import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding-top: 10rem;
`;

export const OptionsDiv = styled.div`
  width: 200px;
  height: 80px;
  padding: 0 1rem;
  font-family: "Roboto Serif";
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background: #f5f5f5;
  color: #c4c4c4;
  cursor: pointer;

  &:hover {
    background-color: #c1cfed;
    color: #262e5b;
    font-family: "Roboto Serif";
  }
`;

export const MainText = styled(Text)`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;

export const MainFlex = styled(Flex)`
  min-width: 1040px;
  min-height: 830px;
  padding-top: 6rem;
  flexgrow: 1;
`;
