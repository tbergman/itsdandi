export const integrations = {
  topcontent: {
    position: "relative",
    ".TopContent__buttonWrapper": {
      position: "absolute",
      bottom: ["-28px", "-28px", "-28px", "-24px"],
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
    },
    ".TopContent__graphics": {
      position: "absolute",
      left: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
        "unset",
      ],

      right: [
        "unset",
        "unset",
        "unset",
        (t) => t.desktopGutters,
        (t) => t.desktopBigGutters,
        (t) => t.desktopMassiveGutters,
      ],
      bottom: [0],
      overflow: "hidden",
      display: ["flex", "flex", "flex", "unset"],
      alignItems: "flex-end",
      ".TopContent__graphicsWrapper": {
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 60px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
        ],
        position: "relative",
      },
      ".TopContent__graphics-svg": {
        position: "absolute",
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
        ],
        height: [
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 80px) * .85)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 80px) * .85)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 80px) * .85)`,
          (t) => `calc(calc(calc(${t.colWidthDesktop} * 4) + 160px) * .85)`,
          (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 4) + 160px) * .85)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 4) + 160px) * .85)`,
        ],
        left: 0,
        bottom: [
          (t) => `calc(${t.mobileGutters} / -1)`,
          (t) => `calc(${t.mobileGutters} / -1)`,
          (t) => `calc(${t.desktopGutters} / -1)`,

          0,
        ],
        position: "relative",
        svg: {
          position: "absolute",
          height: "100%",
          width: "100%",
          maxHeight: ["unset", "unset", "unset", "375px"],
          bottom: 0,
          g: {
            circle: {
              strokeWidth: [4, 4, 4, 2],
            },
          },
        },
      },
    },
  },
  connections: {
    bg: "transparent",
    color: "black",
    ".text": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
      mt: [10, 10, 10, 18],
      mb: [7, 7, 7, 12],
      display: "flex",
      flexFlow: ["column", "column", "column", "unset"],
      h2: {
        width: [
          "100%",
          "100%",
          "100%",
          (t) => t.desktopSectionWidth,
          (t) => t.desktopSectionWidthBig,
          (t) => t.desktopSectionWidthMassive,
        ],
      },
      p: {
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
        mt: [3, 3, 3, 0],
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
    },
    ".logos": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/3/3/-1"],
      mb: [0, 0, 0, 6],
      mr: [0, 0, 0, 4],
      display: "flex",
      flexFlow: ["row wrap"],
      justifyContent: [
        // "space-between",
        // "space-between",
        // "space-between",
        "flex-start",
      ],
      alignItems: ["center"],
    },
    ".logos__logo": {
      height: ["50px", "50px", "50px", "75px"],
      mb: [3, 3, 4, 8],
      mr: [2, 2, 4, 4, 5, 7],
    },
    ".logos__image": {
      height: ["100%"],
    },
  },
  secure: {
    bg: "transparent",
    color: "black",
    ".Secure__wrapper": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/7"],
      mt: [4, 4, 4, 7],
      mb: [4],
      display: "flex",
      alignItems: "center",
      ".Secure__wrapper-text": {
        ".Secure__wrapper-text-header": {
          ".Secure__wrapper-text-header-text": {},
        },
        ".Secure__wrapper-text-body": {
          mt: [3, 3, 3, 4],
          ".Secure__wrapper-text-body-text": {},
        },

        ".Secure__wrapper-link": {
          mt: [1],
          p: {
            mt: 0,
            fontFamily: "medium",
          },
        },
      },
    },

    ".Secure__graphic": {
      mt: [0, 0, 0, 7],
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/7/2/-1"],
      ml: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      mb: [10, 10, 10, 12],
      display: "flex",
      justifyContent: "center",
      div: {
        height: [
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 40px) * 1.65)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 40px) * 1.65)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 40px) * 1.65)`,
          "235px",
        ],
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
          "150px",
        ],
        div: {
          height: "inherit",
          width: "inherit",
          svg: {
            height: "inherit",
            width: "inherit",
          },
        },
      },
    },
  },
};
