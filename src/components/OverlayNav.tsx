import React from "react";
import { Link } from "gatsby";

import { IconButton, SwipeableDrawer, Typography } from "@material-ui/core";
import { Close, Email, GitHub, LinkedIn } from "@material-ui/icons";

import {
  LanguageOption,
  NavFooter,
  NavHeader,
  NavLinks,
  NavSocial,
  OverlayNavStyled,
} from "./OverlayNav.styled";
import { Lang } from "./Layout";

type OverlayNavProps = {
  lang: string;
  setLang: Function;
  open: boolean;
  onClose(): void;
  onOpen(): void;
};

const OverlayNav: React.FC<OverlayNavProps> = ({
  open,
  onClose,
  onOpen,
  lang,
  setLang,
}) => {
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
          <Typography className="logo">Bruno Chirelli</Typography>
        </NavHeader>
        <NavLinks>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/resume">Currículo</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </NavLinks>
        <NavFooter>
          <LanguageOption>
            {/* Needs refactor */}
            <div
              className={lang === Lang.en ? "active" : ""}
              role="button"
              onClick={() => handleLang(Lang.en)}
            >
              {Lang.en}
            </div>
            <div
              className={lang === Lang.ptBR ? "active" : ""}
              role="button"
              onClick={() => handleLang(Lang.ptBR)}
            >
              {Lang.ptBR}
            </div>
          </LanguageOption>
          <NavSocial>
            <div>
              <LinkedIn />
            </div>

            <div>
              <GitHub />
            </div>

            <div>
              <Email />
            </div>
          </NavSocial>
        </NavFooter>
      </OverlayNavStyled>
    </SwipeableDrawer>
  );
};

export default OverlayNav;
