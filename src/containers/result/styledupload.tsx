import { styled } from "styled-components";

export const Container = styled.div`
  min-width: 1040px;
  min-height: 850px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 5px;
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
