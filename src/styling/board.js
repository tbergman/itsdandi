export const board = {
  header: {
    bg: "transparent",
    color: "black",
    ".text": {
      gridArea: ["1/1/2/-1"],
      mt: [18],
      h1: {},
      h3: {
        mt: [3],
        fontSize: ["18px"],
      },
    },
    ".graphic": {
      gridArea: ["2/1/3/-1"],
      width: "100vw",
      left: ["-20px"],
      position: "relative",
      px: ["20px"],
      mb: [1],
      div: {
        width: "100%",
        height: "100%",
        div: {
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          svg: {
            height: "100%",
          },
        },
      },
    },
  },
  topcontent: {
    position: "relative",

    ".graphics": {
      position: "absolute",
      bottom: [0, "40px"],
      width: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 80px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 80px)`,
        `315px`,
        // (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 80px)`,
      ],
      height: [
        (t) => `calc(calc(calc(${t.colWidthMob} * 3) + 40px) * .88)`,
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 3) + 80px) * .88)`,
        (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) * .88)`,
        `calc(315px * .88)`,
        // (t) =>
        // `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 80px) * .88)`,
      ],

      left: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 80px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 9) + 400px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 9) + 360px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 9) + 360px) + ${t.desktopMassiveGutters})`,
      ],
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  },
};
