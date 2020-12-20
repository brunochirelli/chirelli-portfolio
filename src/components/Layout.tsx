import React from "react";
import { PageProps } from "gatsby";
import Footer from "./Footer";

import Header from "./Header";
import { LayoutStyled } from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
  pageLabel: string;
};

const Layout: React.FC<LayoutProps> = ({ children, pageLabel }) => {
  return (
    <LayoutStyled>
      <Header pageLabel={pageLabel} />
      <main>{children}</main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
