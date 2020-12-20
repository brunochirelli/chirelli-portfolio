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
import OverlayNav from "./OverlayNav";
import { Lang } from "./Layout";

type HeaderProps = {
  pageLabel: string;
  lang: Lang;
  setLang: Function;
  open: boolean;
  onOpen(): void;
  onClose(): void;
};

const Header: React.FC<HeaderProps> = ({
  pageLabel,
  lang,
  setLang,
  open,
  onOpen,
  onClose,
}) => {
  return (
    <HeaderStyled>
      <div>
        <IconButton color="inherit" onClick={onOpen}>
          <Menu />
        </IconButton>
        <OverlayNav
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          lang={lang}
          setLang={setLang}
        />
      </div>

      <Typography component={Logo} to="/">
        Bruno Chirelli
      </Typography>
      <PageLocation>{pageLabel}</PageLocation>

      <Language>{lang}</Language>

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
};

export default Header;
