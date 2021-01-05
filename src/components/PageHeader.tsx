import React from "react";
import { Link } from "gatsby";

import { Box, Container, IconButton, Typography } from "@material-ui/core";
import { GitHub, Public } from "@material-ui/icons";

import { Colors } from "../themes/defaultTheme";
import { Lead, PageHeaderStyled } from "./PageHeader.styled";
import CustomDivider from "./CustomDivider";

type PageHeaderProps = {
  title: string;
  lead?: string;
  color?: Colors;
  repo?: string;
  live?: string;
  type?: "tech" | "business";
};

/**
 * PageHeader to display page name.
 * Already includes a holding container.
 *
 * @component
 * @param {string}              title The title of the page
 * @param {string}              lead  An optional complement for the title
 * @param {string}              color Title color
 * @param {string}              repo  Link to repository
 * @param {string}              live  Link to live project
 * @param {"tech" | "business"} type  Type of the project if it is a portfolio item
 */
const PageHeader = ({
  title,
  lead,
  color,
  repo,
  live,
  type,
}: PageHeaderProps) => {
  return (
    <>
      <Container data-testid="page-header">
        <PageHeaderStyled color={color}>{title}</PageHeaderStyled>
        <Lead>{lead}</Lead>
      </Container>
      {type && <CustomDivider type={type} />}
      {repo || live ? (
        <Container style={{ margin: "1rem auto" }}>
          {repo && (
            <Box display="flex" alignItems="center">
              <IconButton
                color="inherit"
                component={Link}
                to={repo}
                target="_blank"
                rel="noopen noreferrer"
              >
                <Public />
              </IconButton>
              <Typography
                color="inherit"
                component={Link}
                to={repo}
                target="_blank"
                rel="noopen noreferrer"
              >
                Launch project
              </Typography>
            </Box>
          )}
          {live && (
            <Box display="flex" alignItems="center">
              <IconButton
                color="inherit"
                component={Link}
                to={live}
                target="_blank"
                rel="noopen noreferrer"
              >
                <GitHub />
              </IconButton>
              <Typography
                color="inherit"
                component={Link}
                to={live}
                target="_blank"
                rel="noopen noreferrer"
              >
                Source code
              </Typography>
            </Box>
          )}
        </Container>
      ) : null}
    </>
  );
};

export default PageHeader;
