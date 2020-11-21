const theme = {
  breakpoints: ["1024px"],
  fonts: {
    body: '"Aktiv Grotesk", sans-serif',
  },
  fontWeights: {
    normal: 400,
    bold: 500,
  },
  fontSizes: {
    heading1: ["36px", "60px"],
    heading2: ["32px", "40px"],
    heading3: ["28px", "28px"],
    heading4: ["18px", "18px"],
    body: ["16px", "20px"],
    small: ["13px", "13px"],
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
    white: "#EDEDF1",
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
  wrapper: {
    display: "grid",
    gridTemplateColumns: ["repeat(6, 1fr)", "repeat(12,1fr)"],
    gridTemplateRows: ["auto"],
    columnGap: ["20px", "40px"],
    mx: ["20px", "40px"],
  },
  components: {
    navigation: {
      height: "94px",
      width: "100%",
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
      fontSize: "heading1",
      lineHeight: "heading1",
      fontWeight: "bold",
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
