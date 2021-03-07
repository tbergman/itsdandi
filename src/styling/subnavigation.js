export const subnavigation = {
  display: "flex",
  height: ["auto", "250px"],
  flexFlow: ["column-reverse", "unset"],

  ".SubNavigation__next": {
    height: ["200px", "100%"],
    pl: [0],
    flex: [1, "0 50%"],
    display: "flex",
    alignItems: "center",
    ".SubNavigation__link": {
      pl: [(t) => `calc(calc(${t.colWidthMob} * 3) + 80px)`, 0],
    },
  },

  ".SubNavigation__prev": {
    height: ["200px", "100%"],
    flex: [1, "0 50%"],
    pl: [0],
    display: "flex",
    alignItems: "center",
    ".SubNavigation__link": {
      pl: [(t) => `calc(${t.colWidthMob} + 40px)`, 0],
    },
  },
  ".full": {
    flex: "0 100%",
  },

  ".SubNavigation__link": {
    height: "100%",
    width: "100%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",

    ".SubNavigation__link-content": {
      mr: [6, 0],
      cursor: "pointer",
      textDecoration: "none",
      height: ["100%", "auto"],
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: ["center", "flex-end"],
      ".SubNavigation__link-content-text": {
        fontFamily: "display",
        fontSize: ["24px", "40px"],
        lineHeight: ["24px", "40px"],
        mr: [3],
        // mb: [8],
        color: "black",
      },
      ".rotated": {
        transform: "rotate(180deg)",
      },

      ".SubNavigation__link-content-arrow": {
        height: ["30px"],
        width: ["30px"],
        position: "relative",
        mb: [4, 4],
        left: 0,
        path: {
          stroke: "black",
        },
        line: {
          stroke: "black",
        },
      },
    },
  },
};
