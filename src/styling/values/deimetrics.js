export const deimetrics = {
  topcontent: {
    position: "relative",

    ".graphics": {
      position: "absolute",
      left: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 7) + 280px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 7) + 240px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 7) + 240px) + ${t.desktopMassiveGutters})`,
      ],
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "flex-end",
      svg: {
        width: "100%",
        height: "100%",
      },
    },
  },
  measurementCapabilities: {
    bg: "transparent",
    color: "black",

    ".MeasurementCapabilities__row1": {
      gridArea: ["1/1/2/-1", "1/3/2/-1"],
      mt: [16],
      mb: [7],
    },

    ".MeasurementCapabilities__row2": {
      gridArea: ["2/1/3/-1", "2/3/3/-2"],
    },
  },
  metrics: {
    bg: "transparent",
    color: "black",

    ".container": {
      gridArea: ["1/1/2/-1", "1/3/2/-2"],
    },
  },

  speed: {
    bg: "transparent",
    color: "black",

    ".container": {
      gridArea: ["1/1/2/-1", "1/3/2/-2"],
    },
  },

  intersectional: {
    bg: "black",
    color: "white",
    ".Intersectional__graphic": {
      mt: [10, 16],
      mb: [0, 24],
      gridArea: ["1/1/2/-1", "1/7/2/-1"],
      width: [
        "unset",
        (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 5) + 200px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 5) + 200px)`,
      ],
      height: [
        "225px",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) * .605)`,
        (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) * .605)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) * .605)`,
      ],
      position: "relative",
      ".Intersectional__graphic-image": {
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    },
    ".Intersectional__text": {
      mt: [10, 16],
      mb: [12, 27],
      gridArea: ["2/1/3/-1", "1/3/2/6"],
      ".Intersectional__text-text": {
        lineHeight: ["24px"],
        maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
      },
    },
  },
  thoughtful: {
    bg: "transparent",
    color: "black",
    ".Thoughtful__section1": {
      gridArea: ["1/1/2/-1", "1/3/2/8"],
      mt: [12, 16],
      mb: [5, 19],
      ".Thoughtful__section1-header": {
        ".Thoughtful__section1-header-text": {},
      },
      ".Thoughtful__section1-body": {
        mt: [3, 4],
        pr: [
          "unset",
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
        ".Thoughtful__section1-body-text": {},
      },
    },
    ".Thoughtful__section2": {
      gridArea: ["2/1/3/-1", "1/7/2/-2"],
      ml: [
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      mt: [0, 26],
      ".Thoughtful__section2-body": {
        mt: 0,
        pr: 0,
        ".Thoughtful__section2-body-text": {},
      },
      ".Thoughtful__section2-team": {
        mt: [3],
        ".Thoughtful__section2-team-divider": {
          position: "relative",
          height: "1px",
          width: "100%",
          span: {
            position: "absolute",
            height: "100%",
            width: "100%",
            bg: "#CACACE",
          },
        },
        ".Thoughtful__section2-team-header": {
          mt: [1],
          ".Thoughtful__section2-team-header-text": {
            fontFamily: "medium",
          },
        },
        ".Thoughtful__section2-team-links": {
          mt: [0, 1],
          mb: [12],
          a: {
            mb: [1],
          },
          display: "flex",
          flexFlow: ["column"],
          p: {
            mt: 0,
            fontFamily: "display",
          },
        },
      },
    },
  },
};
