export const support = {
  header: {
    bg: "transparent",
    color: "black",
    ".text": {
      gridArea: ["1/1/2/-1"],
      mt: [18],
      mb: [21],
      h1: {},
      h3: {
        mt: [3],
      },
    },
  },
  topcontent: {
    position: "relative",
    ".image": {
      position: "absolute",

      bottom: [
        (t) => `calc(calc(calc(calc(100vw - 20px) * .6) * .3) / -1)`,
        (t) => `calc(calc(calc(calc(100vw - 20px) * .6) * .3) / -1)`,
        (t) => `calc(calc(calc(calc(100vw - 40px) * .6) * .3) / -1)`,
        0,
      ],
      height: [
        (t) => `calc(calc(100vw - 20px) * .6)`,
        (t) => `calc(calc(100vw - 20px) * .6)`,
        (t) => `calc(calc(100vw - 40px) * .6)`,
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 10) + 400px) * .45)`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters}) * .45)`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters}) * .45)`,
      ],
      width: [
        (t) => `calc(100vw - 20px)`,
        (t) => `calc(100vw - 20px)`,
        (t) => `calc(100vw - 40px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        (t) => t.mobileGutters,
        (t) => t.mobileGutters,
        (t) => t.desktopGutters,

        (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 80px) + ${t.desktopMassiveGutters})`,
      ],
      img: {
        position: "absolute",

        width: "100%",
        height: "100%",
        bottom: [0, 0, 0, "-50%"],
      },
    },
  },
  onboarding: {
    bg: "#F8F8F8",
    color: "black",

    ".textmodules": {
      mt: [
        `calc(calc(calc(calc(100vw - 20px) * .6) * .3) + 40px)`,
        `calc(calc(calc(calc(100vw - 20px) * .6) * .3) + 40px)`,
        `calc(calc(calc(calc(100vw - 40px) * .6) * .3) + 40px)`,
        (t) =>
          `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 400px) * .45) * .5) + 128px)`,
        (t) =>
          `calc(calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 360px) + ${t.desktopBigGutters}) * .45) * .5) + 128px)`,
        (t) =>
          `calc(calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 360px) + ${t.desktopMassiveGutters}) * .45) * .5) + 128px)`,
      ],
      mb: [5, 5, 5, 7],
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
      display: "flex",
      flexFlow: ["column"],
      ".textblock": {
        mb: [7, 7, 7, 11],
        display: "flex",
        flexFlow: ["column", "column", "column", "unset"],
        position: "relative",

        ".divider": {
          position: "absolute",
          top: 0,
          height: "1px",
          width: [
            "100vw",
            "100vw",
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters})`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters})`,
          ],
          left: [
            (t) => `calc(${t.mobileGutters} / -1)`,
            (t) => `calc(${t.mobileGutters} / -1)`,
            (t) => `calc(${t.desktopGutters} / -1)`,

            0,
          ],
          span: {
            left: [
              (t) => t.mobileGutters,
              (t) => t.mobileGutters,
              (t) => t.desktopGutters,

              0,
            ],
            position: "absolute",
            height: ["100%"],
            bg: "black",
            right: 0,
          },
        },
        ".toptext": {
          width: [
            "100%",
            "100%",
            "100%",
            (t) => t.desktopSectionWidth,
            (t) => t.desktopSectionWidthBig,
            (t) => t.desktopSectionWidthMassive,
          ],
          mt: [2],
          mb: [3],
          h2: {
            maxWidth: [
              "unset",
              "unset",
              "unset",
              (t) => t.desktopMaxSectionWidth,
            ],
          },
          p: {
            mt: [1],
            maxWidth: [
              "unset",
              "unset",
              "unset",
              (t) => t.desktopMaxSectionWidth,
            ],
          },
        },
        ".list": {
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
            maxWidth: [
              "unset",
              "unset",
              "unset",
              (t) => t.desktopMaxSectionWidth,
            ],
          },
          mt: [2],
          ".listtitle": {
            mb: [1],

            fontFamily: "display",
          },
          ".listbox": {
            display: "flex",
            flexFlow: "column",
            ".listitem": {
              mb: [2],
              position: "relative",
              pl: [3],
              p: {
                maxWidth: [
                  "unset",
                  "unset",
                  "unset",
                  (t) => t.desktopMaxSectionWidth,
                ],
              },
              ":after": {
                content: "''",
                position: "absolute",
                height: ["8px"],
                width: ["8px"],
                borderRadius: ["8px"],
                bg: "blue",
                top: "25%",
                left: 0,
              },
            },
          },
        },
      },
    },
  },
  getcreative: {
    bg: "transparent",
    color: "black",
    mt: [6, 6, 6, 13],
    mb: [0, 0, 0, 16],
    ".textblock": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
      mb: [7],
      position: "relative",
      display: "flex",
      flexFlow: ["column", "column", "column", "unset"],

      ".divider": {
        position: "absolute",
        height: "1px",
        top: 0,
        width: [
          "100vw",
          "100vw",
          "100vw",
          (t) => `calc(calc(${t.colWidthDesktop} * 10) +  400px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 10) +  360px) + ${t.desktopMassiveGutters})`,
        ],
        left: [
          (t) => `calc(${t.mobileGutters} / -1)`,
          (t) => `calc(${t.mobileGutters} / -1)`,
          (t) => `calc(${t.desktopGutters} / -1)`,

          0,
        ],
        span: {
          left: [
            (t) => t.mobileGutters,
            (t) => t.mobileGutters,
            (t) => t.desktopGutters,
            0,
          ],
          position: "absolute",
          height: ["100%"],
          bg: "black",
          right: 0,
        },
      },
      ".toptext": {
        width: [
          "100%",
          "100%",
          "100%",
          (t) => t.desktopSectionWidth,
          (t) => t.desktopSectionWidthBig,
          (t) => t.desktopSectionWidthMassive,
        ],
        mt: [2],
        mb: [3],
        h2: {},
        p: { mt: [1] },
      },
      ".list": {
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
        mt: [2],
        ".listtitle": {
          mb: [1],
          fontFamily: "display",
        },
        ".listbox": {
          display: "flex",
          flexFlow: "column",
          ".listitem": {
            mb: [2],
            position: "relative",
            pl: [3],
            ":after": {
              content: "''",
              position: "absolute",
              height: ["8px"],
              width: ["8px"],
              borderRadius: ["8px"],
              bg: "blue",
              top: "25%",
              left: 0,
            },
          },
        },
      },
    },
  },
};
