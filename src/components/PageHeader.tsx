import React from "react";
import { Container } from "@material-ui/core";
import { Colors } from "../themes/defaultTheme";
import { Lead, PageHeaderStyled } from "./PageHeader.styled";

type PageHeaderProps = {
  title: string;
  lead?: string;
  color?: Colors;
};

/**
 * PageHeader to display page name.
 * Already includes a holding container
 *
 * @component
 */
const PageHeader = ({ title, lead, color }: PageHeaderProps) => {
  return (
    <Container data-testid="page-header">
      <PageHeaderStyled color={color}>{title}</PageHeaderStyled>
      <Lead>{lead}</Lead>
    </Container>
  );
};

export default PageHeader;
