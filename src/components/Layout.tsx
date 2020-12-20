import React, { useState } from "react";
import Footer from "./Footer";

import Header from "./Header";
import { LayoutStyled } from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
  pageLabel: string;
};

export enum Lang {
  en = "EN",
  ptBR = "PT-BR",
}

const Layout: React.FC<LayoutProps> = ({ children, pageLabel }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>(Lang.en);

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
