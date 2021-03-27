export const people = {
  bg: "#F8F8F8",
  color: "black",
  ".toptext": {
    mt: [8, 16],
    mb: [12],
    gridArea: ["1/1/2/-1", "1/3/2/-1"],
    display: "flex",
    flexFlow: ["column", "unset"],

    ".section1": {
      width: [
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],
      h2: {
        maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
      },
    },
    ".section2": {
      ml: [
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      width: [
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],

      p: {
        mt: [2, 1],
        maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
      },
    },
  },

  ".people": {
    gridArea: ["2/1/3/-1", "2/3/3/-1"],
    width: ["unset"],
    left: ["unset"],
    position: "relative",
    mb: [14, 16],
    display: "flex",
    flexFlow: ["row wrap"],
    justifyContent: ["space-between", "unset"],
    ".person:nth-of-type(4n)": {
      mr: 0,
    },
    ".person": {
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
      width: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 120px)`,
      ],

      mb: [4],
      display: "flex",
      flexFlow: ["column", "row"],
      alignItems: ["unset", "flex-start"],
      ".imagewrapper": {
        clipPath: ["circle(80px)", "circle(50%)"],
        position: "relative",
        width: [
          "160px",
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
        height: [
          "160px",
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
        img: {
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
        },
      },
      ".text": {
        mt: [1, 0],
        ml: [1, "40px"],
        mb: [0],
        width: [
          "150px",

          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
        ],
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
};
