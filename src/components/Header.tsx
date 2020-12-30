import React from "react";
import { Link } from "gatsby";
import { Email, GitHub, LinkedIn, Menu } from "@material-ui/icons";
import { Hidden, IconButton } from "@material-ui/core";

import {
  HeaderStyled,
  Logo,
  Social,
  Language,
  PageLocation,
} from "./Header.styled";
import OverlayNav from "./OverlayNav";
import { Lang } from "./Layout";
import MenuItems from "./MenuItems";

type HeaderProps = {
  pageLabel: string;
  lang: Lang;
  setLang: (a?: any) => void;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const Header = (props: HeaderProps) => {
  return (
    <HeaderStyled>
      <Hidden mdUp>
        <IconButton color="inherit" onClick={props.onOpen}>
          <Menu />
        </IconButton>
        <OverlayNav
          open={props.open}
          onOpen={props.onOpen}
          onClose={props.onClose}
          lang={props.lang}
          setLang={props.setLang}
        />
      </Hidden>

      <Logo to="/" data-testid="logo">
        Bruno Chirelli
      </Logo>
      <PageLocation>{props.pageLabel}</PageLocation>

      {/* <Language>{props.lang}</Language> */}
      <Hidden smDown>
        <MenuItems />
      </Hidden>

      <Social>
        <IconButton
          color="inherit"
          href="https://github.com/BrunoChirelli"
          target="_blank"
          rel="noopener noreferer"
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          color="inherit"
          href="https://linkedin.com/in/BrunoChirelli"
          target="_blank"
          rel="noopener noreferer"
        >
          <GitHub />
        </IconButton>

        <IconButton
          color="inherit"
          href="mailto:bruno@chirelli.com.br"
          target="_blank"
          rel="noopener noreferer"
        >
          <Email />
        </IconButton>
      </Social>
    </HeaderStyled>
  );
};

export default Header;
