import React from "react";
import { Button as AntdButton } from "antd";
import styled from "styled-components";

export const StyledButton = styled(AntdButton)`
  color: #f5f5f5 !important;
  background-color: #262e5b !important;
  border-radius: 5px;
`;

const Button = (props) => {
  const { type, cls, onClick, children, ...rest } = props;
  if (type === "link") {
    return (
      <StyledButton type={props.type} href={props.href} onClick={props.onClick}>
        {props.children}
      </StyledButton>
    );
  } else {
    return (
      <StyledButton
        type={props.type}
        className={props.cls}
        onClick={props.onClick}
      >
        {props.children}
      </StyledButton>
    );
  }

};

export default Button;
