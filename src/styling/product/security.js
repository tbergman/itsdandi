export const security = {
  header: {
    bg: "transparent",
    ".text": {
      gridArea: ["1/1/2/-1"],
      mt: [18],
      color: "black",
      h1: {},
      h3: {
        mt: [2],
        mb: [12],
        fontWeight: "400",
        lineHeight: ["30px"],
        fontSize: ["20px"],
      },
    },
    ".buttonWrapper": {
      gridArea: ["2/1/3/-1"],
      position: "relative",
      ".button": {
        position: "absolute",
        top: ["-28px"],
      },
    },
  },
  topcontent: {
    position: "relative",

    ".TopContent__btnWrapper": {
      position: "absolute",
      bottom: ["-28px", "-28px", "-28px", "-24px"],
      zIndex: 99,
      left: [
        (t) => t.mobileGutters,
        (t) => t.mobileGutters,
        (t) => t.desktopGutters,
        (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
      ],
      ".TopContent__btnWrapper-btn": {},
    },
    ".TopContent__graphics": {
      position: "absolute",
      zIndex: "1",
      left: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 160px)`,
        "unset",
      ],
      width: [
        "unset",
        "unset",
        "unset",
        (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 120px)`,
      ],
      height: ["126px", "126px", "126px", "34em"],
      bottom: [0, 0, 0, "-6em"],
      right: [
        0,
        0,
        0,
        "40px",
        (t) => t.desktopBigGutters,
        (t) => t.desktopMassiveGutters,
      ],
      overflow: "hidden",
      ".TopContent__graphics-chainsDesktop": {
        position: "absolute",
        left: ["-6%", "-6%", "-6%", 0],
        bottom: ["-35%", "-35%", "-35%", 0],
        height: ["unset", "unset", "unset", "100%"],
        width: ["unset", "unset", "unset", "100%"],
        maxHeight: "500px",
      },
      ".TopContent__graphics-chainsMobile": {
        position: "absolute",
        left: ["-6%", "-6%", "-6%", 0],
        bottom: ["-35%", "-35%", "-35%", 0],
        height: ["unset", "unset", "unset", "100%"],
        width: ["unset", "unset", "unset", "100%"],
      },
    },
  },
  bestinclass: {
    bg: "black",
    position: "relative",
    zIndex: 9,
    ".toptext": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/8"],
      mt: [10, 10, 10, 16],

      h2: {},
      p: {
        mt: [3, 3, 3, 4],
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
    },
    ".modules": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/3/3/-2"],
      mt: [5],
      mb: [5],
      display: "flex",
      flexFlow: "column",
      mb: [12],
      ".module": {
        mb: [5, 5, 5, 8],

        position: "relative",
        ".divider": {
          position: "relative",
          height: ["10px"],
          width: "100%",
          svg: {
            height: "100%",
            width: "100%",
            position: "absolute",
          },
        },
        ".text": {
          mt: [1],
          display: "flex",
          flexFlow: ["column", "column", "column", "row"],
          justifyContent: ["space-between"],
          p: {
            width: [
              "100%",
              "100%",
              "100%",
              (t) => `calc(${t.colWidthDesktop} * 3)`,
              (t) => `calc(${t.colWidthDesktopBig} * 3)`,
              (t) => `calc(${t.colWidthDesktopMassive} * 3)`,
            ],
            pr: ["60px", "60px", "60px", 4],
          },
        },
      },
    },
  },
  workflows: {
    bg: "transparent",
    position: "relative",
    color: "black",
    ".Workflows__graphic": {
      mb: [10, 10, 10, 0],
      position: ["relative", "relative", "relative", "absolute"],
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/2/3/7"],
      ml: [0],
      zIndex: 1,
      overflow: "hidden",
      height: ["unset", "unset", "400px", "100%"],
      width: [
        "100vw",
        "100vw",
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
      ],
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
      ],

      display: "flex",
      alignItems: ["flex-end", "flex-end", "flex-end", "center"],
      // div: {
      //   width: ["100%"],
      //   pt: ["100%"],
      //   height: [0],
      //   left: [
      //     (t) => `calc(${t.colWidthMob} + 30px)`,
      //     (t) => `calc(${t.colWidthMob} + 30px)`,
      //     (t) => `calc(${t.colWidthMob} + 30px)`,
      //     "unset",
      //   ],
      //   position: "relative",
      //   div: {
      //     position: "absolute",
      //     top: 0,
      //     left: 0,
      //     svg: {
      //       position: "absolute",
      //       top: 0,
      //       left: 0,
      //       width: "100%",
      //       height: "100%",
      //     },
      //   },
      // },
    },
    ".Workflows__svg": {
      position: ["relative", "relative", "absolute", "relative"],
      right: ["unset", "unset", -80, "unset"],
      top: ["unset", "unset", 0, "unset"],
      height: ["unset", "unset", "100%", "unset"],
    },
    ".Workflows__section1": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/6/2/-1"],
      zIndex: 99,
      mt: [6, 6, 6, 26],
      mb: [8, 8, 8, 5],
    },
    ".Workflows__topText": {
      mr: [
        0,
        0,
        0,
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 80px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 80px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 80px)`,
      ],
    },
    ".Workflows__body": {
      mt: [3],
      maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
    },
    ".Workflows__section2": {
      gridArea: ["2/1/3/5", "2/1/3/5", "2/1/3/5", "2/6/3/-1"],
      mb: [10, 10, 10, 26],
    },
    ".Workflows__categories": {
      zIndex: 99,

      pt: [1, 1, 1, 0],
      pb: [1, 1, 1, 0],
      height: ["100%", "100%", "100%", "unset"],
      display: "flex",
      flexFlow: ["column", "column", "column", "row"],
      justifyContent: [
        "space-between",
        "space-between",
        "space-between",
        "unset",
      ],
    },
    ".Workflows__category": {
      zIndex: 99,
      width: [
        "100%",
        "100%",
        "100%",
        (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
      ],
      mr: ["40px"],
    },
    ".Workflows__categoryBody": {
      mt: [0, 0, 0, 2],
    },
    ".Workflows__categoryHeaderText": {
      fontFamily: "display",
    },
    ".Workflows__categoryBodyText": {
      fontFamily: "body",
    },
  },
  connect: {
    bg: "transparent",
    color: "black",
    ".wrapper": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/8"],
      display: "flex",
      alignItems: "center",
      ".text": {
        ".link": {
          mt: [1],
          p: {
            fontFamily: "medium",
          },
        },
      },
    },

    ".graphic": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/7/2/-1"],
      mt: [6, 6, 6, 16],
      mb: [12, 12, 12, 16],
      width: [
        "auto",
        "auto",
        "auto",
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 160px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 160px)`,
      ],
      mr: [
        "unset",
        "unset",
        "unset",
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      ml: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],

      height: [
        "auto",
        "auto",
        "auto",
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 160px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 160px)`,
      ],
      display: "flex",

      justifyContent: ["center", "center", "center", "flex-end"],
      div: {
        position: "relative",
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
          "100%",
        ],
        height: [0, 0, 0, "100%"],
        pt: ["103%", "103%", "103%", 0],
        div: {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          svg: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          },
        },
      },
    },
  },
};
