import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "./src/themes/defaultTheme";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};
