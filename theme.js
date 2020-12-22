import { transform, useTransform } from "framer-motion";
import Customizable from "./src/components/product/collaborate/customizable";
const theme = {
  breakpoints: ["1024px"],
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
  colWidthMob: `calc(calc(100vw - 140px)/6)`,
  colWidthDesktop: `calc(calc(100vw - 520px)/12)`,
  desktopSectionWidth: `calc(calc(calc(calc(100vw - 520px)/12) * 4) + 160px)`,
  grid: {
    display: "grid",
    gridTemplateColumns: ["repeat(6,1fr)", "repeat(12,1fr)"],
    gridTemplateRows: "auto",
    columnGap: ["20px", "40px"],
    rowGap: 0,
    mx: ["20px", "40px"],
  },
  pages: {
    home: {
      top: {
        bg: "transparent",
        bigLogo: {
          svg: {
            position: "fixed",
            zIndex: 9999,
            top: ["22px", "-25px"],
            left: ["20px", "40px"],
            height: [(t) => t.colWidthMob, (t) => t.colWidthDesktop],
            width: ["125px", "367px"],
            mb: ["20px", "40px"],
          },
        },
        ".text": {
          gridArea: ["1/2/2/-1", "1/7/2/-1"],
          ml: [
            (t) => `calc(${t.colWidthMob} + 10px)`,
            (t) => `calc(${t.colWidthDesktop})`,
          ],
          mt: [24, 28],
          mb: [2, 0],
          h1: {},
          ".button": {
            position: "relative",
            zIndex: 99,
            left: [0, "-8px"],
            gridArea: ["2/2/3/6", "2/7/3/-1"],
            width: ["160px"],
            height: ["56px", "56px"],
            mt: ["24px", "48px"],
            bg: "yellow",

            borderRadius: "200px",
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
            a: {
              textDecoration: "none",
              color: "black",
            },
            p: {
              fontSize: "16px",
              fontFamily: "medium",
            },
          },
        },
        bars: {
          gridArea: ["2/1/3/-1"],
          position: "relative",
          width: "100vw",
          left: ["-20px", "-40px"],
          height: ["191px", "232px"],
          // position: "absolute",
          // left: [0],
          // top: [325, "50%"],
          // bottom: [0],
          // pt: "16px",
          // width: "100%",
          // height: "191px",
          // height: "250px",
          ".barWrapper": {
            position: "absolute",
            width: "100%",
            bottom: 0,
            left: 0,
            height: ["178px", "310px"],
            // bottom: ["-71px", "-123px"],
            ".topslide": {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: ["31.5%"],
              left: 0,
              zIndex: 999,
              path: {
                strokeWidth: 2,
              },
            },
          },
          "#bar1": {
            zIndex: 99,
            position: "absolute",
            height: "100%",
            width: [
              (t) => `calc(${t.colWidthMob} + 10px)`,
              (t) => `calc(${t.colWidthDesktop} + 20px)`,
            ],
            ml: ["20px", (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`],
            ".top": {
              position: "absolute",
              bg: "turquoise",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              borderRadius: "7px 7px 0px 0px",
            },
            ".bottom": {
              position: "absolute",
              bg: "blue",
              width: "100%",
              height: "40%",
              borderRadius: "0px 0px 7px 7px",
              top: "100%",
              left: 0,
            },
          },
          "#bar2": {
            zIndex: 99,
            width: [
              (t) => `calc(${t.colWidthMob} + 10px)`,
              (t) => `calc(${t.colWidthDesktop} + 20px)`,
            ],
            ml: [
              (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 200px)`,
            ],
            bottom: 0,
            height: "100%",
            position: "absolute",
            ".top": {
              position: "absolute",
              width: "100%",
              height: ["61%"],
              bg: "turquoise",
              bottom: 0,
              left: 0,
              borderRadius: "7px 7px 0px 0px",
            },
            ".bottom": {
              position: "absolute",
              width: "100%",
              height: "40%",
              bg: "blue",
              top: "100%",
              left: 0,
              borderRadius: "0px 0px 7px 7px",
            },
          },
          "#bar3": {
            zIndex: 99,
            width: [
              (t) => `calc(${t.colWidthMob} + 10px)`,
              (t) => `calc(${t.colWidthDesktop} + 20px)`,
            ],
            height: "100%",
            bottom: 0,
            position: "absolute",
            ml: [
              (t) => `calc(calc(${t.colWidthMob} * 3.5) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
            ],

            ".bottom": {
              position: "absolute",
              width: "100%",
              height: "40%",
              left: 0,
              top: "100%",
              bg: "blue",
              borderRadius: "0px 0px 7px 7px",
            },
          },
        },
        ".spacer": {
          gridArea: ["2/1/3/-1", "2/1/3/-1"],
          height: ["191px", "232px"],
        },
      },
      learnmore: {
        bg: "violet",
        color: "black",
        position: "relative",
        ".toptext": {
          position: "fixed",
          bottom: 0,
          zIndex: 99,

          // gridArea: ["1/2/2/-1", "1/7/2/-1"],
          ml: [
            (t) => `calc(calc(${t.colWidthMob} * 2) + 30px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 7) + 280px)`,
          ],
          // mt: [13, 0],
          mb: [1],
          display: ["none", "flex"],
          alignItems: "flex-start",
          justifyContent: ["flex-end", "flex-start"],
          p: {
            fontFamily: "display",
            fontWeight: "500",
            fontSize: ["16px"],
            lineHeight: ["20px"],
          },
          svg: {
            ml: "10px",
            width: ["55px"],
            pt: ["4%", "1.6%"],
          },
        },
        ".imagewrapper": {
          gridArea: ["2/1/3/-1", "1/6/2/-1"],
          mt: ["213px", "290px"],
          mb: [0, "333px"],
          height: ["277px", "495px"],
          position: "relative",
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 6) + 280px)`,
          ],
          left: ["-20px", (t) => `calc(${t.colWidthDesktop})`],
          img: {
            position: "absolute",
            height: "100%",
            width: ["unset", "100%"],
            right: 0,
          },
        },
        ".text": {
          gridArea: ["3/1/4/-1", "1/2/2/6"],
          mt: [6, "290px"],
          ml: [0],
          mb: [16, 26],
          h2: {},
          ".link": {
            mt: [1],
            p: {
              mt: 0,
              fontFamily: "medium",
              fontWeight: "500",
            },
          },
          p: {
            mt: [3, 4],
            fontSize: ["16px", "20px"],
            lineHeight: ["24px", "32px"],
          },
        },
      },
      carousel: {
        bg: "transparent",
        ".toptext": {
          gridArea: ["1/1/2/-1", "1/2/2/6"],
          mt: [10, 16],
          h2: {
            fontFamily: "display",
            fontWeight: "500",
          },
          p: {
            fontFamily: "body",
            fontWeight: "400",
            mt: [3, 4],
            mb: ["24px"],
          },
        },

        ".carousel": {
          mt: ["30px"],
          mb: [6, 24],
          position: "relative",
          gridArea: ["3/1/4/-1", "2/1/3/-1"],
          width: ["100%", "100vw"],
          left: [0, "-40px"],
          display: ["flex", "grid"],
          gridTemplateColumns: ["repeat(12,1fr)"],
          gridTemplateRows: ["auto"],
          px: [0, "40px"],
          columnGap: ["40px"],
          rowGap: ["0"],
          flexFlow: "column wrap",
          ".description": {
            gridArea: ["1/2/2/6"],
            width: ["100%", "unset"],
            p: {
              fontSize: ["16px", "20px"],
              lineHeight: ["32px"],
            },
          },
          ".imagewrapper": {
            gridArea: ["2/1/3/-1", "1/7/3/-1"],
            mt: [4, 0],
            mb: [4, 0],
            overflow: ["hidden", "unset"],
            width: ["100vw", "100%"],
            left: ["-20px", "unset"],
            position: "relative",
            height: ["294px", "400px"],
            img: {
              position: "absolute",
              height: ["100%"],
              width: ["unset", "100%"],
              left: ["20px", "unset"],
            },
          },
          ".carouselwrapper": {
            mt: [0, 4],
            gridArea: ["3/1/4/-1", "2/2/3/6"],
            width: "100%",
          },
          ".texts": {
            gridArea: ["2/2/3/6"],
            mt: [6],
            ".item": {
              mb: ["24px", 2],
              ".header": {
                position: "relative",
                display: "flex",
                alignItems: "center",
                ".progressBar": {
                  position: "absolute",
                  height: "32px",
                  width: "2px",
                  bg: "#EDEDF1",
                  borderRadius: "6px",
                  ".progressBarAnimation": {
                    bg: "turquoise",
                    width: "100%",
                    borderRadius: "6px",
                  },
                },
                p: {
                  ml: "20px",
                  fontWeight: "500",
                  fontFamily: "medium",
                  fontSize: ["16px"],
                },
              },
            },
            ".body": {
              mx: "20px",
              mt: "8px",
              p: {
                fontWeight: "400",
                fontFamily: "body",
                fontSize: ["16px"],
              },
              ".link": {
                p: {
                  fontWeight: "500",
                  fontFamily: "medium",
                  fontSize: ["16px"],
                },
              },
            },
          },
        },
      },
      payequity: {
        bg: "#F8F8F8",
        color: "black",
        ".text": {
          gridArea: ["1/1/2/-1", "1/2/2/6"],
          mt: [10, 21],
          mb: [3, 0],
          h2: {},
          p: {
            mt: [3, 4],
            fontSize: [""],
          },
          ".link": {
            mt: [1],
            p: {
              mt: 0,
              fontSize: ["16px"],
              fontWeight: "500",
              fontFamily: "medium",
            },
          },
        },
        ".imagewrapper": {
          position: "relative",
          width: ["100vw", "50vw"],
          left: [
            "-20px",
            (t) => `calc(calc(${t.colWidthDesktop} * 6)  + 220px  )`,
          ],
          height: ["320px", "592px"],
          gridArea: ["2/1/3/-1", "1/1/2/-1"],
          img: {
            zIndex: 99,
            position: "absolute",
            height: ["100%", "100%"],
            width: ["100%"],
            top: ["unset", 0],
            bottom: [0, "unset"],
            display: "flex",
            justifyContent: "center",
          },
        },
        ".bottom": {
          gridArea: ["3/1/4/-1"],
          display: ["block", "none"],
          height: ["227px"],
          width: ["100vw"],
          left: ["-20px"],
          position: "relative",
          bg: "#F2F2F2",
        },
      },
      partners: {
        bg: "clearWhite",
        color: "black",
        ".text": {
          mt: [10],
          mb: [9],
          gridArea: ["1/1/2/-1", "1/2/2/6"],
          h2: {
            lineHeight: ["48px"],
          },
        },
        ".carousel": {
          gridArea: ["2/1/3/-1"],
          height: "250px",
          width: "100vw",
          left: ["-20px", "-40px"],
          position: "relative",
          overflowY: "hidden",
          display: "flex",
          flexFlow: "column",
          ".row1": {
            width: "100%",

            display: "flex",
            flexFlow: ["row nowrap"],
            alignItems: "center",

            ".imagewrapper": {
              flex: "0 200px",
              ml: [9],
              img: {
                objectFit: "contain",
              },
            },
          },
          ".row2": {
            width: "10000px",
            display: "flex",
            flexFlow: ["row nowrap"],
            alignItems: "center",

            ".imagewrapper": {
              flex: "0 200px",
              ml: [9],
              img: {
                objectFit: "contain",
              },
            },
          },
        },
      },
      advancedei: {
        bg: "lightTurquoise",
        color: "black",
        ".text": {
          mt: [10, 22],
          mb: [0, 30],
          gridArea: ["1/1/2/-1", "1/7/2/-2"],
          ml: [0, (t) => `calc(${t.colWidthDesktop})`],
          h2: {},
          p: {
            mt: ["30px", 4],
            fontFamily: "body",
            fontWeight: "400",
            color: "black",
          },
          ".link": {
            mt: [1, 3],
            p: {
              fontFamily: "medium",
              fontWeight: "500",
              mt: 0,
            },
          },
        },
        ".graphics": {
          gridArea: ["2/1/3/-1", "1/1/2/6"],
          height: ["120px", "100%"],
          position: "relative",
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
          ],
          left: ["-20px", "-40px"],
          ".box1": {
            position: "absolute",
            left: 0,
            bottom: 0,
            height: ["67px", "36%"],
            width: [
              "115px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2.5) + 120px)`,
            ],
            bg: "#02C3CF",
            zIndex: 99,
          },
          ".box2": {
            position: "absolute",
            left: ["42px", (t) => `calc(${t.colWidthDesktop} + 40px)`],
            bottom: "0",
            width: [
              "134px",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
            ],
            height: ["120px", "64%"],
            bg: "#A4F0F4",
            zIndex: 89,
          },
          ".box3": {
            position: "absolute",
            display: ["none", "block"],
            left: 0,
            bottom: "0",
            width: [(t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`],
            height: ["120px", "100%"],
            bg: "#000",
            zIndex: 88,
          },
        },
      },
      quotes: {
        bg: "white",
        color: "black",
        ".imagewrapper": {
          gridArea: ["1/1/2/-1", "1/1/2/6"],
          position: "relative",
          height: ["0", "760px"],
          pt: ["70%", 0],
          overflow: ["hidden", "unset"],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
          ],
          left: ["-20px", "-40px"],
          picture: {
            position: "absolute",
            width: "100%",
            height: ["unset", "100%"],
            top: [0],
            left: 0,
            bottom: 0,
            right: 0,
          },
        },
        ".text": {
          gridArea: ["2/1/3/-1", "1/6/2/-2"],
          position: "relative",
          mt: [3, 25],
          ml: [
            (t) => `calc(${t.colWidthMob} + 5px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
          ],

          h3: {
            fontFamily: "display",
            fontWeight: "500",
            fontSize: ["24px", "40px"],
            lineHeight: ["31.2px", "48px"],
          },
          ".source": {
            // ml: [(t) => `calc(${t.colWidthMob} + 5px)`],
            mt: [3, 7],
            mb: [5],
            ".name": {
              fontFamily: "medium",
              fontWeight: "500",
              lineHeight: ["24px", "32px"],
              fontSize: ["16px"],
            },
            ".title": {
              fontFamily: "body",
              fontWeight: "400",
              fontSize: ["16px"],
              lineHeight: "24px",
            },
          },
          ".quotationmark": {
            display: ["none", "unset"],
            position: "absolute",
            left: [0, (t) => `calc(${t.colWidthDesktop} * -1)`],
          },
        },
        ".navigation": {
          mt: ["20px", 0],
          gridArea: ["3/1/4/-1", "1/12/2/-1"],
          height: ["64px", "100%"],
          width: ["100vw", "auto"],
          left: ["-20px", "unset"],
          right: ["unset", "-40px"],
          position: "relative",
          display: "flex",
          flexFlow: ["row nowrap", "column"],
          ".prev": {
            bg: "rgba(58, 58, 61, 0.1)",
            cursor: "pointer",
            height: "100%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          ".next": {
            bg: "rgba(255, 255, 255, 0.24)",
            cursor: "pointer",
            height: "100%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            svg: {
              transform: "rotate(180deg)",
            },
          },
        },
      },
      marketplacepartners: {
        color: "black",
        position: "relative",
        bg: "#FFF",
        ".graphics": {
          gridArea: ["1/1/2/-1", "1/1/2/6"],
          height: ["184px", "100%"],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
          ],
          left: ["-20px", "-40px"],
          position: "relative",
          ".circles": {
            position: "absolute",
            width: ["215px", "464px"],
            bottom: ["-107.5px", "unset"],
            height: ["215px", "100%"],
            display: "flex",
            alignItems: "center",
            right: ["20%", "-232px"],
            div: {
              width: "inherit",
              height: "inherit",
              svg: {
                width: "inherit",
                height: "inherit",
                transform: ["rotate(90deg)", "unset"],
              },
            },
          },
          ".background": {
            position: "absolute",
            height: "100%",
            width: [
              "100%",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
            ],
            bg: "lightViolet",
          },
        },
        ".text": {
          gridArea: ["2/1/3/-1", "1/7/2/-1"],
          mt: ["149px", "275px"],
          mb: [10, "303px"],
          h2: {},
          p: {
            mt: ["20px", 4],
          },
          ".link": {
            mt: [1],
            mb: [0],
            p: {
              mt: 0,
              fontFamily: "medium",
            },
          },
        },
      },
    },
    values: {
      payequity: {
        topgraphic: {
          position: "absolute",
          top: [0],

          left: ["40px", (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`],
          height: [
            `calc(100vw - 80px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
          ],
          width: [
            `calc(100vw - 80px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
          ],
          img: {
            position: "absolute",
            height: "100%",
            width: "100%",
            bottom: ["45%"],
          },
        },
        compensation: {
          bg: "lightGray",
          ".top": {
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            mt: [23, "248px "],
            color: "black",
            h2: {
              fontFamily: "display",
              fontSize: ["32px", "40px"],
              fontWeight: "500",
              lineHeight: ["38.4px", "48px"],
            },
            ".body": {
              display: "flex",
              flexFlow: ["column", "unset"],
              mt: [3],
              mb: [8, 11],
              ".section1": {
                width: [
                  "unset",
                  (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                ],
                mr: [0, (t) => `calc(${t.colWidthDesktop})`],
              },
              ".section2": {
                mt: [3, 0],
                width: [
                  "unset",
                  (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                ],
              },
              p: {
                fontFamily: "body",
                fontSize: "16px",
                lineHeight: "24px",
              },
            },

            ".compensationTopGraphic": {
              position: "relative",
              height: ["60px", "164px"],
              img: {
                position: "absolute",
                height: "200%",
                width: "100%",
                zIndex: 99,
              },
            },
          },
        },
        compensationgraph: {
          bg: "black",
          ".wrapper": {
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            display: "flex",
            flexFlow: ["column-reverse", "unset"],
            alignItems: "flex-start",
            mt: [12, "244px"],
            mb: [13],
            ".graph": {
              position: "relative",
              height: ["206px", "215px"],
              left: ["-20px", "unset"],
              mb: [6, 0],
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
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
                display: ["none", "unset"],
                position: "absolute",
                width: "100%",
                height: "1px",
                bg: "#3A3A3D",
                bottom: 0,
              },
              ".labels": {
                mt: ["30px", 0],
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
              ml: [0, (t) => `calc(${t.colWidthDesktop})`],
              mb: [7, 0],
              width: [
                "unset",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) +  160px)`,
              ],
              fontSize: "16px",
              lineHeight: "24px",
            },
          },
        },
        reports: {
          ".text": {
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            color: "black",
            display: "flex",
            flexFlow: ["column", "unset"],
            mt: [10, 16],
            mb: [8, 20],
            h2: {
              fontFamily: "display",
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              ],
            },
            ".body": {
              mt: [3, 0],
              ml: [0, (t) => `calc(${t.colWidthDesktop})`],
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              ],
              display: "flex",
              flexFlow: "column",
              p: {
                fontSize: "16px",
                lineHeight: "24px",
              },
              ".section1": {},
              ".section2": {
                mt: [3],
              },
            },
          },
        },
        quotesection: {},

        affordable: {
          bg: "transparent",
          color: "black",
          ".header": {
            mt: [8, "268px"],
            mb: [0, "307px"],
            gridArea: ["1/1/2/-1", "1/7/2/-1"],
            ml: [0, (t) => `calc(${t.colWidthDesktop})`],

            h2: {
              fontFamily: "display",
            },
            p: {
              mt: [3, 4],
              fontSize: "16px",
            },
            ".link": {
              p: {
                mt: [0],
                fontFamily: "medium",
                fontSize: "16px",
              },
            },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1", "1/2/2/7"],
            position: "relative",
            mb: [10, 0],
            height: [(t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`, "100%"],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
            ],
            left: [(t) => t.colWidthMob, (t) => t.colWidthDesktop],
            display: ["unset", "flex"],
            alignItems: "center",
            img: {
              position: ["absolute", "relative"],
              top: [0, "unset"],
              left: [0, "unset"],
              width: "100%",
              height: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
              ],
            },
          },
        },
      },
      deijourney: {
        topgraphic: {
          position: "absolute",
          zIndex: 99,
          right: ["20px", (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`],
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
          h2: {
            mt: [10, 16],
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            fontWeight: "500",
            fontFamily: "display",
          },
          ".text": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            mt: [3, 5],
            mb: [7, 18],
            display: "flex",
            flexFlow: ["column", "row wrap"],
            ".section": {
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              ],
              ".title": {
                fontFamily: "medium",
                fontSize: ["16px"],
                lineHeight: ["24px"],
              },
              ".body": {
                fontSize: ["16px"],
                lineHeight: ["24px"],
              },
            },
            ".section:nth-of-type(2n)": {
              ml: [0, (t) => `calc(${t.colWidthDesktop})`],
            },
          },
        },
        partners: {
          bg: "rgba(250, 250, 250, 0.96)",
          color: "black",
          ".graphic": {
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
          ".text": {
            gridArea: ["2/1/3/-1", "1/3/2/8"],
            mt: [18],
            mb: [10, 19],
            h2: {
              fontFamily: "display",
            },
            p: {
              mt: [3, 4],
              fontSize: ["16px"],
              lineHeight: ["24px"],
            },
            ".partnersLink": {
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
      leadership: {
        topimage: {
          position: "absolute",
          width: [
            "calc(100vw - 20px)",
            (t) => `calc(calc(${t.colWidthDesktop} * 10) +  400px)`,
          ],
          right: 0,
          top: [
            (t) => `calc(calc(calc(calc(100vw -20px) * .6) / 2) / -1)`,
            (t) =>
              `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .45) * .5) / -1)`,
          ],
          height: [
            0,
            (t) => `calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .45)`,
          ],
          pt: ["60%", 0],
          img: {
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
          },
        },
        textmodules: {
          pt: [18, "388px"],
          bg: "lightGray",
          ".wrapper": {
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            ml: [0],
            ".module": {
              color: "black",
              position: "relative",
              display: "flex",
              flexFlow: ["column", "unset"],
              pt: [2],
              mb: [6, 11],
              ".divider": {
                position: "absolute",
                top: 0,
                width: [
                  "calc(100vw - 20px)",
                  (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
                ],

                height: ["1px"],
                span: {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  bg: "black",
                },
              },
              ".section1": {
                width: [
                  "100%",
                  (t) => `calc(calc(${t.colWidthDesktop} * 5) + 160px)`,
                ],

                h2: {
                  fontFamily: "display",
                },
              },
              ".section2": {
                width: [
                  "100%",
                  (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
                ],
                mt: [3, 0],
                pr: ["20px", (t) => `calc(calc(${t.colWidthDesktop}) + 40px)`],
                p: {
                  lineHeight: ["24px"],
                  fontSize: ["16px"],
                },
                ".linksection": {
                  p: {
                    fontFamily: "medium",
                  },
                  mt: [1],
                  ".link": {
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
      },

      subnavigation: {
        display: "flex",
        height: ["auto", "356px"],
        flexFlow: ["column-reverse", "unset"],

        ".next": {
          height: ["224px", "100%"],
          pl: [(t) => `calc(calc(${t.colWidthMob} * 3) + 80px)`, 0],
          flex: [1, "0 50%"],
          display: "flex",
          alignItems: "center",
        },
        ".full": {
          flex: "0 100%",
          pl: ["50vw"],
        },

        ".prev": {
          height: ["224px", "100%"],
          flex: [1, "0 50%"],
          pl: [(t) => `calc(${t.colWidthMob} + 40px)`, 0],
          display: "flex",
          alignItems: "center",
        },

        ".link": {
          ml: [0, (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`],
          mr: [6, 0],
          textDecoration: "none",
          height: ["100%", "auto"],
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: ["center", "flex-end"],
          h3: {
            fontFamily: "display",
            fontSize: ["24px", "40px"],
            lineHeight: ["24px", "40px"],
            // mb: [8],
            color: "black",
          },
          ".rotated": {
            div: {
              svg: {
                transform: "rotate(180deg)",
              },
            },
          },
          div: {
            div: {
              svg: {
                height: ["30px"],
                width: ["30px"],
                position: "relative",
                mb: [4, 7],
                g: {
                  position: "absolute",
                  left: 0,
                  path: {
                    stroke: "black",
                  },
                  line: {
                    stroke: "black",
                  },
                },
              },
            },
          },
        },
      },
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
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 7) + 280px)`,
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
            h2: {},
          },
          ".section2": {
            mt: [3, 16],
            gridArea: ["2/1/3/-1", "1/7/2/-2"],
            ml: [0, (t) => t.colWidthDesktop],
            mb: [10, 16],
            p: {
              lineHeight: ["24px"],
              fontSize: ["16px"],
            },
          },
        },
        whymeasure: {
          bg: "transparent",
          color: "black",

          ".top": {
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            display: "flex",
            flexFlow: ["column", "unset"],
            mt: [8, 16],
            mb: [6, 13],
            ".section1": {
              flex: "auto",
              width: ["100%", (t) => t.desktopSectionWidth],
              h2: {},
            },

            ".section2": {
              width: ["100%", (t) => t.desktopSectionWidth],
              ml: [0, (t) => `calc(${t.colWidthDesktop})`],
              p: {
                mt: [3, 0],
                fontSize: ["16px"],
                lineHeight: ["24px"],
              },
            },
          },

          ".categories": {
            mb: [7],
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            display: "flex",
            flexFlow: ["column", "row"],
            ".category": {
              display: ["flex", "unset"],
              width: [
                "auto",
                (t) => `calc(calc(${t.colWidthDesktop} * 3) +  80px)`,
              ],
              mr: [0, "40px"],
              position: "relative",
              ".divider": {
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
              ".title": {
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
              ".items": {
                width: [
                  (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
                  "unset",
                ],
                mt: [2, 0],
                display: "flex",
                flexFlow: "column",
                p: {
                  fontSize: ["14px"],
                  lineHeight: ["21px"],
                },
              },
            },
          },
        },
        intersectional: {
          bg: "black",
          color: "white",
          ".graphic": {
            mt: [10, 16],
            gridArea: ["1/1/2/-1", "1/7/2/-1"],
            height: ["225px", "405px"],
            position: "relative",
            img: {
              position: "absolute",
              width: "100%",
              height: "100%",
            },
          },
          ".text": {
            mt: [10, 16],
            mb: [12, 27],
            gridArea: ["2/1/3/-1", "1/3/2/6"],
            p: {
              lineHeight: ["24px"],
            },
          },
        },
        thoughtful: {
          bg: "transparent",
          color: "black",
          ".section1": {
            gridArea: ["1/1/2/-1", "1/3/2/8"],
            mt: [12, 16],
            mb: [5, 19],
            h2: {},
            p: {
              mt: [3, 4],
              pr: [(t) => t.colWidthDesktop],
            },
          },
          ".section2": {
            gridArea: ["2/1/3/-1", "1/7/2/-2"],
            ml: [0, (t) => t.colWidthDesktop],
            mt: [0, 26],
            ".text": {
              p: {
                mt: 0,
                pr: 0,
              },
            },
            ".team": {
              mt: [3],
              ".divider": {
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
              ".header": {
                mt: [1],
                p: {
                  fontWeight: "500",
                  fontFamily: "medium",
                },
              },
              ".links": {
                mt: [0, 1],
                mb: [12],
                a: {
                  mb: [1],
                },
                display: "flex",
                flexFlow: ["column"],
                p: {
                  fontWeight: "500",
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
            ],
            bottom: ["-26px", "-24px"],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`,
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
              width: ["100%", (t) => t.desktopSectionWidth],
              ".insightscircle": {
                svg: {
                  height: ["100%"],
                  width: "100%",
                },
              },
            },
            ".section2": {
              width: ["100%", (t) => t.desktopSectionWidth],
              ml: [0, (t) => t.colWidthDesktop],
              display: "flex",
              alignItems: "center",
              mt: [6, 0],
              ".text": {},
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
              mx: [3, (t) => t.colWidthDesktop],
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
              width: ["100%", (t) => t.desktopSectionWidth],
              h2: {},
            },
            ".section2": {
              mt: [3, 0],
              width: ["100%", (t) => t.desktopSectionWidth],
              ml: [0, (t) => t.colWidthDesktop],
              p: {},
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
          ".text": {
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            mt: [12],
            mb: [5],
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1", "1/7/2/-1"],
            mt: [0, 16],
            mb: [13, 16],
            ml: [0, (t) => t.colWidthDesktop],
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
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 8) + 320px)`,
            ],
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "flex-end",
            svg: {
              width: "100%",
              height: "100%",
            },
          },
        },
        deiwork: {
          bg: "black",
          ".title": {
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            mt: [10, 19],
          },
          ".wrapper": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            display: "flex",
            flexFlow: ["column", "unset"],
            mt: [4],
            mb: [19],
            ".section1": {
              width: ["100%", (t) => t.desktopSectionWidth],
              display: "flex",
              flexFlow: "column",
              ".text": {
                h2: {},
                p: {},
              },
              ".carousel": {
                mt: [8],
                mr: [(t) => t.colWidthDesktop],
              },
            },
            ".section2": {
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 6) + 200px)`,
              ],
              pt: ["83%", 0],
              ml: [0, (t) => t.colWidthDesktop],
              position: "relative",
              height: [
                0,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktop} * 6) + 200px) * .69)`,
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
          ".text": {
            gridArea: ["1/1/2/-1", "1/3/2/8"],
            mt: [10, 16],
            mb: [10, 16],
            h2: {},
            p: { mt: [3] },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1", "1/9/2/-1"],
            mt: [0, 16],
            mb: [9],
            height: [
              "auto",
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 2) + 80px) * .74)`,
            ],
            width: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
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
          ".buttonwrapper": {
            position: "absolute",
            bottom: ["-28px", "-24px"],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [(t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`],
            height: ["126px", "unset"],
            bottom: 0,
            right: 0,
            overflow: "hidden",
            svg: {
              position: "absolute",

              left: ["-6%"],
              bottom: ["-35%"],
            },
          },
        },
        bestinclass: {
          bg: "black",
          ".toptext": {
            gridArea: ["1/1/2/-1", "1/3/2/8"],
            mt: [10, 16],

            h2: {},
            p: {
              mt: [3, 4],
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
                  width: ["100%", (t) => `calc(${t.colWidthDesktop} * 3)`],
                  pr: ["60px", 0],
                },
              },
            },
          },
        },
        workflows: {
          bg: "transparent",
          color: "black",
          ".graphic": {
            position: "relative",
            gridArea: ["1/1/2/-1", "1/2/2/7"],
            ml: [0, (t) => `calc(${t.colWidthDesktop} + 20px)`],
            overflow: "hidden",
            mb: [26, 0],
            display: "flex",
            alignItems: ["flex-end", "center"],
            div: {
              width: ["100%", "464px"],
              pt: ["100%", 0],
              height: [0, "464px"],
              left: [(t) => `calc(${t.colWidthMob} + 10px)`, "unset"],
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
          ".wrapper": {
            gridArea: ["1/1/2/-1", "1/6/2/-1"],
            zIndex: 99,
            mt: [26],
            mb: [26],
            ".toptext": {
              mr: [0, (t) => `calc(calc(${t.colWidthDesktop} * 3) + 80px)`],
              h2: {},
              p: {
                mt: [3],
              },
            },
            ".categories": {
              mt: [8, 10],
              display: "flex",
              flexFlow: ["column", "row"],

              ".category": {
                width: [
                  "100%",
                  (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
                ],
                mr: ["40px"],

                ".title": {
                  // width: "60%",

                  fontFamily: "display",
                },
                ".body": {
                  // width: "60%",
                  mt: [2],
                  fontFamily: "body",
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
              // mt: [0],
              // mb: [7],

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
            gridArea: ["2/1/3/-1", "1/8/2/-2"],
            mt: [6, 16],
            mb: [12, 16],
            width: ["auto"],
            ml: [0, (t) => t.colWidthDesktop],

            height: ["auto"],
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
                // display: "flex",
                // justifyContent: "center",
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
        header: {
          bg: "rgba(242, 242, 242, 0.5)",
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
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [(t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`, "unset"],

            bottom: 0,
            display: ["flex", "none"],
            alignItems: "flex-end",
            svg: {
              width: "100%",
              height: "100%",
              left: 0,
              top: 0,
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
              width: ["100%", (t) => t.desktopSectionWidth],
            },
            p: {
              width: ["100%", (t) => t.desktopSectionWidth],
              ml: [0, (t) => t.colWidthDesktop],
              mt: [3, 0],
            },
          },
          ".logos": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            mb: [7],
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
          ".wrapper": {
            gridArea: ["1/1/2/-1", "1/3/2/7"],
            mt: [7],
            mb: [4],
            display: "flex",
            alignItems: "center",
            ".text": {
              h2: {},
              p: {
                mt: [3, 4],
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

          ".graphic": {
            mt: [0, 7],
            gridArea: ["2/1/3/-1", "1/7/2/-1"],
            ml: [0, (t) => t.colWidthDesktop],
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
          mr: [(t) => t.colWidthDesktop],
          mt: [18, 21],
          mb: [2, 15],
          h1: {
            fontSize: ["36px", "52px"],
            lineHeight: ["43px", "58px"],
          },
          h3: {
            mt: [3],
            fontSize: ["20px"],
            lineHeight: ["30px"],
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
            ],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 2.5) + 60px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
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
            ],
            left: [
              (t) => `calc(${t.colWidthMob} + 20px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
            ],
            bg: "#0227C4",
          },
          // div: {
          //   width: "100%",
          //   height: "100%",
          //   div: {
          //     height: "100%",
          //     width: "100%",
          //     display: "flex",
          //     justifyContent: "flex-end",
          //     svg: {
          //       height: "100%",
          //     },
          //   },
          // },
        },
      },
      cost: {
        bg: "#F8F8F8",
        color: "black",
        ".section1": {
          gridArea: ["1/1/2/-1", "1/2/2/7"],
          mt: [5, 16],
          mb: [8, 17],
          ".toptext": {
            mb: [3],
            p: {},
          },
          ".list": {
            // gridArea: ["2/1/3/-1"],
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
          ml: [0, (t) => t.colWidthDesktop],
          mr: [0, (t) => t.colWidthDesktop],
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
        ".toptext": {
          gridArea: ["1/1/2/-1", "1/2/2/-2"],
          mt: [8, 16],
          mb: [3, 10],
          display: "flex",
          flexFlow: ["column", "unset"],

          h2: {
            width: ["100%", (t) => t.desktopSectionWidth],
          },
          p: {
            mt: [3, 0],
            width: ["100%", (t) => t.desktopSectionWidth],
            ml: [0, (t) => t.colWidthDesktop],
          },
        },
        ".table": {
          position: "relative",
          width: "100vw",
          left: ["-20px", "-40px"],
          mb: [9, 16],
          gridArea: ["2/1/3/-1"],
          ".head": {
            position: "relative",
            pl: ["20px", (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`],
            pr: ["20px", "40px"],
            display: "grid",
            gridAutoRows: ["200px"],
            gridTemplateColumns: ["4fr 1fr 1fr 1fr", "4fr 1fr 2fr 1fr"],
            ".headItem": {
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              mb: [3, 2],
              position: "relative",
              ".focusborder": {
                position: "absolute",
                top: ["30%", "60%"],
                zIndex: 998,
                width: "100%",
                height: ["610%", "450%"],
                border: (t) => `solid 1px ${t.colors.yellow}`,
              },
              ".logo": {
                position: "absolute",
                top: ["37%", "unset"],
                left: ["22%"],
                bottom: ["unset", 0],
                transform: ["rotate(90deg)", "rotate(0deg)"],
                transformOrigin: ["bottom left"],
              },
              p: {
                writingMode: ["vertical-rl", "unset"],
                textAlign: ["right", "unset"],
                lineHeight: ["19.2px"],
              },
            },
          },
          ".body": {
            ".bodyRow": {
              pl: ["20px", (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`],
              pr: ["20px", "40px"],
              position: "relative",
              ".bodyGrid": {
                display: "grid",
                ml: [0],
                gridTemplateColumns: ["4fr 1fr 1fr  1fr", "4fr 1fr 2fr 1fr"],
                gridAutoRows: ["auto"],
                ".bodyItem": {
                  display: "flex",
                  alignItems: "center",
                  mt: [3],
                  mb: [3],

                  p: {
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
            ],
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 3) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 9) + 400px)`,
            ],
            svg: {
              width: "100%",
              height: "100%",
            },
          },
        },
        better: {
          bg: "#F8F8F8",
          color: "black",
          ".toptext": {
            mt: [16],
            mb: [12],
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            display: "flex",

            ".section1": {
              width: [(t) => t.desktopSectionWidth],
            },
            ".section2": {
              ml: [(t) => t.colWidthDesktop],
              width: [(t) => t.desktopSectionWidth],

              h2: {},
              p: {
                mt: [1],
              },
            },
          },

          ".people": {
            gridArea: ["2/1/3/-1", "2/3/3/-1"],
            width: ["100vw", "unset"],
            left: ["-20px", "unset"],
            position: "relative",
            mb: [14, 16],
            display: "flex",
            flexFlow: ["row wrap"],
            justifyContent: ["space-between", "unset"],
            ".person:nth-of-type(4n)": {
              mr: 0,
            },
            ".person": {
              width: [(t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`],
              mr: [(t) => `calc(${t.colWidthDesktop} *.848)`],

              // flex: ["0 50%", "0 25%"],
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
                ],
                height: [
                  "160px",
                  (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
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
            left: [(t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`, "unset"],
            width: [(t) => `calc(calc(${t.colWidthMob} * 3) + 70px)`, "unset"],
            display: ["flex", "none"],
            alignItems: "flex-end",
            svg: {
              width: "100%",
              height: "100%",
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
            width: ["100%", (t) => t.desktopSectionWidth],
          },
          ".section2": {
            width: ["100%", (t) => t.desktopSectionWidth],
            ml: [0, (t) => t.colWidthDesktop],
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
            bottom: 0,
            height: [
              (t) => `calc(calc(calc(${t.colWidthMob} * 6) + 120px) * .59)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktop} * 10) + 400px) * .45)`,
            ],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 6) + 120px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
            ],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
            ],
            img: {
              position: "absolute",
              width: "100%",
              height: "100%",
              bottom: "-50%",
            },
          },
        },
        onboarding: {
          bg: "#F8F8F8",
          color: "black",

          ".textmodules": {
            mt: [16, "390px"],
            mb: [5, 10],
            gridArea: ["1/1/2/-1", "1/3/2/-1"],
            display: "flex",
            flexFlow: ["column"],
            ".textblock": {
              mb: [7],
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
                width: ["100%", (t) => t.desktopSectionWidth],
                mt: [2],
                mb: [3],
                h2: {},
                p: { mt: [1] },
              },
              ".list": {
                width: ["100%", (t) => t.desktopSectionWidth],
                ml: [0, (t) => t.colWidthDesktop],
                mt: [2],
                ".listtitle": {
                  mb: [1],
                  fontWeight: "500",
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
        learnmore: {
          bg: "yellow",
          color: "black",
          ".imagewrapper": {
            position: "relative",
            gridArea: ["1/1/2/-1", "1/8/2/-1"],
            height: [
              "calc(100vw * .56)",
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) * .74)`,
            ],
            width: [
              "100vw",
              (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
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
            mr: [0, (t) => t.colWidthDesktop],
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
                fontWeight: "500",
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
              width: ["100%", (t) => t.desktopSectionWidth],
              mt: [2],
              mb: [3],
              h2: {},
              p: { mt: [1] },
            },
            ".list": {
              width: ["100%", (t) => t.desktopSectionWidth],
              ml: [0, (t) => t.colWidthDesktop],
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
    navigation: {
      position: "fixed",
      zIndex: 999,
      height: "94px",
      width: "100%",
      display: ["none", "block"],
      fontFamily: "body",
      ".logowrapper": {
        position: "relative",
        width: "0",
        height: "0",
        left: 0,
        ".logo": {
          position: "absolute",
          left: ["40px"],
          top: ["40px"],
          div: {
            div: {
              svg: {
                fill: "#fff",
                path: {
                  fill: "#fff",
                },
              },
            },
          },
        },
      },
      ".links": {
        display: "flex",
        justifyContent: "flex-end",
        px: ["40px"],
        pt: ["44px"],
        ".item": {
          fontSize: "nav",
          fontFamily: "medium",
          color: "white",
          ml: [4],
          textDecoration: "none",
          div: {
            "&:hover": {
              opacity: 0.95,
            },
          },
        },
        ".login": {
          color: "yellow",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          ".arrow": {
            pl: "14px",
          },
        },
      },
      default: {
        bg: "black",
        color: "white",
        ".main": {
          a: {
            color: "white !important",
          },
          path: {
            stroke: "white !important",
          },
        },
        ".item": {
          color: "white",
        },
        ".login": {
          color: "yellow",
          path: {
            stroke: "yellow",
          },
          line: {
            stroke: "yellow",
          },
        },
        ".logo": {
          path: {
            fill: "white",
          },
        },
        ".hamburger": {
          span: {
            bg: "white",
          },
        },
      },
      violet: {
        bg: "violet",
        color: "black",
        ".main": {
          a: {
            color: "black !important",
          },
          path: {
            stroke: "black !important",
          },
        },
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.blue} !important`,
          path: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
        ".hamburger": {
          span: {
            bg: (t) => `${t.colors.black} !important`,
          },
        },
      },
      gray: {
        bg: "#F8F8F8",
        color: "black",
        ".main": {
          a: {
            color: "black !important",
          },
          path: {
            stroke: "black !important",
          },
        },
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.blue} !important`,
          path: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
        ".hamburger": {
          span: {
            bg: (t) => `${t.colors.black} !important`,
          },
        },
      },
      gray2: {
        bg: "#F2F2F2",
        color: "black",
        ".main": {
          a: {
            color: "black !important",
          },
          path: {
            stroke: "black !important",
          },
        },
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.blue} !important`,
          path: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
        ".hamburger": {
          span: {
            bg: (t) => `${t.colors.black} !important`,
          },
        },
      },

      white: {
        bg: "#FFF",
        color: "black",
        ".main": {
          a: {
            color: "black !important",
          },
          path: {
            stroke: "black !important",
          },
        },
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.blue} !important`,
          path: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
        ".hamburger": {
          span: {
            bg: (t) => `${t.colors.black} !important`,
          },
        },
      },
      lightTurquoise: {
        bg: "lightTurquoise",
        color: "black",
        ".main": {
          a: {
            color: "black !important",
          },
          path: {
            stroke: "black !important",
          },
        },
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.blue} !important`,
          path: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
        ".hamburger": {
          span: {
            bg: (t) => `${t.colors.black} !important`,
          },
        },
      },
      yellow: {
        bg: "yellow",
        color: "black",
        ".main": {
          a: {
            color: "black !important",
          },
          path: {
            stroke: "black !important",
          },
        },
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.blue} !important`,
          path: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.blue} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
        ".hamburger": {
          span: {
            bg: (t) => `${t.colors.black} !important`,
          },
        },
      },
      mobilenav: {
        position: "fixed",
        zIndex: 1000,
        width: "100%",
        bg: "black",
        ".wrapper": {
          display: ["flex", "none"],
          justifyContent: "space-between",
          width: "100%",
          ".hamburger": {
            cursor: "pointer",
            mr: "20px",
            mt: "33px",
            position: "relative",
            height: "21px",
            width: "25px",
            span: {
              position: "absolute",
              transition: "all 200ms ease-out",
              left: 0,
              p: 0,
              m: 0,
              height: "3px",
              width: "25px",
              bg: "white",
            },
          },
          ".logo": {
            svg: {
              path: {
                fill: "white",
              },
            },
          },
        },
      },
    },

    submenu: {
      position: ["absolute", "fixed"],
      display: ["unset", "none"],
      top: ["74px", 24],
      left: [0, "40px"],
      width: ["100vw", "unset"],
      height: ["40px", "unset"],
      overflow: "hidden",
      zIndex: 99,
      ".container": {
        ".arrow": {
          cursor: "pointer",
          position: "absolute",
          bottom: "25%",
          path: {
            stroke: "#CACACE",
          },
        },
        ".left": {
          left: ["16px"],
          transform: "rotate(90deg)",
        },
        ".right": {
          right: ["16px"],
          transform: "rotate(-90deg)",
        },
        height: ["100%", "unset"],
        width: "100%",
        borderBottom: "1px solid #CACACE",
        display: "flex",
        flexFlow: ["row nowrap", "column"],
        alignItems: ["center", "unset"],
        ".item": {
          cursor: "pointer",
          mb: [0, 2],
          mr: [5, 0],
          color: "inherit",
          textDecoration: "none",
          whiteSpace: "nowrap",
          opacity: 0.5,
          height: "max-content",
          p: {
            fontSize: "14px",
            lineHeight: "16px",
            color: "inherit",
            fontFamily: "medium",
          },
          "&:hover": {
            opacity: 1,
          },
        },
        ".current": {
          opacity: 1,
          position: "relative",
          pl: [3],
          ".hamburger": {
            position: "absolute",
            left: 0,
            height: "100%",
            width: "12px",

            "#line1": {
              position: "absolute",
              height: "2px",
              display: ["none", "unset"],

              width: "100%",
              top: 0,
              transform: "translate3d(0,8px,0)",
              transition: "all 250ms",
            },
            "#line2": {
              position: "absolute",
              height: "2px",
              width: "100%",
              top: 0,
              opacity: 0,
              transform: "translate3d(-10px,10px,0)",
              transition: "all 250ms",
            },
          },
          ".folded": {
            "#line1": {
              transform: "translate3d(0, 5px,0)",
            },
            "#line2": {
              opacity: 1,
              transform: "translate3d(0,10px,0)",
            },
          },
          // ":after": {
          //   position: "absolute",
          //   content: '""',
          //   left: 0,
          //   top: ["25%"],
          //   bg: "black",
          //   height: "2px",
          //   width: "12px",
          // },
          // ":before": {
          //   position: "absolute",
          //   content: '""',
          //   left: 0,
          //   top: ["50%"],
          //   bg: "black",
          //   height: "2px",
          //   width: "12px",
          // },
        },
      },
    },
    mobilemenu: {
      position: "fixed",
      display: ["unset", "none"],
      pt: [11],
      bg: "black",
      height: "100vh",
      width: "100vw",
      zIndex: 999,
      ".navitems": {
        gridArea: ["1/1/2/-1"],
        ".item": {
          cursor: "pointer",
          mb: [2],

          ".wrapper": {
            // display: "flex",

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
            },

            ".sub": {
              display: "flex",
              flexFlow: "column",
              overflow: "hidden",

              ".subitem": {
                textDecoration: "none",
                position: "relative",
                bg: "#262629",
                py: [1],
                mb: [1],
                width: "100vw",
                left: "-20px",
                pl: "20px",
                color: "white",
                cursor: "pointer",
                "&:visited": {
                  outline: "none",
                },
              },
            },
          },
        },
      },
    },
    footer: {
      bg: "#1F1F21",
      ".header": {
        mt: [10, 11],
        gridArea: ["1/1/2/-1", "1/1/2/4"],
        h2: {
          fontFamily: "display",
          fontWeight: "500",
          fontSize: "28px",
        },
        p: {
          mt: ["20px", 4],
          mb: ["20px"],
          fontFamily: "body",
          fontWeight: "400",
        },
      },
      ".form": {
        mt: [0, 11],
        position: "relative",
        top: [0, "-12px"],
        gridArea: ["2/1/3/-1", "1/7/3/-1"],
        display: "flex",
        flexFlow: ["column wrap", "row wrap"],
        "input:nth-child(odd)": {
          flex: [1, "1 40%"],
          mr: [0, "6px"],
          mt: ["12px"],
          mb: 0,
        },
        "input:nth-child(even)": {
          flex: [1, "1 40%"],
          ml: [0, "6px"],
          mt: ["12px"],
          mb: 0,
        },
        ".dropdownwrapper": {
          flex: [1, "1 100%"],
          height: ["64px"],
          borderRadius: "8px",
          bg: "#262629",
          mt: ["12px"],
          ".dropdown": {
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
            ":focus": {
              outline: "none",
            },
            option: {
              width: "100%",
            },
          },
        },
        ".button": {
          mt: [3, 5],
          flex: [1, "1 100%"],
          display: "flex",
          justifyContent: ["flex-start", "flex-end"],
        },
      },
      ".socials": {
        gridArea: ["3/1/4/-1", "2/4/3/6"],
        mt: [6, 0],
        // display: "grid",
        // gridTemplateColumns: ["repeat(6,1fr)"],
        // columnGap: ["20px", "40px"],
        // gridTemplateRows: "auto",
        display: "flex",
        alignItems: "center",
        ".item": {
          mr: [2],
          cursor: "pointer",
        },
      },
      ".newsletter": {
        gridArea: ["4/1/5/-1", "3/4/4/7"],
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
      alignItems: "center",
      width: "fit-content",
      p: {
        mr: "10px",
      },
    },
    shared: {
      button: {
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
        ],
        bg: "blue",
        borderRadius: ["168px", "180px"],
        height: ["56px", "48px"],
        ".button": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: {
            // py: [2],
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
        ".imagewrapper": {
          position: "relative",
          gridArea: ["1/1/2/-1", "1/8/2/-1"],
          height: [
            "calc(100vw * .426)",
            (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 240px) * .83)`,
          ],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
          ],
          left: ["-20px", "-40px"],
          picture: {
            position: "absolute",
            height: "100%",
            width: "100%",
            img: {
              width: "inherit",
              height: "inherit",
            },
          },
        },
        ".text": {
          color: "black",
          gridArea: ["2/1/3/-1", "1/3/2/7"],
          mt: [4, 14],
          position: "relative",
          ".quotation": {
            position: "absolute",
            top: [0],
          },
          h3: {
            // mt: [4],
            ml: [5],
            fontFamily: "display",
            fontSize: ["24px", "40px"],
            lineHeight: ["31.2px", "48px"],
          },
          p: {
            mt: [4],
            ml: [5],
            mb: [8],
            lineHeight: ["20px"],
            fontSize: ["14px"],
            fontFamily: "body",
          },
        },
      },
      header: {
        color: "black",
        ".text": {
          mt: [18, 22],
          gridArea: ["1/1/2/-1", "1/3/2/9"],
        },
        h1: {},
        h3: {
          mt: [2, 3],

          fontFamily: "body",

          lineHeight: ["30px", "36px"],
          fontSize: ["20px", "24px"],
        },
        ".graphic": {
          gridArea: ["2/1/3/-1", "2/1/3/-1"],
          position: "relative",
          width: ["100vw"],
          left: ["-20px", "-40px"],
          // bottom: ["unset", 0],
        },
      },
      carousel: {
        position: "relative",
        width: ["100%"],
        flexFlow: ["column wrap"],
        ".item": {
          "&:hover": {
            ".header": {
              p: {
                color: "rgba(242, 242, 242, 1)",
              },
            },
          },
          mb: [2],
          ".header": {
            position: "relative",
            cursor: "pointer",
            pl: [2],
            p: {
              fontSize: ["16px"],
              lineHeight: "18.8px",
            },
            ".progressBar": {
              position: "absolute",
              left: 0,
              height: "100%",
              width: "2px",
              borderRadius: "6px",
              bg: "rgba(242, 242, 242, 0.24)",
              ".animation": {
                // bg: "yellow",
                width: "100%",
                height: "0",
                borderRadius: "6px",
              },
              ".active": {
                transition: "height 7500ms linear",
                height: "100%",
              },
            },
          },

          ".body": {
            mt: [2],
            ml: [2],
            p: {
              fontSize: ["16px"],
              lineHeight: ["24px"],
            },
            ".link": {
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
            width: ["100%", (t) => t.desktopSectionWidth],
          },
          ".section2": {
            ml: [0, (t) => t.colWidthDesktop],
            width: ["100%", (t) => t.desktopSectionWidth],

            h2: {},
            p: {
              mt: [2, 1],
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
            ],
            mr: [0, (t) => `calc(${t.colWidthDesktop} *.848)`],

            // flex: ["0 50%", "0 25%"],
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
              ],
              height: [
                "160px",
                (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
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
      bg: "black",
      color: "white",
      "&.menu-open": {
        overflow: "hidden",
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
