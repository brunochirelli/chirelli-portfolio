import React from "react";
import { Container } from "@material-ui/core";
import { Colors } from "../themes/defaultTheme";
import { Lead, PageHeaderStyled } from "./PageHeader.styled";

interface PageHeaderProps {
  title: string;
  lead?: string;
  color?: Colors;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, lead, color }) => {
  return (
    <Container data-testid="page-header">
      <PageHeaderStyled color={color}>{title}</PageHeaderStyled>
      <Lead>{lead}</Lead>
    </Container>
  );
};

export default PageHeader;
