import { transform } from "framer-motion";
const theme = {
  breakpoints: ["1024px"],
  fonts: {
    body: '"Dandi Grotesk", sans-serif',
  },
  fontWeights: {
    normal: 500,
    bold: 500,
  },
  fontSizes: {
    heading1: ["36px", "60px"],
    heading2: ["32px", "40px"],
    heading3: ["28px", "28px"],
    heading4: ["18px", "18px"],
    body: ["16px", "20px"],
    small: ["13px", "13px"],
    nav: ["14px", "14px"],
  },
  lineHeights: {
    heading1: ["43.2px", "64px"],
    heading2: ["38.4px", "48px"],
    heading3: ["32px", "32px"],
    heading4: ["26px", "26px"],
    body: ["24px", "32px"],
    small: ["15.34px", "15.34px"],
  },
  colors: {
    black: "#1A1A1D",
    grey: "#909095",
    white: "#f2f2f2",
    orange: "#FF9133",
    yellow: "#FFD93B",
    lightYellow: "#FBF792",
    darkTurquoise: "#1A1A1D",
    turquoise: "#A4F0F4",
    lightTurquoise: "#DFFFFF",
    darkBlue: "#0227C5",
    blue: "#335AFF",
    lightBlue: "#C6D9FF",
    darkViolet: "#A837F8",
    violet: "#F9D2FF",
    lightViolet: "#FDF1FF",
  },
  colWidthMob: `calc(calc(100vw - 140px)/6)`,
  colWidthDesktop: `calc(calc(100vw - 520px)/12)`,
  wrapper: {
    // display: "grid",
    // gridTemplateColumns: ["repeat(6, 1fr)", "repeat(12,1fr)"],
    // gridTemplateRows: ["auto"],
    // columnGap: ["20px", "40px"],
    // mx: ["20px", "40px"],
  },
  pages: {
    home: {
      top: {
        height: ["542px", "677px"],

        mx: ["20px", "40px"],
        bg: "transparent",
        bigLogo: {
          svg: {
            position: "fixed",
            top: ["24px", "44px"],
            left: ["20px", "40px"],
            height: [(t) => t.colWidthMob, (t) => t.colWidthDesktop],
            width: ["125px", "367px"],
            mb: ["20px", "40px"],
            transform: "rotate(90deg) translateX(-30%)",
            transformOrigin: "bottom left",
          },
        },
        header: {
          display: "grid",
          gridTemplateColumns: ["repeat(6, 1fr)", "repeat(12,1fr)"],
          columnGap: ["20px", "40px"],
          gridTemplateRows: "auto",
          h1: {
            gridArea: ["1/2/2/-1", "1/7/2/-1"],
            ml: [(t) => `calc(${t.colWidthMob} + 10px)`],
            mt: [`124px`],
          },
          button: {
            gridArea: ["2/2/3/6", "2/7/3/-1"],
            ml: [(t) => `calc(${t.colWidthMob} + 10px)`],
            height: "48px",
            // ml: [0, "5.4vw"],
            mt: ["24px", "48px"],
            bg: "yellow",

            borderRadius: "200px",
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
            a: {
              textDecoration: "none",
              color: "black",
            },
            p: {
              fontSize: "16px",
            },
          },
        },
        bars: {
          position: "absolute",
          left: 0,
          top: "353px",
          width: "100%",
          height: "250px",
          ".barWrapper": {
            position: "relative",
            width: "100%",
            height: "100%",
          },
          "#bar1": {
            bg: "turquoise",
            width: [(t) => `calc(${t.colWidthMob} + 10px)`],
            height: "100%",
            borderRadius: "10px",
            ml: ["20px"],
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundImage: (t) =>
              `linear-gradient(to right, ${t.colors.blue},${t.colors.blue})`,
            backgroundPosition: "0 179px",
            backgroundSize: "100% 71px",
          },
          "#bar2": {
            bg: "turquoise",
            width: [(t) => `calc(${t.colWidthMob} + 10px)`],
            height: "100%",
            borderRadius: "10px",
            ml: [(t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`],
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundImage: (t) =>
              `linear-gradient(to right, ${t.colors.blue},${t.colors.blue})`,
            backgroundPosition: "0 179px",
            backgroundSize: "100% 71px",
          },
          "#bar3": {
            bg: "turquoise",
            width: [(t) => `calc(${t.colWidthMob} + 10px)`],
            height: "100%",
            borderRadius: "10px",
            ml: [(t) => `calc(calc(${t.colWidthMob} * 3.5) + 80px)`],
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundImage: (t) =>
              `linear-gradient(to right, ${t.colors.blue},${t.colors.blue})`,
            backgroundPosition: "0 179px",
            backgroundSize: "100% 71px",
          },
        },
      },
    },
  },
  components: {
    navigation: {
      position: "fixed",
      height: "94px",
      width: "100%",
      bg: "black",
      display: ["none", "flex"],
      fontFamily: "body",

      justifyContent: "flex-end",
      px: ["40px"],
      pt: ["44px"],
      ".item": {
        fontSize: "nav",
        lineHeight: "small",
        color: "white",
        ml: ["32px"],
        textDecoration: "none",
      },
      ".login": {
        color: "yellow",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        ".arrow": {
          pl: "14px",
        },
      },
    },
    mobilenav: {
      position: "fixed",
      display: ["flex", "none"],
      justifyContent: "flex-end",
      height: "74px",
      width: "100%",
      bg: "black",
      ".hamburger": {
        mr: "20px",
        mt: "33px",
        position: "relative",
        height: "21px",
        width: "25px",
        span: {
          position: "absolute",
          left: 0,
          p: 0,
          m: 0,
          height: "3px",
          width: "25px",
          bg: "white",
        },
      },
    },
    footer: {
      height: "684px",
      width: "100%",
      bg: "black",
    },
  },
  styles: {
    root: {
      bg: "black",
      color: "white",
    },
    h1: {
      fontFamily: "body",
      fontSize: ["36px", "60px"],
      lineHeight: ["43.2px", "64px"],
      fontWeight: "bold",
      m: 0,
    },
    h2: {
      fontFamily: "body",
      fontSize: "heading2",
      lineHeight: "heading2",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "body",
      fontSize: "heading3",
      lineHeight: "heading3",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "body",
      fontSize: "heading4",
      lineHeight: "heading4",
      fontWeight: "normal",
    },
    p: {
      fontFamily: "body",
      fontSize: "body",
      lineHeight: "body",
      fontWeight: "normal",
    },
    h5: {
      fontFamily: "body",
      fontSize: "small",
      lineHeight: "small",
      fontWeight: "normal",
    },
  },
};

export default theme;
