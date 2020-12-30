import { Link } from "gatsby";
import React from "react";
import { NavLinks } from "./MenuItems.styled";

const MenuItems = () => {
  return (
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
  );
};

export default MenuItems;
