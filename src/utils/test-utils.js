import React from "react";
import { ThemeProvider as StyledTheme } from "styled-components";

import theme from "../themes/defaultTheme";

import { render } from "@testing-library/react";

const AllProviders = ({ children }) => {
  return <StyledTheme theme={theme}>{children}</StyledTheme>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
