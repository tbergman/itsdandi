export const pricing = {
  header: {
    bg: "transparent",
    color: "black",
    ".text": {
      gridArea: ["1/1/2/-1", "1/2/2/7"],
      mr: [
        "unset",
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      mt: [18, 21],
      mb: [2, 15],
      h1: {
        fontSize: ["32px", "52px"],
        lineHeight: ["38.4px", "58px"],
        maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
      },
      h3: {
        mt: [3],
        fontSize: ["20px"],
        lineHeight: ["30px"],
        maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
      },
    },
    ".graphic": {
      gridArea: ["2/1/3/-1", "1/7/2/-1"],
      mt: [0, 21],
      width: [(t) => `calc(calc(${t.colWidthMob} * 3) + 60px)`, "unset"],
      left: [(t) => `calc(calc(${t.colWidthMob} * 3) + 60px)`, "unset"],
      height: [
        (t) => `calc(calc(calc(${t.colWidthMob} * 3) + 60px) * .6)`,
        "unset",
      ],
      position: "relative",
      ".box1": {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: "100%",
        width: "100%",
        bg: "#C6D9FF",
      },
      ".box2": {
        position: "absolute",
        bg: "#335AFF",
        bottom: 0,
        left: [
          (t) => `calc(${t.colWidthMob} * .5)`,
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 2.5) + 60px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 200px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 200px)`,
        ],
        height: "73%",
      },
      ".box3": {
        position: "absolute",
        bottom: 0,
        height: "40%",
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 1.5) + 20px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 120px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 120px)`,
        ],
        left: [
          (t) => `calc(${t.colWidthMob} + 20px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
        ],
        bg: "#0227C4",
      },
    },
  },
  cost: {
    bg: "#F8F8F8",
    color: "black",
    ".section1": {
      gridArea: ["1/1/2/-1", "1/2/2/7"],
      mt: [5, 16],
      mb: [4, 17],
      ".toptext": {
        mb: [3],
        p: {},
      },
      ".list": {
        ".title": {
          fontFamily: "display",
        },
        ul: {
          pl: [3],
          li: {
            mb: [3],
            listStyle: "none",
            position: "relative",
            "::after": {
              content: "''",
              top: "20%",
              left: "-22px",
              borderRadius: "10px",
              position: "absolute",
              height: "6px",
              width: "6px",
              bg: "blue",
            },
          },
        },
      },
    },
    ".section2": {
      gridArea: ["3/1/4/-1", "1/7/2/-1"],
      mt: [0, 16],
      ml: [
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      mr: [
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      ".calculator": {
        ".description": {
          p: {
            color: "blue",
          },
        },
        ".label": {
          mt: [4],
          display: "flex",
          justifyContent: "space-between",
          p: {
            fontFamily: "display",
            color: "blue",
          },
        },
        ".slider": {
          height: "20px",
          mt: [3],

          "input[type=range]": {
            width: "100%",
            m: 0,
            bg: "transparent",
            appearance: "none",
            height: "2px",
            background: (t) =>
              `linear-gradient(to right, rgba(51, 90, 255, 1) 0%, rgba(51, 90, 255, 1) 10%, rgba(51, 90, 255, .2) 10%, rgba(51, 90, 255, .2) 100%)`,
          },
          "input[type=range]:focus": {
            outline: "none",
          },
          "input[type=range]::-webkit-slider-runnable-track": {
            border: "none",
            width: "100%",
            cursor: "pointer",
          },
          "input[type=range]::-webkit-slider-thumb": {
            width: "24px",
            height: "24px",
            bg: "blue",
            border: "none",
            cursor: "pointer",
            appearance: "none",
            borderRadius: "50px",
          },
        },

        ".result": {
          mt: [5],
          mb: [5],
          h1: {
            fontSize: ["3.4rem", "72px"],

            fontFamily: "display",
            lineHeight: ["100px"],
            color: "blue",
          },
        },
      },
    },
  },
  betterinsights: {
    bg: "black",
    ".BetterInsights__toptext": {
      gridArea: ["1/1/2/-1", "1/2/2/-2"],
      mt: [8, 16],
      mb: [3, 10],
      display: "flex",
      flexFlow: ["column", "unset"],
      ".BetterInsights__toptext-header": {
        ".BetterInsights__toptext-header-text": {
          width: [
            "100%",
            (t) => t.desktopSectionWidth,
            (t) => t.desktopSectionWidthBig,
            (t) => t.desktopSectionWidthMassive,
          ],
        },
      },
      ".BetterInsights__toptext-body": {
        ".BetterInsights__toptext-body-text": {
          mt: [3, 0],
          width: [
            "100%",
            (t) => t.desktopSectionWidth,
            (t) => t.desktopSectionWidthBig,
            (t) => t.desktopSectionWidthMassive,
          ],
          ml: [
            0,
            (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
            (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
            (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
          ],
        },
      },
    },

    ".Table": {
      position: "relative",
      width: "100vw",
      left: [
        "-20px",
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      mb: [9, 16],
      gridArea: ["2/1/3/-1"],

      ".Table__head": {
        position: "relative",
        pl: [
          "20px",
          (t) =>
            `calc(calc(calc(${t.colWidthDesktop}) + ${t.desktopGutters}) + 40px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig}) + 40px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive}) + 40px) + ${t.desktopMassiveGutters})`,
        ],
        pr: [
          "20px",
          (t) => t.desktopGutters,
          (t) => t.desktopBigGutters,
          (t) => t.desktopMassiveGutters,
        ],
        display: "grid",
        gridAutoRows: ["200px"],
        gridTemplateColumns: ["4fr 1fr 1fr 1fr", "4fr 1fr 2fr 1fr"],
        ".Table__head-item": {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          mb: [3, 2],
          position: "relative",
          ".Table__head-item-focusBorder": {
            position: "absolute",
            top: ["30%", "60%"],
            zIndex: 997,
            width: "100%",

            border: (t) => `solid 1px ${t.colors.yellow}`,
          },
          ".Table__head-item-logo": {
            position: "absolute",
            top: ["37%", "unset"],
            left: ["22%"],
            bottom: ["unset", 0],
            transform: ["rotate(90deg)", "rotate(0deg)"],
            transformOrigin: ["bottom left"],
          },
          ".Table__head-item-text": {
            writingMode: ["vertical-rl", "unset"],
            textAlign: ["right", "unset"],
            lineHeight: ["19.2px"],
          },
        },
      },
      ".Table__body": {
        ".Table__body-row": {
          pl: [
            "20px",
            (t) =>
              `calc(calc(calc(${t.colWidthDesktop}) + 40px) + ${t.desktopGutters})`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig}) + 40px) + ${t.desktopBigGutters})`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopMassive}) + 40px) + ${t.desktopMassiveGutters})`,
          ],
          pr: [
            "20px",
            "40px",
            (t) => t.desktopBigGutters,
            (t) => t.desktopMassiveGutters,
          ],
          position: "relative",
          ".Table__body-row-grid": {
            display: "grid",
            ml: [0],
            gridTemplateColumns: ["4fr 1fr 1fr  1fr", "4fr 1fr 2fr 1fr"],
            gridAutoRows: ["auto"],
            ".Table__body-row-grid-item": {
              position: "relative",
              display: "flex",
              alignItems: "center",
              mt: [3, "18px"],
              mb: [3, "18px"],
              ".Table__body-row-grid-item-title": {
                mr: [3, 0],
                position: "relative",
                ".Table__body-row-grid-item-title-text": {
                  display: "inline",

                  mr: [0],
                },

                ".Table__body-row-grid-item-title-infoIcon": {
                  width: "20px",
                  height: "20px",
                  ml: [1],
                  cursor: "pointer",
                  transform: "translateY(4px)",
                },
              },

              ".Table__body-row-grid-item-symbol": {
                fontSize: ["14px"],
                lineHeight: ["16.8px"],
              },
            },
          },
        },
        ".Table__body-row:nth-of-type(2n-1)": {
          bg: "#262629",
        },
      },
      ".Table__itemSymbol": {
        width: "10px",
        height: "10px",
      },
      ".infoBox": {
        position: "absolute",
        zIndex: 998,
        bg: "black",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.75), 0px 8px 30px rgba(0, 0, 0, 0.45)",
        borderRadius: "8px",
        left: ["20px", "110%"],
        bottom: "-200%",
        py: [4],
        px: [4],
      },
      ".infoBox__body": {
        width: ["70vw", "300px"],
        mb: [2],
      },
      ".infoBox__links": {
        display: "flex",
        flexFlow: "column",
      },

      ".infoBox__link": {
        mb: [1],
        a: {
          mb: 0,
        },
        p: {
          fontFamily: "display",
        },
        ".learnMoreLink__arrow": {
          width: "16px",
          height: "16px",
        },
      },
    },
  },
};
