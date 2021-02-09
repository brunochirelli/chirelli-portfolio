import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";

// import Footer from "./Footer";
import Header from "./Header";

import { LayoutStyled } from "./Layout.styled";

export declare type Lang = "EN" | "PT-BR";

type LayoutProps = {
  children: React.ReactNode;
  location?: any;
};

const Layout = ({ children, location }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>("EN");

  /** Get actual location of the page */
  let page = location.pathname;

  /** Handle page name to output as a label */
  let pageName =
    page === "/" ? "Home" : page.replace(/\/./, page[1].toUpperCase());

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    /** Every time that location updates, close the menu */
    return handleClose();
  }, [location]);

  return (
    <LayoutStyled>
      <Header
        pageLabel={pageName}
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
