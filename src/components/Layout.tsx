import React, { useState } from "react";
import Footer from "./Footer";

import Header from "./Header";
import { LayoutStyled } from "./Layout.styled";

export declare type Lang = "EN" | "PT-BR";

type LayoutProps = {
  children: React.ReactNode;
  pageLabel: string;
};

const Layout = ({ children, pageLabel }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>("EN");

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <LayoutStyled>
      <Header
        pageLabel={pageLabel}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        lang={lang}
        setLang={setLang}
      />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
