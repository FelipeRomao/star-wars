import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
