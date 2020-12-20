import React from "react";
import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </FooterStyled>
  );
};

export default Footer;
