export const leadership = {
  topimage: {
    position: "absolute",
    overflow: "hidden",
    width: [
      "calc(100vw - 20px)",
      (t) => `calc(calc(${t.colWidthDesktop} * 10) +  400px)`,
      (t) =>
        `calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters})`,
      (t) =>
        `calc(calc(calc(${t.colWidthDesktopMassive} * 10) +  360px) + ${t.desktopMassiveGutters})`,
    ],
    right: 0,
    top: [
      (t) => `calc(calc(calc(calc(100vw - 20px) * .6) * .7) / -1)`,
      (t) =>
        `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .46) * .5) / -1)`,
      (t) =>
        `calc(calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}) * .46) * .5) / -1)`,
      (t) =>
        `calc(calc(calc(calc(calc(calc(${t.colWidthDesktopMassive} * 10) +  360px) + ${t.desktopMassiveGutters}) * .46) * .5) / -1)`,
    ],
    height: [
      0,
      (t) => `calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .46)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}) * .46)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 10) +  360px) + ${t.desktopMassiveGutters}) * .46)`,
    ],
    pt: ["60%", 0],
    img: {
      position: "absolute",
      //   height: "100%",
      width: "100%",
      top: 0,
      left: 0,
    },
  },
  textmodules: {
    pt: [
      `calc(calc(calc(calc(100vw - 20px) * .6) * .3) + 40px)`,
      (t) =>
        `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .46) * .5) + 115px)`,
      (t) =>
        `calc(calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}) * .46) * .5) + 115px)`,
      (t) =>
        `calc(calc(calc(calc(calc(calc(${t.colWidthDesktopMassive} * 10) +  360px) + ${t.desktopMassiveGutters}) * .46) * .5) + 115px)`,
    ],
    bg: "lightGray",

    ".TextModules__wrapper": {
      gridArea: ["1/1/2/-1", "1/3/2/-1"],
      ml: [0],
      ".TextModules__wrapper-module": {
        color: "black",
        position: "relative",
        display: "flex",
        flexFlow: ["column", "unset"],
        pt: [2],
        mb: [6, 11],
        ".TextModules__wrapper-module-divider": {
          position: "absolute",
          top: 0,
          width: [
            "calc(100vw - 20px)",
            (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters})`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters})`,
          ],

          height: ["1px"],
          span: {
            position: "absolute",
            height: "100%",
            width: "100%",
            bg: "black",
          },
        },
        ".TextModules__wrapper-module-section1": {
          width: [
            "100%",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 160px)`,
            (t) => `calc(calc(${t.colWidthDesktopBig} * 5) + 160px)`,
            (t) => `calc(calc(${t.colWidthDesktopMassive} * 5) + 160px)`,
          ],

          ".TextModules__wrapper-module-section1-header": {
            ".TextModules__wrapper-module-section1-header-text": {
              fontFamily: "display",
            },
          },
        },
        ".TextModules__wrapper-module-section2": {
          width: [
            "100%",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
            (t) => `calc(calc(${t.colWidthDesktopBig} * 5) + 200px)`,
            (t) => `calc(calc(${t.colWidthDesktopMassive} * 5) + 200px)`,
          ],
          mt: [3, 0],
          pr: [
            "20px",
            (t) => `calc(calc(${t.colWidthDesktop}) + 40px)`,
            (t) => `calc(calc(${t.colWidthDesktopBig}) + 40px)`,
            (t) => `calc(calc(${t.colWidthDesktopMassive}) + 40px)`,
          ],
          ".TextModules__wrapper-module-section2-body": {
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            ".TextModules__wrapper-module-section2-body-text": {
              lineHeight: ["24px"],
              fontSize: ["16px"],
            },
          },
          ".TextModules__wrapper-module-section2-linkSection": {
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            ".TextModules__wrapper-module-section2-linkSection-description": {
              fontFamily: "medium",
            },
            mt: [1],
            ".TextModules__wrapper-module-section2-linkSection-link": {
              mt: [0, 1],
              p: {
                p: 0,
                fontFamily: "medium",
                lineHeight: "18.88px",
              },
            },
          },
        },
      },
    },
  },
};
