export const datacollection = {
  topcontent: {
    position: "relative",
    ".buttonwrapper": {
      position: "absolute",
      zIndex: 1,
      left: [
        "20px",
        "20px",
        "20px",
        (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
      ],
      bottom: ["-26px", "-26px", "-26px", "-24px"],
    },
    ".graphics": {
      position: "absolute",
      left: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktop} * 7) + 240px) + ${t.desktopGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 7) + 240px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 7) + 240px) + ${t.desktopMassiveGutters})`,
      ],
      height: ["90x", "90x", "90x", "150px"],
      bottom: [0, 0, 0, "-20px", 0],
      right: [
        0,
        0,
        0,

        (t) => `calc(${t.desktopGutters} + ${t.colWidthDesktop})`,
        (t) => `calc(${t.desktopBigGutters} + ${t.colWidthDesktopBig})`,
        (t) => `calc(${t.desktopMassiveGutters} + ${t.colWidthDesktopMassive})`,
      ],
      overflow: "hidden",
      display: ["none", "none", "none", "flex"],
      alignItems: "flex-end",
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  },
};
