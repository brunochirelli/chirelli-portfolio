import React from "react";
import styled from "styled-components";

type CustomDividerProps = {
  type: "business" | "tech" | "page";
};

const DividerStyled = styled.div<CustomDividerProps>`
  display: block;
  width: 100%;
  height: 0.3rem;
  background: ${({ type }) =>
    type === "business"
      ? "linear-gradient(90deg, #8ade82 0%, #7248d4 100%);"
      : "linear-gradient(90deg, #8ec189 0%, #ffdd00 100%);"};
`;

const CustomDivider = ({ type }: CustomDividerProps) => {
  return <DividerStyled type={type} />;
};

export default CustomDivider;
