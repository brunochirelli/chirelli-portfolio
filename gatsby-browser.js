import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "./src/themes/defaultTheme";

import Layout from "./src/components/Layout";

/**
 * The Layout component pass props from PAGE (not root) Element to their
 * childrens, so it can track when the location updates to handle the open or
 * close of the menu and have a more seameless experience
 */
export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
