import React from "react";
import { ThemeProvider } from "theme-ui";
import "../public/css/styles.css";
import Head from "next/head";
import theme from "../theme";
import { AnimatePresence, motion } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          href="/fonts/DandiGroteskDisplay.ttf"
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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          exit
          key={router.pathname}
          initial={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,

            y: 0,
            x: 0,
            transition: {
              duration: 0.2,
            },
          }}
          exit={{
            // scale: 0.96,
            opacity: 0,
            x: -250,
            y: 0,
            transition: {
              duration: 0.1,
            },
          }}
          id="page-transition-container"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
