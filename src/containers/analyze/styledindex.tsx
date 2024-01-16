// StyledAnalyze.js

import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding-top: 12rem;
`;

export const OptionsDiv = styled.div`
  width: 200px;
  height: 80px;
  padding: 0 1rem;
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
  }
`;
