import React from "react";
import { ThemeProvider } from "theme-ui";
import "../public/css/styles.css";
import Head from "next/head";
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="/fonts/DandiGroteskDisplay.tff"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/fonts/DandiSansMedium.ttf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/fonts/DandiGroteskRegular.ttf"
          rel="preload"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
