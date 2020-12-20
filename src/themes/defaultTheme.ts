import { createMuiTheme } from "@material-ui/core/styles";
import { DefaultTheme } from "styled-components";

export enum CustomSizes {
  header = "3.75rem",
}

export enum FontFamilies {
  display = "bely-display, sans-serif",
  heading = "bely, serif",
  paragraph = "futura-pt, sans-serif",
}

export enum Colors {
  main = "#8EC189",
  coolBlack = "#1A2D35",
}

const defaultTheme: DefaultTheme = {
  fonts: {
    display: FontFamilies.display,
    heading: FontFamilies.heading,
    paragraph: FontFamilies.paragraph,
  },
  sizes: {
    headerHeight: CustomSizes.header,
  },
  colors: {
    main: Colors.main,
    black: Colors.coolBlack,
  },
};

export default defaultTheme;
