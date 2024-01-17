import React from "react";

const Text = ({ type, className, children }) => {
  const Element = type || "p";
  return <Element className={className}>{children}</Element>;
};

export default Text;
