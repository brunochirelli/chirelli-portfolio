import React from "react";

import { IconButton, SwipeableDrawer, Typography } from "@material-ui/core";
import { Close, Email, GitHub, LinkedIn } from "@material-ui/icons";

import {
  LanguageOption,
  NavFooter,
  NavHeader,
  NavSocial,
  OverlayNavStyled,
} from "./OverlayNav.styled";
import { Lang } from "./Layout";
import MenuItems from "./MenuItems";

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
          <Typography className="logo">Bruno Chirelli</Typography>
        </NavHeader>

        <MenuItems />

        <NavFooter>
          <LanguageOption>
            {/* Needs refactor */}
            <div
              className={lang === "EN" ? "active" : ""}
              role="button"
              onClick={() => handleLang("EN")}
            >
              EN
            </div>
            <div
              className={lang === "PT-BR" ? "active" : ""}
              role="button"
              onClick={() => handleLang("PT-BR")}
            >
              PT-BR
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
