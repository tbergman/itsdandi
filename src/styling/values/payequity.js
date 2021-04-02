export const payequity = {
  topgraphic: {
    position: "absolute",
    bottom: [
      `calc(calc(calc(100vw - 80px) * .55) / -1)`,
      `calc(calc(calc(100vw - 80px) * .55) / -1)`,
      `calc(calc(calc(100vw - 80px) * .55) / -1)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktop} * 4) + 120px) * .55) / -1)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktopBig} * 4) + 220px) * .55) / -1)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 4) + 220px) * .55) / -1)`,
    ],
    left: [
      "40px",
      "40px",
      "40px",
      (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`,
      (t) =>
        `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters})`,
      (t) =>
        `calc(calc(calc(${t.colWidthDesktopMassive} * 8) + 320px) + ${t.desktopMassiveGutters})`,
    ],
    height: [
      `calc(100vw - 80px)`,
      `calc(100vw - 80px)`,
      `calc(100vw - 80px)`,
      (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
      (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 220px)`,
      (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 220px)`,
    ],
    width: [
      `calc(100vw - 80px)`,
      `calc(100vw - 80px)`,
      `calc(100vw - 80px)`,
      (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
      (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 220px)`,
      (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 220px)`,
    ],
    img: {
      position: "absolute",
      height: "100%",
      width: "100%",
    },
  },
  compensation: {
    bg: "lightGray",
    ".top": {
      position: "relative",
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-2"],
      mt: [8, 8, 8, 16],
      color: "black",
      h2: {
        fontFamily: "display",
        fontSize: ["32px", "32px", "32px", "40px"],
        lineHeight: ["38.4px", "38.4px", "38.4px", "48px"],
      },
      ".body": {
        display: "flex",
        flexFlow: ["column", "column", "column", "unset"],
        mt: [3],
        mb: [
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .25) + 64px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .25) + 64px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .25) + 64px)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33) * .51) + 88px)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33) * .51) + 88px)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthDesktopMassive} * 9) + 320px) * .33) * .51) + 88px)`,
        ],
        ".section1": {
          width: [
            "unset",
            "unset",
            "unset",
            (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
            (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
            (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
          ],
          mr: [
            0,
            0,
            0,

            (t) => `calc(${t.colWidthDesktop})`,
            (t) => t.colWidthDesktopBig,
            (t) => t.colWidthDesktopMassive,
          ],
        },
        ".section2": {
          mt: [3, 3, 3, 0],
          width: [
            "unset",
            "unset",
            "unset",
            (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
            (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
            (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
          ],
        },
        p: {
          fontFamily: "body",
          fontSize: "16px",
          lineHeight: "24px",
          maxWidth: [
            "unset",
            "unset",
            "unset",
            (t) => t.desktopMaxSectionWidth,
          ],
        },
      },

      ".compensationTopGraphic": {
        position: ["absolute"],
        height: [
          (t) => `calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87)`,
          (t) => `calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33)`,
          (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 9) + 320px) * .33)`,
        ],
        bottom: [
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87) * .85) / -1)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87) * .85) / -1)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87) * .85) / -1)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33) * .49) / -1)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33) * .49) / -1)`,
          (t) =>
            `calc(calc(calc(calc(calc(${t.colWidthDesktopMassive} * 9) + 320px) * .33) * .49) / -1)`,
        ],
        width: [
          "100%",
          "100%",
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 9) + 320px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 9) + 320px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 9) + 320px)`,
        ],
        ".compensationTopGraphic__svg": {
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: 99,
          ".compensationTopGraphic__svg-group": {
            ".compensationTopGraphic__svg-group-circle": {
              transform: "scale(0)",
            },
          },
        },
      },
    },
  },
  compensationgraph: {
    bg: "black",
    ".wrapper": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-2"],
      display: "flex",
      flexFlow: ["column-reverse", "column-reverse", "column-reverse", "unset"],
      alignItems: "flex-start",
      mt: [
        (t) =>
          `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .85) + 48px)`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .85) + 48px)`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .85) + 48px)`,
        (t) =>
          `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33) * .51) + 72px)`,
        (t) =>
          `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33) * .51) + 72px)`,
        (t) =>
          `calc(calc(calc(calc(calc(${t.colWidthDesktopMassive} * 9) + 320px) * .33) * .51) + 72px)`,
      ],
      mb: [13],
      ".graph": {
        position: "relative",
        height: ["206px", "206px", "206px", "215px"],
        left: ["-20px", "-20px", "-20px", "unset"],
        mb: [6, 6, 6, 0],
        width: [
          "100%",
          "100%",
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
        ],
        ".maingraph": {
          width: "100%",
          height: "100%",
          display: "flex",
          ".yAxis": {
            flex: "1 25%",
            position: "relative",
            ".bar": {
              position: "absolute",
              left: "50%",
              borderLeft: "2px solid #00FCFF",
              bottom: 0,

              h3: {
                pl: [1],
                pt: [1],
                width: "25%",
                color: "#00FCFF",
                lineHeight: ["9px"],
              },
            },
          },
        },
        ".divider": {
          display: ["none", "none", "none", "unset"],
          position: "absolute",
          width: "100%",
          height: "1px",
          bg: "#3A3A3D",
          bottom: 0,
        },
        ".labels": {
          mt: ["30px", "30px", "30px", 0],
          width: "100%",
          display: "flex",
          ".label": {
            flex: "1 25%",
            display: "flex",
            justifyContent: "center",
            p: {
              fontSize: ["11px"],
              color: "white",
              opacity: 0.7,
              lineHeight: "14px",
            },
          },
        },
      },
      ".text": {
        ml: [
          0,
          0,
          0,
          (t) => `calc(${t.colWidthDesktop})`,
          (t) => `calc(${t.colWidthDesktopBig})`,
          (t) => `calc(${t.colWidthDesktopMassive})`,
        ],
        mb: [7, 7, 7, 0],
        width: [
          "unset",
          "unset",
          "unset",
          (t) => `calc(calc(${t.colWidthDesktop} * 4) +  160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) +  160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) +  160px)`,
        ],
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
  },
  reports: {
    ".text": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
      color: "black",
      display: "flex",
      flexFlow: ["column", "column", "column", "unset"],
      mt: [10, 10, 10, 16],
      mb: [8, 8, 8, 20],
      ".heading": {
        width: [
          "100%",
          "100%",
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
        ],
        h2: {
          fontFamily: "display",
          maxWidth: [
            "unset",
            "unset",
            "unset",
            (t) => t.desktopMaxSectionWidth,
          ],
        },
      },
      ".body": {
        mt: [3, 3, 3, 0],
        ml: [
          0,
          0,
          0,

          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
        width: [
          "100%",
          "100%",
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
        ],
        display: "flex",
        flexFlow: "column",
        p: {
          fontSize: "16px",
          lineHeight: "24px",
          maxWidth: [
            "unset",
            "unset",
            "unset",
            (t) => t.desktopMaxSectionWidth,
          ],
        },
        ".section1": {},
        ".section2": {
          mt: [3],
        },
      },
    },
  },

  affordable: {
    bg: "transparent",
    color: "black",
    ".Affordable__text": {
      mt: [8, 8, 8, "268px"],
      mb: [0, 0, 0, "307px"],
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/7/2/-1"],
      ml: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],

      ".Affordable__text-header": {
        ".Affordable__text-header-text": {
          fontFamily: "display",
        },
      },
      ".Affordable__text-body": {
        mt: [3, 3, 3, 4],
        ".Affordable__text-body-text": {
          fontSize: "16px",
        },
      },

      ".Affordable__text-link": {
        p: {
          mt: [0],
          fontFamily: "medium",
          fontSize: "16px",
        },
      },
    },
    ".Affordable__graphic": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/2/2/7"],
      position: "relative",
      mb: [10, 10, 10, 0],
      height: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
        "100%",
      ],
      width: [
        (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
        (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 200px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 200px)`,
      ],
      left: [
        (t) => t.colWidthMob,
        (t) => t.colWidthMob,
        (t) => t.colWidthMob,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      display: ["unset", "unset", "unset", "flex"],
      alignItems: "center",
      ".Affordable__graphic-image": {
        position: ["absolute", "absolute", "absolute", "relative"],
        top: [0, 0, 0, "unset"],
        left: [0, 0, 0, "unset"],
        width: "100%",
        height: [
          "100%",
          "100%",
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 200px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 200px)`,
        ],
      },
    },
  },
};
