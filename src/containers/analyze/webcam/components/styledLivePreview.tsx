// StyledLivePreview.js
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: stretch;
`;

export const Preview = styled.div`
  position: relative;
  display: flex;
  width: 490px;
  height: 300px;
  // justify-content: stretch;
  // align-items: stretch;
  //border-radius: 5px;
  //border: 1px solid var(--Neutral-5, #d9d9d9);
  //background: #f5f5f5;
`;

export const styles = {
  opacity: "0",
  width: "0",
  padding: "0",
};
