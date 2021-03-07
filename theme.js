import { home } from "./src/styling/home";
import { payequity } from "./src/styling/values/payequity";
import { navigation } from "./src/styling/navigation";
import { mobileNavigation } from "./src/styling/mobilenavigation";
import { navBarVariants } from "./src/styling/navbarvariants";
import { submenu } from "./src/styling/submenu";
import { subnavigation } from "./src/styling/subnavigation";
import { leadership } from "./src/styling/values/leadership";

const theme = {
  breakpoints: ["1024px", "1500px", "2000px"],
  fonts: {
    body: '"Dandi Grotesk", sans-serif',
    display: '"Dandi Grotesk Display", sans-serif',
    medium: '"Dandi Grotesk Medium", sans-serif',
  },
  space: [
    0,
    8,
    16,
    24,
    32,
    40,
    48,
    56,
    64,
    72,
    80,
    88,
    96,
    104,
    112,
    120,
    128,
    136,
    144,
    152,
    160,
    168,
    176,
    184,
    192,
    200,
    208,
    216,
    224,
    232,
    240,
  ],
  fontWeights: {
    normal: 500,
    bold: 500,
  },
  fontSizes: {
    heading1: ["36px", "60px"],
    heading2: ["32px", "40px"],
    heading3: ["28px", "28px"],
    heading4: ["18px", "18px"],
    body: ["16px", "20px"],
    small: ["13px", "13px"],
    nav: ["14px", "14px"],
  },
  lineHeights: {
    heading1: ["43.2px", "64px"],
    heading2: ["38.4px", "48px"],
    heading3: ["32px", "32px"],
    heading4: ["26px", "26px"],
    body: ["24px", "32px"],
    small: ["15.34px", "15.34px"],
  },
  colors: {
    black: "#1A1A1D",
    grey: "#909095",
    white: "#f2f2f2",
    lightGray: "#F8F8F8",
    clearWhite: "#FFFFFF",
    orange: "#FF9133",
    yellow: "#FFD93B",
    lightYellow: "#FBF792",
    darkTurquoise: "#1A1A1D",
    turquoise: "#A4F0F4",
    lightTurquoise: "#DFFFFF",
    darkBlue: "#0227C5",
    blue: "#335AFF",
    lightBlue: "#C6D9FF",
    darkViolet: "#A837F8",
    violet: "#F9D2FF",
    lightViolet: "#FDF1FF",
  },

  desktopMaxSectionWidth: "475px",
  desktopBigGutters: `calc(100vw * .12)`,
  desktopMassiveGutters: `calc(100vw*.175)`,
  desktopGutters: `40px`,
  mobileGutters: `20px`,
  colWidthMob: `calc(calc(100vw - 140px)/6)`,
  colWidthDesktop: `calc(calc(calc(100vw - 440px) - 80px)/12)`,
  colWidthDesktopBig: `calc(calc(100vw - calc(calc(calc(100vw * .12) * 2) + 440px)) / 12)`,
  colWidthDesktopMassive: `calc(calc(100vw - calc(calc(calc(100vw * .175) * 2) + 440px)) / 12)`,
  desktopSectionWidth: `calc(calc(calc(calc(calc(100vw - 440px) - 80px) /12) * 4) + 160px)`,
  desktopSectionWidthBig: `calc(calc(calc(calc(calc(100vw - 440px) - calc(calc(100vw * .12) * 2)) / 12) * 4) + 160px)`,
  desktopSectionWidthMassive: `calc(calc(calc(calc(calc(100vw - 440px) - calc(calc(100vw * .175) * 2)) / 12) * 4) + 160px)`,
  grid: {
    display: "grid",
    gridTemplateColumns: ["repeat(6,1fr)", "repeat(12,1fr)"],
    gridTemplateRows: "auto",
    columnGap: ["20px", "40px"],
    rowGap: 0,
    mx: [
      (t) => t.mobileGutters,
      (t) => t.desktopGutters,
      (t) => t.desktopBigGutters,
      (t) => t.desktopMassiveGutters,
    ],
  },
  pages: {
    home: { ...home },
    values: {
      payequity: { ...payequity },
      deijourney: {
        topgraphic: {
          position: "absolute",
          zIndex: 99,
          right: [
            "20px",
            (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig}) + 40px) + ${t.desktopBigGutters})`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopMassive}) + 40px) + ${t.desktopMassiveGutters})`,
          ],
          width: [(t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`, "200px"],
          height: [(t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`, "200px"],
          top: [(t) => `calc(calc(${t.colWidthMob} + 20px) / -1)`, "-100px"],
          div: {
            height: "100%",
            width: "100%",
            div: {
              svg: {
                height: "100%",
                width: "100%",
              },
            },
          },
        },
        textblock: {
          color: "black",
          ".TextBlock__header": {
            mt: [10, 16],
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            fontFamily: "display",
          },
          ".TextBlock__textWrapper": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            mt: [3, 5],
            mb: [7, 18],
            display: "flex",
            flexFlow: ["column", "row wrap"],
            ".TextBlock__textWrapper-section": {
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
              ],
              ".TextBlock__textWrapper-section-title": {
                fontFamily: "medium",
                fontSize: ["16px"],
                lineHeight: ["24px"],
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
              ".TextBlock__textWrapper-section-body": {
                fontSize: ["16px"],
                lineHeight: ["24px"],
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
            ".TextBlock__textWrapper-section:nth-of-type(2n)": {
              // ml: [0, (t) => `calc(${t.colWidthDesktop})`],
            },
            ".TextBlock__textWrapper-section:nth-of-type(1)": {
              order: ["unset", 1],
            },
            ".TextBlock__textWrapper-section:nth-of-type(3)": {
              order: ["unset", 2],
              ml: [
                0,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
            },
            ".TextBlock__textWrapper-section:nth-of-type(2)": {
              order: ["unset", 3],
            },
            ".TextBlock__textWrapper-section:nth-of-type(4)": {
              order: ["unset", 4],
              ml: [
                0,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
            },
          },
        },
        partners: {
          bg: "rgba(250, 250, 250, 0.96)",
          color: "black",
          ".Partners__graphic": {
            gridArea: ["1/1/2/-1", "1/8/2/-1"],
            position: "relative",

            display: "flex",
            justifyContent: "center",
            alignItems: ["unset", "center"],
            div: {
              position: ["absolute", "relative"],
              width: [
                (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
                "288px",
              ],
              height: [
                (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
                "288px",
              ],
              top: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 30px) / -1)`,
                "unset",
              ],
              left: [(t) => `calc(${t.colWidthMob} + 20px)`, 0],
              div: {
                top: 0,
                left: 0,
                svg: {
                  height: "100%",
                  width: "100%",
                },
              },
            },
          },
          ".Partners__text": {
            gridArea: ["2/1/3/-1", "1/3/2/8"],
            mt: [18],
            mb: [10, 19],
            ".Partners__text-header": {
              ".Partners__text-header-text": {
                fontFamily: "display",
              },
            },
            ".Partners__text-body": {
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              mt: [3, 4],
              ".Partners__text-body-text": {
                fontSize: ["16px"],
                lineHeight: ["24px"],
              },
            },

            ".Partners__link": {
              mt: [1],

              p: {
                mt: 0,
                fontFamily: "display",
                fontWeight: "500",
              },
            },
          },
        },
      },
      leadership: { ...leadership },
    },
    product: {
      measure: {
        topcontent: {
          position: "relative",
          ".buttonwrapper": {
            position: "absolute",
            bottom: ["-28px", "-24px"],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
            ],
          },
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
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            svg: {
              width: "100%",
              height: "100%",
            },
          },
        },
        metrics: {
          bg: "transparent",
          color: "black",

          ".section1": {
            mt: [10, 16],
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            h2: {
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".section2": {
            mt: [3, 16],
            gridArea: ["2/1/3/-1", "1/7/2/-2"],
            ml: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            mb: [10, 16],
            p: {
              lineHeight: ["24px"],
              fontSize: ["16px"],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
        },
        whymeasure: {
          bg: "transparent",
          color: "black",

          ".WhyMeasure__top": {
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            display: "flex",
            flexFlow: ["column", "unset"],
            mt: [8, 16],
            mb: [6, 13],
            ".WhyMeasure__top-section1": {
              flex: "auto",
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ".WhyMeasure__top-section1-header": {
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },

            ".WhyMeasure__top-section2": {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ml: [
                0,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
              ".WhyMeasure__top-section2-body": {
                mt: [3, 0],
                fontSize: ["16px"],
                lineHeight: ["24px"],
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
          },

          ".WhyMeasure__categories": {
            mb: [7],
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            display: "flex",
            flexFlow: ["column", "row"],
            ".WhyMeasure__categories-category": {
              display: ["flex", "unset"],
              width: [
                "auto",
                (t) => `calc(calc(${t.colWidthDesktop} * 3) +  80px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 3) +  80px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) +  80px)`,
              ],
              mr: [0, "40px"],
              position: "relative",
              ".WhyMeasure__categories-category-divider": {
                mb: [1, 0],
                mt: [1, 0],
                top: ["unset", 4],
                position: ["absolute"],
                width: "100%",
                height: ["2px"],
                span: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                },
              },
              ".WhyMeasure__categories-category-title": {
                width: [
                  (t) => `calc(calc(${t.colWidthMob} * 3) + 60px)`,
                  "unset",
                ],
                mt: [2, 0],
                mb: [4],
                p: {
                  fontFamily: "medium",
                  fontSize: "14px",
                  lineHeight: "21px",
                },
              },
              ".WhyMeasure__categories-category-items": {
                width: [
                  (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
                  "unset",
                ],
                mt: [2, 0],
                display: "flex",
                flexFlow: "column",
                ".WhyMeasure__categories-category-items-item": {
                  ".WhyMeasure__categories-category-items-item-text": {
                    fontSize: ["14px"],
                    lineHeight: ["21px"],
                  },
                },
              },
            },
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
              (t) =>
                `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) * .605)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) * .605)`,
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
      },
      analyze: {
        topcontent: {
          position: "relative",
          ".buttonwrapper": {
            position: "absolute",
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
            ],
            bottom: ["-26px", "-24px"],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 8) + 320px) + ${t.desktopMassiveGutters})`,
            ],
            height: ["90px", "310px"],
            bottom: 0,
            right: [0, "40px"],
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            svg: {
              width: "100%",
              height: "100%",
            },
          },
        },
        insights: {
          bg: "black",
          ".top": {
            mt: [10, 16],
            gridArea: ["1/1/2/-1", "1/3/2/9"],
            h2: {},
          },
          ".middle": {
            mt: [4, 10],
            mb: [0, 19],
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            display: "flex",
            flexFlow: ["column", "unset"],
            ".section1": {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ".insightscircle": {
                svg: {
                  height: ["100%"],
                  width: "100%",
                },
              },
            },
            ".section2": {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ml: [
                0,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
              display: "flex",
              alignItems: "center",
              mt: [6, 0],
              ".text": {
                p: {
                  maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
                },
              },
            },
          },

          ".bottom": {
            mt: [8, 0],
            mb: [10, 13],
            gridArea: ["4/1/5/-1", "3/3/4/-2"],
            border: (t) => `solid 2px ${t.colors.turquoise}`,
            borderRadius: ["20px"],
            ".lockWrapper": {
              position: "relative",
              div: {
                position: "absolute",
                width: ["38px"],
                height: ["28px"],
                top: ["-17px"],
                left: [
                  "45px",
                  (t) => `calc(calc(${t.colWidthDesktop}) - 16px)`,
                  (t) => `calc(calc(${t.colWidthDesktopBig}) - 16px)`,
                  (t) => `calc(calc(${t.colWidthDesktopMassive}) - 16px)`,
                ],
                bg: "black",
                mx: [1],
                div: {
                  position: "relative",
                  top: 0,
                  left: 0,
                  m: 0,
                  height: "100%",
                  width: "100%",
                  svg: {
                    height: "100%",
                    width: "100%",
                  },
                },
              },
            },
            ".text": {
              mx: [
                3,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
              mt: [4, 8],
              mb: [4, 9],
              h3: {
                fontSize: ["24px"],

                fontFamily: "medium",
                mb: [1],
              },
              p: {},
              ".link": {
                mt: [1],
                p: {
                  fontFamily: "medium",
                },
              },
            },
          },
        },
        newinsights: {
          bg: "transparent",
          color: "black",
          ".wrapper": {
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            mt: [12, 16],
            mb: [6, 16],
            display: "flex",
            flexFlow: ["column", "unset"],
            ".section1": {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              h2: {
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
            ".section2": {
              mt: [3, 0],
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ml: [
                0,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
              p: {
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
          },
        },
        inaction: {
          bg: "black",
          ".graphic": {
            mt: [8, 16],
            mb: [0, 16],
            gridArea: ["1/1/2/-1", "1/7/2/-1"],
            position: "relative",
            height: ["225px", "336px"],
            width: ["100vw", "auto"],
            left: ["-20px", 0],
            div: {
              position: "absolute",
              height: "100%",
              width: "100%",
              bg: "#000",
            },
          },
          ".text": {
            gridArea: ["2/1/3/-1", "1/3/2/6"],
            mt: [6, 16],
            mb: [9],
            ".divider": {
              height: "1px",
              width: "100%",
              position: "relative",
              span: {
                position: "absolute",
                height: "100%",
                width: "100%",
                bg: "yellow",
              },
            },
            p: {
              mt: [2],
            },
            ".link": {
              mt: [1],
              p: {
                mt: 0,

                fontFamily: "medium",
              },
            },
          },
        },
        sharable: {
          bg: "transparent",
          color: "black",
          ".Sharable__text": {
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            mt: [12],
            mb: [5],
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            ".Sharable__text-header": {
              ".Sharable__text-header-text": {},
            },
            ".Sharable__text-body": {
              mt: [3],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              ".Sharable__text-body-text": {},
            },
          },
          ".Sharable__graphic": {
            gridArea: ["2/1/3/-1", "1/7/2/-1"],
            mt: [0, 16],
            mb: [13, 16],
            ml: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            height: ["auto", "440px"],
            display: "flex",
            justifyContent: "center",
            div: {
              height: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 4) + 100px) * .92)`,
                "100%",
              ],
              width: [
                (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
                "100%",
              ],
              svg: {
                width: "inherit",
                height: "inherit",
              },
            },
          },
        },
      },
      collaborate: {
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
          ".buttonwrapper": {
            position: "absolute",
            bottom: ["-28px", "-24px"],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 8) + 320px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 280px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 8) + 280px) + ${t.desktopMassiveGutters})`,
            ],
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "flex-end",
            svg: {
              width: "100%",
              height: "100%",
              maxHeight: "375px",
            },
          },
        },
        deiwork: {
          bg: "black",
          ".title": {
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            mt: [10, 19],
            ".text": {
              mt: [3, 0],
              h2: {},
              p: {},
            },
          },
          ".wrapper": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            display: "flex",
            flexFlow: ["column-reverse", "unset"],
            mt: [4],
            mb: [19],
            ".section1": {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              display: "flex",
              flexFlow: "column",
              ".text": {
                p: {
                  maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
                },
              },

              ".carousel": {
                mt: [8],
                mr: [
                  (t) => t.colWidthDesktop,
                  (t) => t.colWidthDesktopBig,
                  (t) => t.colWidthDesktopMassive,
                ],
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
            ".section2": {
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 6) + 200px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 6) + 200px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 6) + 200px)`,
              ],
              pt: ["87%", 0],
              ml: [0],
              mt: [6, 0],
              position: "relative",
              overflow: "hidden",
              height: [
                0,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktop} * 6) + 200px) * .60)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) * .60)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px) * .60)`,
              ],
              img: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
              },
            },
          },
        },
        customizable: {
          bg: "transparent",
          color: "black",
          ".Customizable__text": {
            gridArea: ["1/1/2/-1", "1/3/2/8"],
            mt: [10, 16],
            mb: [10, 16],
            ".Customizable__text-header": {
              ".Customizable__text-header-text": {},
            },
            ".Customizable__text-body": {
              mt: [3],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              ".Customizable__text-body-text": {},
            },
          },
          ".Customizable__graphic": {
            gridArea: ["2/1/3/-1", "1/9/2/-1"],
            mt: [0, 16],
            mb: [9],
            height: [
              "auto",
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 2) + 80px) * .74)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) * .74)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 80px) * .74)`,
            ],
            width: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 80px)`,
            ],
            display: "flex",
            justifyContent: ["center", "flex-start"],
            div: {
              position: "relative",
              height: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 3) + 70px) * .74)`,
                "100%",
              ],

              width: [(t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`, "auto"],
              div: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: "100%",
                width: ["100%", "auto"],
                svg: {
                  height: "100%",
                  width: ["100%", "auto"],
                },
              },
            },
          },
        },
      },
      security: {
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
            bottom: ["-28px", "-24px"],
            zIndex: 99,
            left: [
              "20px",
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
            left: [(t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`, "unset"],
            width: [
              "unset",
              (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 120px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 120px)`,
            ],
            height: ["126px", "34em"],
            bottom: [0, "-6em"],
            right: [
              0,
              "40px",
              (t) => t.desktopBigGutters,
              (t) => t.desktopMassiveGutters,
            ],
            overflow: "hidden",
            ".TopContent__graphics-chainsDesktop": {
              position: "absolute",
              left: ["-6%", 0],
              bottom: ["-35%", 0],
              height: ["unset", "100%"],
              width: ["unset", "100%"],
              maxHeight: "500px",
            },
            ".TopContent__graphics-chainsMobile": {
              position: "absolute",
              left: ["-6%", 0],
              bottom: ["-35%", 0],
              height: ["unset", "100%"],
              width: ["unset", "100%"],
            },
          },
        },
        bestinclass: {
          bg: "black",
          position: "relative",
          zIndex: 9,
          ".toptext": {
            gridArea: ["1/1/2/-1", "1/3/2/8"],
            mt: [10, 16],

            h2: {},
            p: {
              mt: [3, 4],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".modules": {
            gridArea: ["2/1/3/-1", "2/3/3/-2"],
            mt: [5],
            mb: [5],
            display: "flex",
            flexFlow: "column",
            mb: [12],
            ".module": {
              mb: [5, 8],

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
                flexFlow: ["column", "row"],
                justifyContent: ["space-between"],
                p: {
                  width: [
                    "100%",
                    (t) => `calc(${t.colWidthDesktop} * 3)`,
                    (t) => `calc(${t.colWidthDesktopBig} * 3)`,
                    (t) => `calc(${t.colWidthDesktopMassive} * 3)`,
                  ],
                  pr: ["60px", 4],
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
            mb: [10, 0],
            position: ["relative", "absolute"],
            gridArea: ["2/1/3/-1", "2/2/3/7"],
            ml: [0],
            zIndex: 1,
            overflow: "hidden",
            height: ["unset", "100%"],
            width: [
              "100vw",
              (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
            ],
            left: [
              "-20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
            ],

            display: "flex",
            alignItems: ["flex-end", "center"],
            div: {
              width: ["100%"],
              pt: ["100%"],
              height: [0],
              left: [(t) => `calc(${t.colWidthMob} + 30px)`, "unset"],
              position: "relative",
              div: {
                position: "absolute",
                top: 0,
                left: 0,
                svg: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                },
              },
            },
          },
          ".Workflows__section1": {
            gridArea: ["1/1/2/-1", "1/6/2/-1"],
            zIndex: 99,
            mt: [6, 26],
            mb: [8, 5],
            ".Workflows__section1-toptext": {
              mr: [
                0,
                (t) => `calc(calc(${t.colWidthDesktop} * 3) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 80px)`,
              ],
              ".Workflows__section1-toptext-header": {
                ".Workflows__section1-toptext-header-text": {},
              },
              ".Workflows__section1-toptext-body": {
                mt: [3],
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
                ".Workflows__section1-toptext-body-text": {},
              },
            },
          },
          ".Workflows__section2": {
            gridArea: ["2/1/3/5", "2/6/3/-1"],
            mb: [10, 26],
            ".Workflows__section2-categories": {
              zIndex: 99,

              pt: [1, 0],
              pb: [1, 0],
              height: ["100%", "unset"],
              display: "flex",
              flexFlow: ["column", "row"],
              justifyContent: ["space-between", "unset"],

              ".Workflows__section2-categories-category": {
                zIndex: 99,
                width: [
                  "100%",
                  (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
                  (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
                  (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
                ],
                mr: ["40px"],

                ".Workflows__section2-categories-category-header": {
                  ".Workflows__section2-categories-category-header-text": {
                    fontFamily: "display",
                  },
                },
                ".Workflows__section2-categories-category-body": {
                  mt: [0, 2],
                  ".Workflows__section2-categories-category-body-text": {
                    fontFamily: "body",
                  },
                },
              },
            },
          },
        },
        connect: {
          bg: "transparent",
          color: "black",
          ".wrapper": {
            gridArea: ["1/1/2/-1", "1/3/2/8"],
            display: "flex",
            alignItems: "center",
            ".text": {
              h2: {},
              ".link": {
                mt: [1],
                p: {
                  fontFamily: "medium",
                },
              },
            },
          },

          ".graphic": {
            gridArea: ["2/1/3/-1", "1/7/2/-1"],
            mt: [6, 16],
            mb: [12, 16],
            width: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 160px)`,
            ],
            mr: [
              "unset",
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            ml: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],

            height: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 160px)`,
            ],
            display: "flex",

            justifyContent: ["center", "flex-end"],
            div: {
              position: "relative",
              width: [
                (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
                "100%",
              ],
              height: [0, "100%"],
              pt: ["103%", 0],
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
      },
      integrations: {
        topcontent: {
          position: "relative",
          ".TopContent__buttonWrapper": {
            position: "absolute",
            bottom: ["-28px", "-24px"],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 60px) + ${t.desktopMassiveGutters})`,
            ],
          },
          ".TopContent__graphics": {
            position: "absolute",
            left: [(t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`, "unset"],

            right: [
              "unset",
              (t) => t.desktopGutters,
              (t) => t.desktopBigGutters,
              (t) => t.desktopMassiveGutters,
            ],
            bottom: [0],
            overflow: "hidden",
            display: ["flex", "unset"],
            alignItems: "flex-end",
            ".TopContent__graphicsWrapper": {
              width: [
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
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
              ],
              height: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 80px) * .85)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktop} * 4) + 160px) * .85)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopBig} * 4) + 160px) * .85)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopMassive} * 4) + 160px) * .85)`,
              ],
              left: 0,
              bottom: ["-20px", 0],
              position: "relative",
              svg: {
                position: "absolute",
                height: "100%",
                width: "100%",
                maxHeight: ["unset", "375px"],
                bottom: 0,
                g: {
                  circle: {
                    strokeWidth: [4, 2],
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
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            mt: [10, 18],
            mb: [7, 12],
            display: "flex",
            flexFlow: ["column", "unset"],
            h2: {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
            },
            p: {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ml: [
                0,
                (t) => t.colWidthDesktop,
                (t) => t.colWidthDesktopBig,
                (t) => t.colWidthDesktopMassive,
              ],
              mt: [3, 0],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".logos": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            mb: [0, 7],
            display: "flex",
            flexFlow: ["row wrap"],
            justifyContent: ["space-between"],
            alignItems: ["center"],
            ".logo": {
              mb: [5, 12],
              mr: [0, 2],
              img: {
                width: "100%",
              },
            },
          },
        },
        secure: {
          bg: "transparent",
          color: "black",
          ".Secure__wrapper": {
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            mt: [4, 7],
            mb: [4],
            display: "flex",
            alignItems: "center",
            ".Secure__wrapper-text": {
              ".Secure__wrapper-text-header": {
                ".Secure__wrapper-text-header-text": {},
              },
              ".Secure__wrapper-text-body": {
                mt: [3, 4],
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
            mt: [0, 7],
            gridArea: ["2/1/3/-1", "1/7/2/-1"],
            ml: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            mb: [10, 12],
            display: "flex",
            justifyContent: "center",
            div: {
              height: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 40px) * 1.65)`,
                "235px",
              ],
              width: [
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
      },
    },
    pricing: {
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
            fontSize: ["36px", "52px"],
            lineHeight: ["43px", "58px"],
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
              },
              "input[type=range]:focus": {
                outline: "none",
              },
              "input[type=range]::-webkit-slider-runnable-track": {
                bg: "blue",
                border: "none",
                width: "100%",
                height: "2px",
                cursor: "pointer",
              },
              "input[type=range]::-webkit-slider-thumb": {
                mt: ["-11px"],
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
                fontSize: ["72px"],

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
              (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig}) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive}) + 80px)`,
            ],
            pr: [
              "20px",
              "40px",
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
                (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig}) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive}) + 80px)`,
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

                  ".Table__body-row-grid-item-infoBox": {
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
                  ".Table__body-row-grid-item-infoBox-body": {
                    width: ["272px"],
                    mb: [2],
                  },
                  ".Table__body-row-grid-item-infoBox-link": {
                    width: ["272px"],
                    p: {
                      fontFamily: "display",
                    },
                    ".arrow": {
                      svg: {
                        width: "unset",
                        height: "unset",
                      },
                    },
                  },

                  ".Table__body-row-grid-item-symbol": {
                    fontSize: ["14px"],
                    lineHeight: ["16.8px"],
                  },
                  svg: {
                    width: "10px",
                    height: "10px",
                  },
                },
              },
            },
            ".Table__body-row:nth-of-type(2n-1)": {
              bg: "#262629",
            },
          },
        },
      },
    },
    community: {
      board: {
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
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) * .88)`,
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
      },
      partners: {
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
            bottom: 0,
            maxHeight: "350px",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktop} * 8) + 320px) + 40px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 8) + 320px) + ${t.desktopMassiveGutters})`,
            ],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 120px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 120px)`,
            ],
            height: [
              "unset",
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 3) + 120px) * .86)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 120px) * .86)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 120px) * .86)`,
            ],
            display: ["flex"],
            alignItems: "flex-end",
            svg: {
              position: ["unset", "absolute"],
              width: "100%",
              height: ["100%"],
            },
          },
        },
        domore: {
          bg: "#F8F8F8",
          color: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [8],
            mb: [8],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".people": {
            gridArea: ["2/1/3/-1"],
            width: ["100vw"],
            left: ["-20px"],
            position: "relative",
            mb: [8],
            display: "flex",
            flexFlow: ["row wrap"],
            justifyContent: ["space-between"],
            ".person": {
              flex: "0 50%",
              mb: [4],
              display: "flex",
              flexFlow: ["column"],
              alignItems: "center",
              ".imagewrapper": {
                clipPath: ["circle(80px)"],
                position: "relative",
                width: ["160px"],
                height: ["160px"],
                img: {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                },
              },
              ".text": {
                mt: [1],
                ml: [1],
                mb: [0],
                width: ["150px"],
                ".name": {
                  mt: 0,
                  mb: 0,
                  fontSize: ["14px"],
                  fontWeight: "400",
                  fontFamily: "display",
                  lineHeight: ["21px"],
                },
                ".title": {
                  mt: 0,
                  mb: 0,
                  fontSize: ["13px"],
                  fontWeight: "400",
                  fontFamily: "body",
                  lineHeight: ["19.5px"],
                },
              },
            },
          },
        },
        curious: {
          bg: "transparent",
          color: "black",
          ".section1": {
            width: [
              "100%",
              (t) => t.desktopSectionWidth,
              (t) => t.desktopSectionWidthBig,
              (t) => t.desktopSectionWidthMassive,
            ],
            h2: {
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".section2": {
            width: [
              "100%",
              (t) => t.desktopSectionWidth,
              (t) => t.desktopSectionWidthBig,
              (t) => t.desktopSectionWidthMassive,
            ],
            ml: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            p: {
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },

          ".row1": {
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            display: "flex",
            flexFlow: ["column", "unset"],
            mt: [8, 16],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".row2": {
            display: "flex",
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            flexFlow: ["column", "unset"],
            mt: [8, 20],
            mb: [13, 21],
            h2: {},
            p: {
              mt: [3],
            },
            ".link": {
              mt: [1],
              p: {
                mt: 0,

                fontFamily: "display",
              },
            },
          },
        },
      },
      support: {
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
              0,
            ],
            height: [
              (t) => `calc(calc(100vw - 20px) * .6)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktop} * 10) + 400px) * .45)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters}) * .45)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters}) * .45)`,
            ],
            width: [
              (t) => `calc(100vw - 20px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters})`,
            ],
            left: [
              "20px",
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
              bottom: [0, "-50%"],
            },
          },
        },
        onboarding: {
          bg: "#F8F8F8",
          color: "black",

          ".textmodules": {
            mt: [
              `calc(calc(calc(calc(100vw - 20px) * .6) * .3) + 40px)`,
              (t) =>
                `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 400px) * .45) * .5) + 128px)`,
              (t) =>
                `calc(calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 360px) + ${t.desktopBigGutters}) * .45) * .5) + 128px)`,
              (t) =>
                `calc(calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 360px) + ${t.desktopMassiveGutters}) * .45) * .5) + 128px)`,
            ],
            mb: [5, 7],
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            display: "flex",
            flexFlow: ["column"],
            ".textblock": {
              mb: [7, 11],
              display: "flex",
              flexFlow: ["column", "unset"],
              position: "relative",

              ".divider": {
                position: "absolute",
                top: 0,
                height: "1px",
                width: [
                  "100vw",
                  (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
                  (t) =>
                    `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters})`,
                  (t) =>
                    `calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 360px) + ${t.desktopMassiveGutters})`,
                ],
                left: ["-20px", 0],
                span: {
                  left: ["20px", 0],
                  position: "absolute",
                  height: ["100%"],
                  bg: "black",
                  right: 0,
                },
              },
              ".toptext": {
                width: [
                  "100%",
                  (t) => t.desktopSectionWidth,
                  (t) => t.desktopSectionWidthBig,
                  (t) => t.desktopSectionWidthMassive,
                ],
                mt: [2],
                mb: [3],
                h2: {
                  maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
                },
                p: {
                  mt: [1],
                  maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
                },
              },
              ".list": {
                width: [
                  "100%",
                  (t) => t.desktopSectionWidth,
                  (t) => t.desktopSectionWidthBig,
                  (t) => t.desktopSectionWidthMassive,
                ],
                ml: [
                  0,
                  (t) => t.colWidthDesktop,
                  (t) => t.colWidthDesktopBig,
                  (t) => t.colWidthDesktopMassive,
                ],
                p: {
                  maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
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
                    p: { maxWidth: ["unset", (t) => t.desktopMaxSectionWidth] },
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
        learnmore: {
          bg: "yellow",
          color: "black",
          ".imagewrapper": {
            position: "relative",
            gridArea: ["1/1/2/-1", "1/8/2/-1"],
            height: [
              "calc(100vw * .56)",
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) * .74)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}) * .74)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 160px) + ${t.desktopMassiveGutters}) * .74)`,
            ],
            width: [
              "100vw",
              (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters})`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 160px) + ${t.desktopMassiveGutters})`,
            ],
            left: ["-20px", 0],
            img: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            },
          },

          ".text": {
            gridArea: ["2/1/3/-1", "1/3/2/8"],
            mr: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            display: "flex",
            justifyContent: "center",
            flexFlow: ["column"],
            mb: [8, 0],
            mt: [6, 0],

            h2: {},
            p: {
              mt: [3],
            },
            ".link": {
              mt: [1],
              p: {
                mt: 0,

                fontFamily: "display",
              },
            },
          },
        },
        getcreative: {
          bg: "transparent",
          color: "black",
          mt: [6, 13],
          mb: [0, 16],
          ".textblock": {
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            mb: [7],
            position: "relative",
            display: "flex",
            flexFlow: ["column", "unset"],

            ".divider": {
              position: "absolute",
              height: "1px",
              top: 0,
              width: [
                "100vw",
                (t) => `calc(calc(${t.colWidthDesktop} * 10) +  400px)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters})`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopMassive} * 10) +  360px) + ${t.desktopMassiveGutters})`,
              ],
              left: ["-20px", 0],
              span: {
                left: ["20px", 0],
                position: "absolute",
                height: ["100%"],
                bg: "black",
                right: 0,
              },
            },
            ".toptext": {
              width: [
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
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
                (t) => t.desktopSectionWidthMassive,
              ],
              ml: [
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
      },
    },
  },
  components: {
    navigation: { ...navigation },
    mobileNavigation: { ...mobileNavigation },
    navBarVariants: { ...navBarVariants },
    submenu: { ...submenu },
    mobilemenu: {
      position: "fixed",
      display: ["unset", "none"],
      pt: [11],
      pb: [15],
      bg: "black",
      height: "100vh",
      overflowY: "scroll",
      width: "100vw",
      zIndex: 999,
      ".navitems": {
        gridArea: ["1/1/2/-1"],
        ".item": {
          cursor: "pointer",
          mb: [2],

          ".wrapper": {
            ".main": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              a: {
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
                "&:visited": {
                  outline: "none",
                },
              },
              ".arrow": {
                height: "100%",
                display: "flex",
                alignItems: "center",
                svg: {
                  path: {
                    strokeWidth: "3",
                  },
                },
              },
            },

            ".sub": {
              display: "flex",
              flexFlow: "column",
              overflow: "hidden",

              width: "100vw",
              left: "-20px",
              position: "relative",

              ".subitem": {
                textDecoration: "none",
                position: "relative",
                pl: [4],
                py: [2],

                color: "white",
                cursor: "pointer",
                "&:visited": {
                  outline: "none",
                },
                "&:hover": {
                  bg: ["none", "#262629"],
                },
              },
            },
          },
        },
      },
    },
    subnavigation: { ...subnavigation },
    footer: {
      bg: "#1F1F21",
      ".header": {
        mt: [10, 11],
        gridArea: ["1/1/2/-1", "1/1/2/4"],
        h2: {
          fontFamily: "display",
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "32px",
        },
        p: {
          mt: ["20px", 4],
          mb: ["20px"],
          fontFamily: "body",
          fontWeight: "400",
        },
      },
      ".Form": {
        mt: [0, 11],
        position: "relative",
        top: [0, "-12px"],
        gridArea: ["2/1/3/-1", "1/7/3/-1"],
        display: "flex",
        flexFlow: ["column wrap", "row wrap"],

        ".Form__inputWrapper": {
          ".Form__inputWrapper-error": {
            fontSize: "14px",
            pl: [3],
            mt: [1],
          },
          input: {
            mb: 0,
            caretColor: "yellow",
            "&:focus": {
              bg: "#3A3A3D",
              border: "none",
            },
            "&:hover": {
              cursor: ["auto", "pointer"],
            },
          },
          "input:-webkit-autofill, input:-webkit-autofill:hover, select:-webkit-autofill, select:-webkit-autofill:hover": {
            boxShadow: "0 0  0px 1000px #262629 inset",
            WebkitTextFillColor: "rgb(242,242,242)",
            border: "solid 8px #262629",
            px: [2],
            py: [1],
          },
          "input:-webkit-autofill::first-line": {
            fontSize: "18px",
            fontFamily: "body",
          },
        },

        ".Form__inputWrapper:nth-child(odd)": {
          flex: [1, "1 40%"],
          mr: [0, "6px"],
          mt: ["12px"],
          mb: 0,
        },
        ".Form__inputWrapper:nth-child(even)": {
          flex: [1, "1 40%"],
          ml: [0, "6px"],
          mt: ["12px"],
          mb: 0,
        },

        ".Form__dropdownWrapper": {
          flex: [1, "1 100%"],
          position: "relative",
          height: ["64px"],
          borderRadius: "8px",
          bg: "#262629",
          mt: ["12px"],

          ".Form__dropdownWrapper-error": {
            pl: [3],
            mt: [1],
            fontSize: "14px",
          },

          ".Form__dropdownWrapper-arrow": {
            position: "absolute",
            right: [2],
            top: "50%",
            transform: "translateY(-50%)",
          },

          ".Form__dropdownWrapper-dropdown": {
            appearance: "none",
            m: 0,
            width: "100%",
            maxWidth: "100%",
            display: "block",
            color: "rgba(242, 242, 242, 0.24)",
            px: [3],
            bg: "transparent",
            height: "100%",
            fontSize: ["18px"],
            lineHeight: ["26px"],
            fontFamily: "body",
            fontWeight: "400",
            border: "none",
            outline: "none",
            cursor: "pointer",

            ":focus": {
              outline: "none",
            },
            option: {
              width: "100%",
            },
          },
        },
        ".Form__button": {
          mt: [3, 5],
          flex: [1, "1 100%"],
          display: "flex",
          justifyContent: ["flex-start", "flex-end"],
          button: {
            "&:focus": {
              outline: "none",
            },
          },
        },
      },
      ".socials": {
        gridArea: ["3/1/4/-1", "2/4/3/6"],
        mt: [6, 0],
        display: "flex",
        alignItems: "center",

        ".item": {
          mr: [2],
          cursor: "pointer",
          height: "30px",
          width: "30px",

          div: {
            height: "inherit",
            width: "inherit",
            div: {
              height: "inherit",
              width: "inherit",
              svg: {
                width: "100%",
                height: "100%",
                path: {
                  fill: "white",
                },
                "&:hover": {
                  path: {
                    fill: "rgba(242,242,242,.7)",
                  },
                },
              },
            },
          },
        },
      },
      ".newsletter": {
        gridArea: ["4/1/5/-1", "3/4/4/7"],
        mt: ["33px", 0],
        mb: ["44px", 6],
        a: {
          mb: 0,
        },
        p: {
          fontSize: ["13px"],
          fontFamily: "medium",
        },
      },
      ".logo": {
        gridArea: ["5/1/6/-1", "2/1/3/3"],
        display: "flex",
        alignItems: "center",
      },
      ".copyright": {
        gridArea: ["6/1/7/-1", "3/1/4/4"],
        mt: [1, 0],
        mb: [4, 0],
        p: {
          fontSize: ["13px"],
          fontFamily: "medium",
          color: "#909095",
        },
      },
    },
    learnMoreLink: {
      mb: [4],
      textDecoration: "none",
      display: "flex",
      cursor: "pointer",
      zIndex: 98,
      alignItems: "center",
      width: "fit-content",
      p: {
        mr: "10px",
      },
      ".arrow": {
        display: "flex",
        alignItems: "center",
      },
    },
    shared: {
      button: {
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 80px)`,
        ],
        bg: "blue",
        borderRadius: ["168px", "180px"],
        height: ["56px", "48px"],
        "&:hover": {
          bg: "#5200FF",
          transition: "all 150ms ease-out",
        },
        ".button": {
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          p: {
            m: 0,
            lineHeight: "18.88px",
            fontFamily: "medium",
          },
          width: "100%",
          height: "100%",
          textDecoration: "none",
          color: "white",
        },
      },
      quote: {
        ".Quote__imageWrapper": {
          position: "relative",
          gridArea: ["1/1/2/-1", "1/8/2/-1"],
          height: [
            "calc(100vw * .426)",
            (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 240px) * .83)`,
            (t) =>
              `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters}) * .83)`,
            (t) =>
              `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters}) * .83)`,
          ],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters})`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters})`,
          ],
          left: ["-20px", "-40px"],

          ".Quote__imageWrapper-image": {
            position: "absolute",
            height: "100%",
            width: "100%",
            img: {
              width: "inherit",
              height: "inherit",
            },
          },
        },
        ".Quote__textWrapper": {
          gridArea: ["2/1/3/-1", "1/3/2/7"],
          display: "flex",
          alignItems: "center",
          mt: [4, 0],
          ".Quote__textWrapper-text": {
            color: "black",
            position: "relative",
            ".Quote__textWrapper-text-quotation": {
              position: "absolute",
              top: [0],
            },
            ".Quote__textWrapper-text-body": {
              ml: [5],

              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              ".Quote__textWrapper-text-body-text": {
                fontFamily: "display",
                fontSize: ["24px", "40px"],
                lineHeight: ["31.2px", "48px"],
              },
            },
            ".Quote__textWrapper-text-name": {
              mt: [4],
              ml: [5],
              mb: [8, 0],

              ".Quote__textWrapper-text-name-text": {
                lineHeight: ["20px"],
                fontSize: ["14px"],
                fontFamily: "body",
              },
            },
          },
        },
      },
      header: {
        color: "black",
        ".Header__text": {
          mt: [18, 22],
          gridArea: ["1/1/2/-1", "1/3/2/9"],
        },
        ".Header__text-header": {
          fontSize: ["36px", "52px"],
          lineHeight: ["43px", "60px"],
        },
        ".Header__text-body": {
          mt: [2, 3],
          fontFamily: "body",
          lineHeight: ["30px", "36px"],
          fontSize: ["20px", "24px"],
        },
        ".Header__graphic": {
          gridArea: ["2/1/3/-1", "2/1/3/-1"],
          position: "relative",
          width: ["100vw"],
          left: [
            "-20px",
            "-40px",
            (t) => `calc(${t.desktopBigGutters} / -1)`,
            (t) => `calc(${t.desktopMassiveGutters} / -1)`,
          ],
        },
      },
      carousel: {
        position: "relative",
        height: ["350px"],
        overflow: "hidden",
        width: ["100%"],
        flexFlow: ["column wrap"],
        ".SharedCarousel__item": {
          position: "relative",
          mb: [2],

          ".SharedCarousel__item-header-progressBar": {
            position: "absolute",
            left: 0,
            top: "-5px",
            minHeight: "32px",
            height: "80%",
            width: "2px",
            borderRadius: "6px",
            bg: "rgba(242, 242, 242, 0.24)",
            ".SharedCarousel__item-header-progressBar-animation": {
              width: "100%",
              height: "0",
              borderRadius: "6px",
              // transition: "all 0ms linear",
              transformOrigin: "top center",
            },
            // ".active": {
            //   transition: "all 7500ms 1000ms linear",
            //   height: "100%",
            //   minHeight: "unset",
            // },
          },

          // ".active": {
          //   height: "80%",
          //   minHeight: "32px",
          // },

          ".SharedCarousel__item-header": {
            position: "relative",
            cursor: "pointer",
            pl: [2],
            ".SharedCarousel__item-header-text": {
              fontSize: ["16px"],
              lineHeight: "18.8px",
            },
          },

          ".SharedCarousel__item-body": {
            mt: [2],
            ml: [2],
            height: 0, // initial
            overflow: "hidden",
            ".SharedCarousel__item-body-text": {
              fontSize: ["16px"],
              lineHeight: ["24px"],
            },
            ".SharedCarousel__item-body-link": {
              mt: [2],
              p: {},
            },
          },
        },
      },
      people: {
        bg: "#F8F8F8",
        color: "black",
        ".toptext": {
          mt: [8, 16],
          mb: [12],
          gridArea: ["1/1/2/-1", "1/3/2/-1"],
          display: "flex",
          flexFlow: ["column", "unset"],

          ".section1": {
            width: [
              "100%",
              (t) => t.desktopSectionWidth,
              (t) => t.desktopSectionWidthBig,
              (t) => t.desktopSectionWidthMassive,
            ],
            h2: {
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".section2": {
            ml: [
              0,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
              (t) => t.colWidthDesktopMassive,
            ],
            width: [
              "100%",
              (t) => t.desktopSectionWidth,
              (t) => t.desktopSectionWidthBig,
              (t) => t.desktopSectionWidthMassive,
            ],

            p: {
              mt: [2, 1],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
        },

        ".people": {
          gridArea: ["2/1/3/-1", "2/3/3/-1"],
          width: ["unset"],
          left: ["unset"],
          position: "relative",
          mb: [14, 16],
          display: "flex",
          flexFlow: ["row wrap"],
          justifyContent: ["space-between", "unset"],
          ".person:nth-of-type(4n)": {
            mr: 0,
          },
          ".person": {
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 80px)`,
            ],
            mr: [
              0,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 358px) - calc(calc(calc(${t.colWidthDesktop} * 2) + 80px) * 4)) / 3)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) + 358px) - calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) * 4)) / 3)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 10) + 358px) - calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 80px) * 4)) / 3)`,
            ],

            mb: [4],
            display: "flex",
            flexFlow: ["column"],
            alignItems: "center",
            ".imagewrapper": {
              clipPath: ["circle(80px)", "circle(50%)"],
              position: "relative",
              width: [
                "160px",
                (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 80px)`,
              ],
              height: [
                "160px",
                (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 80px)`,
              ],
              img: {
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
              },
            },
            ".text": {
              mt: [1, 2],
              ml: [1],
              mb: [0],
              width: ["150px", "200px"],
              ".name": {
                mt: 0,
                mb: 0,
                fontSize: ["14px"],
                fontWeight: "400",
                fontFamily: "display",
                lineHeight: ["21px"],
              },
              ".title": {
                mt: 0,
                mb: 0,
                fontSize: ["13px"],
                fontWeight: "400",
                fontFamily: "body",
                lineHeight: ["19.5px"],
              },
            },
          },
        },
      },
    },
  },
  forms: {
    input: {
      height: ["64px"],
      bg: "#262629",
      px: [3],
      mb: ["12px"],
      borderRadius: "8px",
      border: "none",
      fontFamily: "body",
      fontWeight: "400",
      fontSize: ["18px"],
      color: "white",
      ":focus": {
        outline: "none",
      },
      "::placeholder": {
        color: "rgba(242, 242, 242, 0.24)",
      },
    },
    select: {
      // A reset of styles, including removing the default dropdown arrow
      appearance: "none",
      // Additional resets for further consistency
      border: "none",
      borderRadius: "8px",
      // p: " 0 1em 0 0",
      mb: ["12px"],
      px: ["24px"],
      width: "100%",
      height: ["64px"],
      fontFamily: "body",
      fontSize: ["18px"],
      cursor: "pointer",
      lineHeight: "inherit",
      outline: "none",
      bg: "#262629",
      color: "white",
      option: {},
    },
  },
  buttons: {
    primary: {
      bg: "#3A3A3D",
      height: ["56px"],
      mt: ["12px"],
      color: "black",
      borderRadius: "200px",
      width: ["191px"],
      fontFamily: "body",
      fontWeight: "500",
      fontSize: ["18px"],
      cursor: "pointer",
    },
    secondary: {
      bg: "blue",
      borderRadius: ["200px"],
      width: ["168px"],
      height: ["56px"],
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: {
        fontWeight: "500",
        fontFamily: "medium",
      },
    },
  },
  styles: {
    root: {
      bg: "#fff",
      color: "white",

      "&.menu-open": {
        overflow: "hidden",
        position: "relative",
      },
    },
    h1: {
      fontFamily: "display",
      fontSize: ["36px", "60px"],
      lineHeight: ["43.2px", "64px"],
      fontWeight: "500",
      m: 0,
    },
    h2: {
      fontFamily: "display",
      fontSize: ["32px", "40px"],
      lineHeight: ["38.4px", "48px"],
      fontWeight: "500",
      m: 0,
    },
    h3: {
      fontFamily: "body",
      fontSize: ["24px"],
      lineHeight: ["24px"],
      fontWeight: "500",
      m: 0,
    },
    h4: {
      fontFamily: "body",
      fontSize: ["18px"],
      lineHeight: ["30px"],
      fontWeight: ["400"],
      m: 0,
    },
    p: {
      fontFamily: "body",
      fontSize: ["16px", "16px"],
      lineHeight: ["24px"],
      fontWeight: "400",
      m: 0,
    },
    h5: {
      fontFamily: "body",
      fontSize: "small",
      lineHeight: "small",
      fontWeight: "normal",
      m: 0,
    },
  },
};

export default theme;
