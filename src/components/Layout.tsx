import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";

import Footer from "./Footer";
import Header from "./Header";

import { LayoutStyled } from "./Layout.styled";

export declare type Lang = "EN" | "PT-BR";

type LayoutProps = {
  children: React.ReactNode;
  location?: object;
};

const Layout = ({ children, location }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>("EN");

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    return handleClose();
  }, [location]);

  return (
    <LayoutStyled>
      <Header
        pageLabel={""}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        lang={lang}
        setLang={setLang}
      />
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
