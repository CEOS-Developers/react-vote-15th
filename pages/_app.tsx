import type { AppProps } from "next/app";
import { wrapper } from "../store/configureStore";
import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
