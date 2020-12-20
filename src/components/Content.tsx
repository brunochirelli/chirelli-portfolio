import React from "react";
import { ContentStyled } from "./Content.styled";

type ContentProps = {
  children: JSX.Element;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
