// StyledLivePreview.js
import styled from "styled-components";

export const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-items: top;
  //height: 100vh;
  padding-top: 6rem;
`;

export const ButtonDiv = styled.div`
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const Preview = styled.div`
  display: flex;
  width: 580px;
  height: 300px;
  padding: 100px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Neutral-5, #d9d9d9);
  background: #f5f5f5;
`;
