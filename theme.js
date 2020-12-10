import { transform } from "framer-motion";
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
          display: "none",
          svg: {
            position: "fixed",
            zIndex: 9999,
            top: ["24px", "44px"],
            left: ["20px", "40px"],
            height: [(t) => t.colWidthMob, (t) => t.colWidthDesktop],
            width: ["125px", "367px"],
            mb: ["20px", "40px"],
            transform: "rotate(90deg) translateX(-30%)",
            transformOrigin: "bottom left",
          },
        },
        ".text": {
          gridArea: ["1/2/2/-1", "1/7/2/-1"],
          ml: [
            (t) => `calc(${t.colWidthMob} + 10px)`,
            (t) => `calc(${t.colWidthDesktop})`,
          ],
          mt: [28],
          h1: {},
          ".button": {
            position: "relative",
            zIndex: 99,
            left: [0, "-8px"],
            gridArea: ["2/2/3/6", "2/7/3/-1"],
            width: ["160px"],
            height: "48px",
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
            height: ["250px", "310px"],
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
        ".toptext": {
          gridArea: ["1/2/2/-1", "1/7/2/-1"],
          ml: [
            (t) => `calc(${t.colWidthMob} + 10px)`,
            (t) => `calc(${t.colWidthDesktop})`,
          ],
          mt: [13, 11],
          mb: [0, 9],
          display: "flex",
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
          gridArea: ["2/1/3/-1", "2/6/3/-1"],
          mb: [0, "333px"],
          height: ["250px", "495px"],
          position: "relative",
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 6) + 280px)`,
          ],
          left: ["-20px", (t) => `calc(${t.colWidthDesktop})`],
          img: {
            position: "absolute",
            height: "100%",
            width: "100%",
          },
        },
        ".text": {
          gridArea: ["3/1/4/-1", "2/2/3/6"],
          mt: [6, 0],
          ml: [0],
          mb: [21, 26],
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
          mb: [24],
          position: "relative",
          gridArea: ["3/1/4/-1", "2/1/3/-1"],
          width: ["100%", "100vw"],
          left: [0, "-40px"],

          display: ["flex", "grid"],
          gridTemplateColumns: ["repeat(12,1fr)"],
          gridTemplateRows: ["auto"],
          px: ["40px"],
          columnGap: ["40px"],
          rowGap: ["0"],
          flexFlow: "column wrap",
          ".description": {
            gridArea: ["1/2/2/6"],
          },
          ".imagewrapper": {
            gridArea: ["1/7/3/-1"],
            position: "relative",
            height: ["400px"],
            img: {
              position: "absolute",
              height: ["100%"],
              width: "100%",
            },
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
          mb: ["226px", 0],
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
          height: ["auto", "592px"],
          gridArea: ["2/1/3/-1", "1/1/2/-1"],
          img: {
            zIndex: 99,
            position: "absolute",
            height: ["320px", "100%"],
            width: ["100%"],
            top: ["-40%", 0],
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
          overflowX: "scroll",
          overflowY: "hidden",
          display: "flex",
          flexFlow: "column",
          ".row1": {
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
          height: ["240px", "760px"],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
          ],
          left: ["-20px", "-40px"],
          img: {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
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
            width: ["464px"],
            height: "100%",
            display: "flex",
            alignItems: "center",
            right: ["-232px"],
          },
          ".background": {
            position: "absolute",
            height: "100%",
            width: [(t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`],
            bg: "lightViolet",
          },
        },
        ".text": {
          gridArea: ["2/1/3/-1", "1/7/2/-1"],
          mt: ["149px", "275px"],
          mb: ["303px"],
          h2: {},
          p: {
            mt: ["20px", 4],
          },
          ".link": {
            mt: [1],
            mb: ["80px", 0],
            p: {
              mt: 0,
              fontFamily: "medium",
            },
          },
        },
      },
    },
    values: {
      quote: {
        // bg: "#FAFAFA",
        ".imageWrapper": {
          position: "relative",
          gridArea: ["1/1/2/-1"],
          height: ["160px"],
          width: ["100vw"],
          left: ["-20px"],
          img: {
            position: "absolute",
            height: "100%",
            width: "100%",
          },
        },
        ".mainText": {
          color: "black",
          gridArea: ["2/1/3/-1"],
          position: "relative",
          ".quotationMark": {
            position: "absolute",
            top: ["32px"],
          },
          h3: {
            mt: [4],
            ml: [5],
            fontFamily: "display",
            fontWeight: "500",
            fontSize: ["24px"],
            lineHeight: ["31.2px"],
          },
          p: {
            mt: [4],
            ml: [5],
            mb: [8],
            lineHeight: ["20px"],
            fontSize: ["14px"],
          },
        },
      },
      payequity: {
        header: {
          ".headerText": {
            mt: [18, 22],
            gridArea: ["1/1/2/-1", "1/3/2/9"],
            color: "black",
          },
          h1: {},
          h3: {
            mt: [2, 3],
            mb: [2, 0],
            fontFamily: "body",
            fontWeight: "400",
            lineHeight: "36px",
            fontSize: ["24px"],
          },
          ".headerGraphic": {
            gridArea: ["2/1/3/-1", "2/9/3/-1"],
            position: "relative",
            height: ["100px", "215px"],
            width: ["100vw", "auto"],
            left: ["-20px", 0],
            bottom: ["unset", 0],
            ".headerImage": {
              position: "absolute",
              bg: "gray",
              opacity: 0.2,
              height: "200%",
              width: "100%",
            },
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

              ".section1": {
                width: (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                mr: (t) => `calc(${t.colWidthDesktop})`,
              },
              ".section2": {
                width: (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              },
              p: {
                mt: [3],
                mb: [8, 11],
                fontFamily: "body",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400",
              },
            },

            ".compensationTopGraphic": {
              position: "relative",
              height: ["60px", "164px"],
              img: {
                position: "absolute",
                height: "200%",
                width: "100%",
                zIndex: 999,
              },
            },
          },
          ".compensationBottom": {
            pt: [0, 25],
            pb: [0, 13],
            bg: "black",
            position: "relative",
            width: ["100vw"],
            left: ["-20px", "-40px"],
            gridArea: ["2/1/3/-1"],
            display: "flex",
            alignItems: "flex-start",

            ".text": {
              mt: [13, 2],
              ml: ["20px", (t) => `calc(${t.colWidthDesktop})`],
              width: [
                "unset",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              ],
              fontFamily: "body",
              fontSize: "16px",
              lineHeight: "24px",
            },
            ".compensationGraph": {
              mt: [5, 0],
              mb: [9, 0],
              mx: ["20px", 0],
              ml: [0, (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`],
              height: ["215px"],
              width: [
                "unset",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
              ],
              display: "flex",
              flexFlow: "row nowrap",
              ".dataPoint": {
                flex: 1,
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                ".yAxis": {
                  position: "relative",
                  transform: "translateX(1000%)",
                  height: "70%",
                  bottom: "20%",
                  borderLeft: "2px solid #00FCFF",
                  h3: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    color: "#00FCFF",
                    lineHeight: ["9px"],
                  },
                },
                p: {
                  fontSize: ["11px"],
                  color: "white",
                  opacity: 0.7,
                },
              },
            },
          },
        },
        reports: {
          ".reportsText": {
            gridArea: ["1/1/2/-1"],
            color: "black",
            h2: {
              mt: [10],
              fontFamily: "medium",
            },
            p: {
              mt: [3],
              mb: [8],
            },
          },
        },

        affordable: {
          ".header": {
            gridArea: ["1/1/2/-1"],
            color: "black",
            h2: {
              mt: [8],
              fontFamily: "medium",
            },
            p: {
              mt: [3],
            },
            ".affordableLink": {
              p: {
                mt: 0,
                fontFamily: "medium",
              },
            },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1"],
            position: "relative",
            height: "500px",
            width: "100vw",
            left: ["-20px"],
            ".placeholder": {
              bg: "gray",
              height: "100%",
              width: "100%",
            },
          },
        },
      },
      deijourney: {
        header: {
          ".top": {
            color: "black",
            gridArea: ["1/1/2/-1"],
            h1: {
              mt: [18],
            },
            h3: {
              mt: [2],
              fontSize: ["20px"],
              lineHeight: ["30px"],
              mb: [12],
            },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1"],
            position: "relative",
            zIndex: 999,
            div: {
              position: "absolute",
              top: ["-29.5px"],
              right: ["0"],
            },
          },
        },
        textblock: {
          // bg: "white",
          // opacity: 0.96,
          h2: {
            gridArea: ["1/1/2/-1"],
            fontWeight: "500",
            fontFamily: "display",
            color: "black",
            mt: [10],
          },
          ".text": {
            mt: [3],
            mb: [7],
            gridArea: ["2/1/3/-1"],
            color: "black",
          },
        },
        partners: {
          bg: "white",
          ".graphic": {
            gridArea: ["1/1/2/-1"],
            width: "100vw",
            left: ["-20px"],
            position: "relative",
            display: "flex",
            justifyContent: "center",
            div: {
              position: "absolute",
              height: "216px",
              width: "216px",
              top: ["-108px"],
              div: {
                position: "relative",
                top: 0,
                svg: {
                  height: "100%",
                  width: "100%",
                },
              },
            },
          },
          ".text": {
            color: "black",
            gridArea: ["2/1/3/-1"],
            h2: {
              mt: [18],
              fontFamily: "medium",
            },
            p: {
              mt: [3],
              lineHeight: ["24px"],
            },
            ".partnersLink": {
              mt: [1],
              mb: [10],
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
        header: {
          ".text": {
            color: "black",
            gridArea: ["1/1/2/-1"],
            h1: {
              mt: [18],
            },
            h3: {
              mt: [3],
              mb: [21],
              fontSize: ["20px"],
              fontWeight: "400",
              lineHeight: ["24px"],
            },
          },
          ".graphic": {
            position: "relative",
            gridArea: ["2/1/3/-1"],
            width: "100vw",
            // height: ["210px"],
            left: ["-20px"],
            pl: ["20px"],
            img: {
              position: "absolute",
              width: "calc(100% - 20px)",
              height: "210px",
              top: ["-144px"],
            },
          },
        },
        textmodules: {
          pt: [14],
          bg: "lightGray",
          ".modulesWrapper": {
            ml: ["20px"],
            ".module": {
              color: "black",
              ".divider": {
                position: "relative",
                width: "100%",
                height: ["1px"],
                span: {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  bg: "black",
                },
              },
              h2: {
                pt: [2],
                fontWeight: "500",
                fontFamily: "medium",
              },
              p: {
                mr: ["20px"],
                fontWeight: "400",
                lineHeight: ["24px"],
                pt: [3],
              },
              ".link": {
                mt: [1],
                pb: [5],
                mr: ["20px"],
                p: {
                  p: 0,
                  fontWeight: "500",
                  fontFamily: "medium",
                  lineHeight: "18.88px",
                },
              },
            },
          },
        },
      },

      subnavigation: {
        ".next": {
          height: ["224px"],
          bg: "violet",
          color: "black",
          ".secondHalf": {
            ml: ["53%"],
            mr: ["20px"],
            height: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-end",
            h3: {
              fontWeight: "500",
              fontFamily: "medium",
              mb: [8],
            },
            div: {
              div: {
                svg: {
                  height: ["24px"],
                  width: ["32px"],
                  position: "relative",
                  mb: [4],
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
        ".prev": {
          height: ["224px"],
          bg: "blue",
          color: "black",
          ".firstHalf": {
            // mr: ["50%"],
            ml: [10],
            height: "100%",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-end",
            h3: {
              fontWeight: "500",
              fontFamily: "medium",
              mb: [8],
            },
            div: {
              div: {
                svg: {
                  transform: "rotate(180deg)",
                  height: ["24px"],
                  width: ["32px"],
                  position: "relative",
                  mb: [4],
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
    },
    product: {
      measure: {
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
        metrics: {
          bg: "transparent",
          color: "black",
          h2: {
            gridArea: ["1/1/2/-1"],
            fontFamily: "display",
            mr: ["20px"],
            fontWeight: "500",
            fontSize: ["32px"],
            mt: [10],
          },
          p: {
            gridArea: ["2/1/3/-1"],
            mt: [3],
            mb: [10],
            lineHeight: ["24px"],
            fontWeight: "400",
          },
        },
        whymeasure: {
          bg: "transparent",
          color: "black",
          ".top": {
            gridArea: ["1/1/2/-1"],
            h2: {
              mt: [8],
              fontWeight: "500",
              fontFamily: "display",
            },
            p: {
              mt: [3],
              mb: [6],
              fontWeight: "400",
              lineHeight: ["24px"],
            },
          },
          ".categories": {
            mb: [7],
            gridArea: ["2/1/3/-1"],
            display: "flex",
            flexFlow: ["column"],
            ".categoryWrapper": {
              ".divider": {
                mb: [1],
                mt: [1],
                position: "relative",
                width: "100%",
                height: ["2px"],
                span: {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                },
              },
              ".category": {
                display: "flex",
                ".left": {
                  flex: 1,
                  p: {
                    fontWeight: "500",
                    fontSize: ["14px"],
                    lineHeight: ["21px"],
                    fontFamily: "display",
                  },
                },
                ".right": {
                  flex: 1,
                  p: {
                    fontWeight: "400",
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
          color: "rgba(242, 242, 242, 0.95)",
          ".graphic": {
            mt: [10],
            gridArea: ["1/1/2/-1"],
            height: ["225px"],
            position: "relative",
            img: {
              position: "absolute",
              width: "100%",
              height: "100%",
            },
          },
          ".text": {
            gridArea: ["2/1/3/-1"],
            p: {
              fontWeight: "400",
              lineHeight: ["24px"],
              mt: [10],
              mb: [12],
            },
          },
        },
        thoughtful: {
          color: "black",
          ".top": {
            gridArea: ["1/1/2/-1"],
            h2: {
              mt: [12],
            },
            p: {
              mt: [3],

              mb: [5],
            },
          },
          ".team": {
            gridArea: ["2/1/3/-1"],
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
              mt: [0],
              mb: [12],
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
      analyze: {
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
        insights: {
          bg: "black",
          h2: {
            mt: [10],
            gridArea: ["1/1/2/-1"],
          },
          ".insightscircle": {
            mt: [4],
            gridArea: ["2/1/3/-1"],
          },
          ".text": {
            mt: [6],
            gridArea: ["3/1/4/-1"],
          },
          ".confidence": {
            mt: [8],
            mb: [10],
            gridArea: ["4/1/5/-1"],
            border: (t) => `solid 2px ${t.colors.turquoise}`,
            borderRadius: ["20px"],
            ".lockWrapper": {
              position: "relative",
              div: {
                position: "absolute",
                width: ["38px"],
                height: ["28px"],
                top: ["-17px"],
                left: ["45px"],
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
              mx: [3],
              mt: [4],
              mb: [4],
              h3: {
                fontSize: ["24px"],
                fontWeight: "500",
                fontFamily: "medium",
                mb: [1],
              },
              p: {},
              ".link": {
                mt: [1],
                p: {
                  fontWeight: "500",
                  fontFamily: "body",
                },
              },
            },
          },
        },
        newinsights: {
          bg: "transparent",
          color: "black",
          h2: {
            gridArea: ["1/1/2/-1"],
            mt: [12],
          },
          p: {
            gridArea: ["2/1/3/-1"],
            mt: [3],
            mb: [6],
          },
        },
        inaction: {
          bg: "black",
          ".graphic": {
            mt: [8],
            gridArea: ["1/1/2/-1"],
            position: "relative",
            height: ["225px"],
            width: "100vw",
            left: ["-20px"],
            div: {
              position: "absolute",
              height: "100%",
              width: "100%",
              bg: "#000",
            },
          },
          ".text": {
            gridArea: ["2/1/3/-1"],
            mt: [6],
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
              fontWeight: "500",
              fontFamily: "body",
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
        sharable: {
          bg: "transparent",
          color: "black",
          ".text": {
            mt: [12],
            mb: [5],
            gridArea: ["1/1/2/-1"],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1"],
            mb: [13],
            display: "flex",
            justifyContent: "center",
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
        deiwork: {
          bg: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [10],
            mb: [9],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".carousel": {
            gridArea: ["2/1/3/-1"],
            mb: [10],
            ".graphic": {
              position: "relative",
              height: ["90px"],
              width: "100%",
              img: {
                position: "absolute",
                height: "100%",
                width: "100%",
              },
            },
            ".carouselMain": {
              mt: [4],
            },
          },
        },
        customizable: {
          bg: "transparent",
          color: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [10],
            mb: [10],
            h2: {},
            p: { mt: [3] },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1"],
            mb: [9],
            display: "flex",
            justifyContent: "center",
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
        bestinclass: {
          bg: "black",
          ".toptext": {
            gridArea: ["1/1/2/-1"],
            mt: [10],
            mb: [5],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".modules": {
            gridArea: ["2/1/3/-1"],
            display: "flex",
            flexFlow: "column",
            mb: [12],
            ".module": {
              mb: [5],
              ".divider": {
                position: "relative",
                mb: ["4px"],
                height: ["10px"],
                width: "100%",
                svg: {
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                },
              },
            },
          },
        },
        workflows: {
          bg: "transparent",
          color: "black",
          ".toptext": {
            gridArea: ["1/1/2/-1"],
            mt: [8],
            mb: [8],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".categories": {
            gridArea: ["2/1/3/-1"],
            display: "flex",
            flexFlow: ["column"],
            ".graphic": {
              position: "relative",
              width: "100vw",
              left: ["-20px"],
              div: {
                position: "absolute",
                height: "100%",
                width: "100%",
                div: {
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                },
              },
            },
            ".category": {
              zIndex: 999,
              mb: [5],
              ".title": {
                width: "60%",
                fontWeight: "500",
                fontFamily: "display",
              },
              ".body": {
                width: "60%",
                fontWeight: "400",
              },
            },
          },
        },
        connect: {
          bg: "transparent",
          color: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [0],
            mb: [7],
            h2: {},
            ".link": {
              mt: [1],
              p: {
                fontWeight: "500",
                fontFamily: "display",
              },
            },
          },
          ".graphic": {
            gridArea: ["2/1/3/-1"],
            mb: [12],
            width: "100vw",
            left: ["-20px"],
            position: "relative",
            height: ["271px"],
            div: {
              position: "absolute",
              width: "100%",
              height: "100%",
              div: {
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
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
        connections: {
          bg: "transparent",
          color: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [10],
            mb: [7],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".logos": {
            gridArea: ["2/1/3/-1"],
            mb: [7],
            height: "300px",
            position: "relative",
            div: {
              height: "100%",
              width: "100%",
              position: "absolute",
              bg: "gray",
            },
          },
        },
        secure: {
          bg: "transparent",
          color: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [7],
            mb: [4],
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
          ".graphic": {
            gridArea: ["2/1/3/-1"],
            mb: [12],
            display: "flex",
            justifyContent: "center",
          },
        },
      },
    },
    pricing: {
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
      cost: {
        bg: "#F8F8F8",
        color: "black",
        ".toptext": {
          gridArea: ["1/1/2/-1"],
          mt: [5],
          mb: [3],
          p: {},
        },
        ".list": {
          gridArea: ["2/1/3/-1"],
          ".title": {
            fontWeight: "500",
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
        ".calculator": {
          gridArea: ["3/1/4/-1"],
          mt: [8],
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
              fontWeight: "500",
              fontFamily: "display",
              color: "blue",
            },
          },
          ".slider": {
            height: "20px",
            bg: "gray",
            mt: [3],
          },
          ".result": {
            mt: [5],
            mb: [5],
            h1: {
              fontSize: ["72px"],
              fontWeight: "500",
              fontFamily: "display",
              lineHeight: ["100px"],
              color: "blue",
            },
          },
        },
      },
      betterinsights: {
        bg: "black",
        ".toptext": {
          gridArea: ["1/1/2/-1"],
          mt: [8],
          mb: [3],
          h2: {},
          p: { mt: [3] },
        },
        ".table": {
          mb: [9],
          gridArea: ["2/1/3/-1"],
          ".head": {
            position: "relative",
            width: "100vw",
            left: ["-20px"],
            pl: ["20px"],
            display: "grid",
            gridAutoRows: ["200px"],
            gridTemplateColumns: ["4fr 1fr 1fr 1fr"],
            ".headItem": {
              display: "flex",
              justifyContent: "center",
              mb: [3],
              position: "relative",
              ".focusborder": {
                position: "absolute",
                top: "30%",
                zIndex: 999,
                width: "100%",
                height: "610%",
                border: (t) => `solid 1px ${t.colors.yellow}`,
              },
              ".logo": {
                position: "absolute",
                top: ["37%"],
                left: ["22%"],
                transform: ["rotate(90deg)"],
                transformOrigin: ["bottom left"],
              },
              p: {
                writingMode: "vertical-rl",
                textAlign: "right",
                lineHeight: ["19.2px"],
              },
            },
          },
          ".body": {
            ".bodyRow": {
              width: ["100vw"],
              left: ["-20px"],
              position: "relative",
              ".bodyGrid": {
                display: "grid",
                ml: ["20px"],
                gridTemplateColumns: ["4fr 1fr 1fr  1fr"],
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
        better: {
          bg: "#F8F8F8",
          color: "black",
          ".text": {
            gridArea: ["1/1/2/-1"],
            mt: [5],
            mb: [10],
            h2: {},
            p: {
              mt: [1],
            },
          },
          ".people": {
            gridArea: ["2/1/3/-1"],
            width: ["100vw"],
            left: ["-20px"],
            position: "relative",
            mb: [14],
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
          ".toptext": {
            gridArea: ["1/1/2/-1"],
            mt: [8],
            h2: {},
            p: {
              mt: [3],
            },
          },
          ".bottomtext": {
            gridArea: ["2/1/3/-1"],
            mt: [8],
            mb: [13],
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
        onboarding: {
          bg: "#F8F8F8",
          color: "black",
          ".imagewrapper": {
            gridArea: ["1/1/2/-1"],
            position: "relative",
            width: ["100vw"],
            left: ["-20px"],
            img: {
              position: "absolute",
              pl: ["20px"],
              top: ["-120px"],
              width: "100%",
              height: ["210px"],
            },
          },
          ".textmodules": {
            mt: [15],
            gridArea: ["2/1/3/-1"],
            display: "flex",
            flexFlow: ["column"],
            ".textblock": {
              mb: [7],

              ".divider": {
                position: "relative",
                height: "1px",
                width: "100vw",
                left: ["-20px"],
                span: {
                  left: ["20px"],
                  position: "absolute",
                  height: ["100%"],
                  bg: "black",
                  right: 0,
                },
              },
              ".toptext": {
                mt: [1],
                mb: [3],
                h2: {},
                p: { mt: [1] },
              },
              ".list": {
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
            gridArea: ["1/1/2/-1"],
            height: ["210px"],
            width: "100vw",
            left: ["-20px"],
            img: {
              position: "absolute",
              width: "100%",
              height: "100%",
            },
          },
          ".text": {
            gridArea: ["2/1/3/-1"],
            mt: [6],
            mb: [8],
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
          mt: [6],
          ".textblock": {
            gridArea: ["1/1/2/-1"],
            mb: [7],

            ".divider": {
              position: "relative",
              height: "1px",
              width: "100vw",
              left: ["-20px"],
              span: {
                left: ["20px"],
                position: "absolute",
                height: ["100%"],
                bg: "black",
                right: 0,
              },
            },
            ".toptext": {
              mt: [1],
              mb: [3],
              h2: {},
              p: { mt: [1] },
            },
            ".list": {
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
      },
      violet: {
        bg: "violet",
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.white} !important`,
          path: {
            stroke: (t) => `${t.colors.white} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.white} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
      },
      gray: {
        bg: "#F8F8F8",
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
      },
      gray2: {
        bg: "#F2F2F2",
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
      },
      white: {
        bg: "#FFF",
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
      },
      lightTurquoise: {
        bg: "lightTurquoise",
        ".item": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".login": {
          color: (t) => `${t.colors.black} !important`,
          path: {
            stroke: (t) => `${t.colors.black} !important`,
          },
          line: {
            stroke: (t) => `${t.colors.black} !important`,
          },
        },
        ".logo": {
          path: { fill: (t) => `${t.colors.black} !important` },
        },
      },
    },
    mobilenav: {
      //
    },
    footer: {
      bg: "#1F1F21",
      ".header": {
        gridArea: ["1/1/2/-1", "1/1/2/4"],
        h2: {
          mt: [10, 11],
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
          flex: "1 40%",
          mr: ["6px"],
          mt: ["12px"],
          mb: 0,
        },
        "input:nth-child(even)": {
          flex: "1 40%",
          ml: ["6px"],
          mt: ["12px"],
          mb: 0,
        },
        ".dropdownwrapper": {
          flex: "1 100%",
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
          mt: [5],
          flex: "1 100%",
          display: "flex",
          justifyContent: "flex-end",
        },
      },
      ".socials": {
        gridArea: ["3/1/4/-1", "2/4/3/6"],
        mt: ["20px", 0],
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
        p: {
          fontSize: ["13px"],
          fontFamily: "medium",
        },
      },
      ".logo": {
        gridArea: ["2/1/3/3"],
        display: "flex",
        alignItems: "center",
      },
      ".copyright": {
        gridArea: ["3/1/4/4"],
        p: {
          fontSize: ["13px"],
          fontFamily: "medium",
          color: "#909095",
        },
      },
    },
    learnMoreLink: {
      textDecoration: "none",
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      width: "fit-content",
      p: {
        mr: "10px",
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
      lineHeight: ["38.4px"],
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
      fontSize: ["16px", "20px"],
      lineHeight: ["24px", "32px"],
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
