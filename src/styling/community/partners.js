export const partners = {
  topcontent: {
    position: "relative",
    ".graphics": {
      position: "absolute",
      bottom: 0,
      maxHeight: ["350px"],
      left: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`,
        (t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`,
        // (t) => `calc(calc(${t.colWidthTablet} * 3) + 70px)`,
        "unset",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 8) + 320px) + 40px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 8) + 320px) + ${t.desktopMassiveGutters})`,
      ],
      right: ["unset", "unset", 0, "unset"],
      width: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`,
        (t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`,
        (t) => `calc(calc(${t.colWidthTablet} * 2) + 60px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 120px)`,
      ],
      height: [
        "unset",
        "unset",
        "unset",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 3) + 120px) * .86)`,
        (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 120px) * .86)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 120px) * .86)`,
      ],
      display: ["flex"],
      alignItems: "flex-end",
      svg: {
        position: ["unset", "unset", "unset", "absolute"],
        width: "100%",
        height: ["100%"],
      },
    },
  },
  domore: {
    bg: "#F8F8F8",
    color: "black",
    ".text": {
      gridArea: ["1/1/2/-1"],
      mt: [8],
      mb: [8],
      h2: {},
      p: {
        mt: [3],
      },
    },
    ".people": {
      gridArea: ["2/1/3/-1"],
      width: ["100vw"],
      left: ["-20px"],
      position: "relative",
      mb: [8],
      display: "flex",
      flexFlow: ["row wrap"],
      justifyContent: ["space-between"],
      ".person": {
        flex: "0 50%",
        mb: [4],
        display: "flex",
        flexFlow: ["column"],
        alignItems: "center",
        ".imagewrapper": {
          clipPath: ["circle(80px)"],
          position: "relative",
          width: ["160px"],
          height: ["160px"],
          img: {
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
          },
        },
        ".text": {
          mt: [1],
          ml: [1],
          mb: [0],
          width: ["150px"],
          ".name": {
            mt: 0,
            mb: 0,
            fontSize: ["14px"],
            fontWeight: "400",
            fontFamily: "display",
            lineHeight: ["21px"],
          },
          ".title": {
            mt: 0,
            mb: 0,
            fontSize: ["13px"],
            fontWeight: "400",
            fontFamily: "body",
            lineHeight: ["19.5px"],
          },
        },
      },
    },
  },
  curious: {
    bg: "transparent",
    color: "black",
    ".section1": {
      width: [
        "100%",
        "100%",
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],
      h2: {
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
    },
    ".section2": {
      width: [
        "100%",
        "100%",
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],
      ml: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      p: {
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
    },

    ".row1": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
      display: "flex",
      flexFlow: ["column", "column", "column", "unset"],
      mt: [8, 8, 8, 16],

      p: {
        mt: [3],
      },
    },
    ".row2": {
      display: "flex",
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/3/3/-1"],
      flexFlow: ["column", "column", "column", "unset"],
      mt: [8, 8, 8, 20],
      mb: [13, 13, 13, 21],

      p: {
        mt: [3],
      },
      ".link": {
        mt: [1],
        p: {
          mt: 0,

          fontFamily: "display",
        },
      },
    },
  },
};
