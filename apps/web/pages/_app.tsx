import type { AppProps } from "next/app";
import { ThemeProvider, theme } from "ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
