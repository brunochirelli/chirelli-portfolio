import React from "react";
import { Email, GitHub, LinkedIn, Menu } from "@material-ui/icons";
import { Box, Typography, IconButton } from "@material-ui/core";

import {
  HeaderStyled,
  Logo,
  Social,
  Language,
  PageLocation,
} from "./Header.styled";

type HeaderProps = {
  pageLabel: string;
};

const Header: React.FC<HeaderProps> = ({ pageLabel }) => (
  <HeaderStyled>
    <IconButton color="inherit">
      <Menu />
    </IconButton>

    <Typography component={Logo} to="/">
      Bruno Chirelli
    </Typography>
    <PageLocation>{pageLabel}</PageLocation>

    <Language>
      <>EN</>
    </Language>

    <Social>
      <IconButton color="inherit">
        <LinkedIn />
      </IconButton>
      <IconButton color="inherit">
        <GitHub />
      </IconButton>
      <IconButton color="inherit">
        <Email />
      </IconButton>
    </Social>
  </HeaderStyled>
);

export default Header;
