import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      display: string;
      heading: string;
      paragraph: string;
    };
    sizes: {
      headerHeight: string;
    };
    colors: {
      main: string;
      black: string;
    };
  }
}
