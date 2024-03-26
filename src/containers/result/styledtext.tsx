import { styled } from "styled-components";
import { Button } from "antd";
export const AnalysisContainer = styled.div`
  display: flex;
  margin-top: 8%;
`;
export const PreviewColumn = styled.div`
  
  height: 600px;
  overflow-y: auto;
  padding: 20px;
  margin-left: 5%;
`;
export const ResultsColumn = styled.div`
 
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const ResultsWrapper = styled.div`
  flex: 1;
`;
export const LoadMoreButton = styled(Button)`
  margin-top: 20px;
`;
