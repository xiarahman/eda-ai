import styled from "styled-components";
import { Input } from "antd";
export const Inputdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 628px;
`;
export const ButtonsDiv = styled.div`
  width: 628px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: space-between;
  gap: 20px;
`;
export const StyledTextArea = styled(Input.TextArea)`
  background-color: #f5f5f5 !important;
  border: 1px solid #dedede !important;
  font-weight: 400 !important;
  display: flex;
  width: 628px;
  max-height: 300px;
  align-items: center;
  &::placeholder {
    color: rgba(0, 0, 0, 0.45) !important;
  }
  &:hover {
    color: black !important;
    background-color: #f5f5f5 !important;
  }
`;
