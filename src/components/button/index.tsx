import React from "react";
import XButton from "antd/es/button";
import styled from "styled-components";

export const Btn = styled(XButton)`
  color: #f5f5f5 !important;
  background-color: #262e5b !important;
  border-radius: 5px;
`;

const Button = (props) => {
  const { type, cls, onClick, children, ...rest } = props;
  if (type === "link") {
    return (
      <Btn  type={props.type} href={props.href}>
        {children}
      </Btn>
    );
  } else {
    return (
      <Btn type={props.type} className={props.cls}>
        {props.children}
      </Btn>
    );
  }
};

export default Button;
