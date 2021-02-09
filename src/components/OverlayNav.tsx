import React from "react";
import { Link } from "gatsby";

import { IconButton, SwipeableDrawer, Typography } from "@material-ui/core";
import { Close, Email, GitHub, LinkedIn } from "@material-ui/icons";

import { Lang } from "./Layout";
import MenuItems from "./MenuItems";

import {
  NavFooter,
  NavHeader,
  NavSocial,
  OverlayNavStyled,
} from "./OverlayNav.styled";

type OverlayNavProps = {
  lang: Lang;
  setLang: (lang?: Lang) => void;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const OverlayNav = ({
  lang,
  setLang,
  open,
  onClose,
  onOpen,
}: OverlayNavProps) => {
  const handleLang = (lang: Lang): void => {
    setLang(lang);
  };

  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      style={{ width: "100%" }}
    >
      <OverlayNavStyled>
        <NavHeader>
          <IconButton edge="start" onClick={onClose}>
            <Close />
          </IconButton>
          <Typography
            className="logo"
            component={Link}
            to="/"
            color="inherit"
            style={{ textDecoration: "none" }}
          >
            Bruno Chirelli
          </Typography>
        </NavHeader>

        <MenuItems />

        <NavFooter>
          <NavSocial>
            <IconButton
              color="inherit"
              href="https://linkedin.com/in/BrunoChirelli"
              target="_blank"
              rel="noopener noreferer"
              data-testid="header-social"
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://github.com/BrunoChirelli"
              target="_blank"
              rel="noopener noreferer"
              data-testid="header-social"
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
          </NavSocial>
        </NavFooter>
      </OverlayNavStyled>
    </SwipeableDrawer>
  );
};

export default OverlayNav;
