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

        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        ></script>
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
          // exit
          // key={router.pathname}
          // initial={{
          //   opacity: 0,
          // }}
          animate={
            {
              // opacity: 1,
              // transition: {
              //   duration: 0.1,
              // },
            }
          }
          exit={
            {
              // opacity: 0,
              // transition: {
              //   duration: 0.1,
              // },
            }
          }
          id="page-transition-container"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
