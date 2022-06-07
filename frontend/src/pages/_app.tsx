import type { AppProps } from "next/app";
import "styles/scss/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component { ...pageProps } />;
}

export default MyApp;
