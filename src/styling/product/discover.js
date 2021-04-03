export const discover = {
  topcontent: {
    position: "relative",
    ".buttonwrapper": {
      position: "absolute",
      zIndex: 1,
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
      bottom: ["-26px", "-26px", "-26px", "-24px"],
    },
    ".graphics": {
      position: "absolute",
      left: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 8) + 320px) + ${t.desktopMassiveGutters})`,
      ],
      height: ["90px", "90px", "90px", "310px"],
      bottom: 0,
      right: [
        0,
        0,
        0,
        (t) => t.desktopGutters,
        (t) => t.desktopBigGutters,
        (t) => t.desktopMassiveGutters,
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
