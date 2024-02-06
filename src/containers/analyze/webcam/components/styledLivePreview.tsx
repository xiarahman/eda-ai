// StyledLivePreview.js
import styled from "styled-components";

export const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const ButtonDiv = styled.div`
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: top;
  align-items: center;
`;

export const Preview = styled.div`
  display: flex;
  width: 580px;
  height: 300px;
  justify-content: stretch;
  align-items: stretch;
  border-radius: 5px;
  border: 1px solid var(--Neutral-5, #d9d9d9);
  background: #f5f5f5;
`;

export const styles = {
  opacity: "0",
  width: "0",
  padding: "0",
};
