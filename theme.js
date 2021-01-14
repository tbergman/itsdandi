const theme = {
  breakpoints: ["1024px", "1500px"],
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
  colWidthDesktopBig: `calc(calc(100vw - 680px)/12)`,
  desktopSectionWidth: `calc(calc(calc(calc(100vw - 520px)/12) * 4) + 160px)`,
  desktopSectionWidthBig: `calc(calc(calc(calc(100vw - 680px)/12) * 4) + 160px)`,
  desktopMaxSectionWidth: "475px",
  desktopBigGutters: 120,
  desktopGutters: 40,
  mobileGutters: 20,
  grid: {
    display: "grid",
    gridTemplateColumns: ["repeat(6,1fr)", "repeat(12,1fr)"],
    gridTemplateRows: "auto",
    columnGap: ["20px", "40px"],
    rowGap: 0,
    mx: [
      (t) => `${t.mobileGutters}px`,
      (t) => `${t.desktopGutters}px`,
      (t) => `${t.desktopBigGutters}px`,
    ],
  },
  pages: {
    home: {
      top: {
        bg: "transparent",
        bigLogo: {
          height: "100%",
          width: "100%",
          pointerEvents: "none",
          ".BigLogo__logoSvg": {},
          ".BigLogo__logoSvg-letter": {},
          ".BigLogo__logoSvg-svg": {},
          ".static": {},

          svg: {
            position: "fixed",
            zIndex: 9999,
            top: [0],
            left: ["20px", "40px"],
            height: [(t) => t.colWidthMob, (t) => t.colWidthDesktop],
            width: ["125px", (t) => `calc(${t.colWidthDesktop} * 3.4)`],
            mb: ["20px", "40px"],
          },
        },
        ".Top__text": {
          gridArea: ["1/2/2/-1", "1/7/2/-1"],
          ml: [
            (t) => `calc(${t.colWidthMob} + 10px)`,
            (t) => `calc(${t.colWidthDesktop})`,
            (t) => `calc(${t.colWidthDesktopBig})`,
          ],
          mt: [24, 28],
          mb: [2, 0],
          ".Top__text-header": {
            mr: [
              "unset",
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
            ],
          },
          ".Top__text-button": {
            position: "relative",
            cursor: "pointer",
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

            ".Top__text-button-text": {
              color: "black",
              fontSize: "16px",
              fontFamily: "medium",
            },

            "&:hover": {
              bg: "#FF9133",
              transition: "all 150ms ease-out",
            },
          },
        },
        bars: {
          gridArea: ["2/1/3/-1"],
          position: "relative",
          width: "100vw",
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
          height: ["191px", "168px", "232px"],

          ".Bars__barWrapper": {
            position: "absolute",
            width: "100%",
            bottom: 0,
            left: 0,
            height: ["178px", "246px"],
          },
          ".Bars__barWrapper-bar1": {
            zIndex: 99,
            position: "absolute",
            height: "100%",
            width: [(t) => `calc(${t.colWidthMob} + 10px)`, `95px`],
            ml: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 56px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) + ${t.desktopBigGutters}px)`,
            ],
            ".Bars__barWrapper-bar1-top": {
              position: "absolute",
              bg: "turquoise",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              borderRadius: "7px 7px 0px 0px",
            },
            ".Bars__barWrapper-bar1-bottom": {
              position: "absolute",
              bg: "blue",
              width: "100%",
              height: "40%",
              borderRadius: "0px 0px 7px 7px",
              top: "100%",
              left: 0,
            },
          },
          ".Bars__barWrapper-bar2": {
            zIndex: 99,
            width: [(t) => `calc(${t.colWidthMob} + 10px)`, "95px"],
            ml: [
              (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 225px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 249px) + ${t.desktopBigGutters}px)`,
            ],
            bottom: 0,
            height: "100%",
            position: "absolute",
            ".Bars__barWrapper-bar2-top": {
              position: "absolute",
              width: "100%",
              height: ["61%"],
              bg: "turquoise",
              bottom: 0,
              left: 0,
              borderRadius: "7px 7px 0px 0px",
            },
            ".Bars__barWrapper-bar2-bottom": {
              position: "absolute",
              width: "100%",
              height: "40%",
              bg: "blue",
              top: "100%",
              left: 0,
              borderRadius: "0px 0px 7px 7px",
            },
          },
          ".Bars__barWrapper-bar3": {
            zIndex: 99,
            width: [(t) => `calc(${t.colWidthMob} + 10px)`, "95px"],
            height: "100%",
            bottom: 0,
            position: "absolute",
            ml: [
              (t) => `calc(calc(${t.colWidthMob} * 3.5) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 394px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 418px) + ${t.desktopBigGutters}px)`,
            ],

            ".Bars__barWrapper-bar3-bottom": {
              position: "absolute",
              width: "100%",
              height: "40%",
              left: 0,
              top: "100%",
              bg: "blue",
              borderRadius: "0px 0px 7px 7px",
            },
          },
          ".Bars__barWrapper-line": {
            position: "absolute",
            bottom: ["-45%", "-37%", "-30%"],
            height: [
              "120%",
              // (t) => `calc(calc(calc(${t.colWidthDesktop} * 7) + 489px) * .38)`,
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 240px) * .38)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) + ${t.desktopBigGutters}px) * .38)`,
            ],
            right: [
              (t) => `calc(calc(${t.colWidthMob} * 1.5) + 40px)`,
              "unset",
            ],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 5.5) + 100px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 6) + 240px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) + ${t.desktopBigGutters}px)`,
              // (t) => `calc(calc(${t.colWidthDesktop} * 7) + 216px)`,
            ],
            maxWidth: "811px",
            maxHeight: "308px",
            zIndex: 99,
            svg: {
              height: "100%",
              width: ["unset", "100%"],
              position: "absolute",
              top: 0,
              right: 0,
              circle: {
                transform: "scale(0)",
              },
            },
          },
        },
      },
      learnmore: {
        bg: "violet",
        color: "black",
        position: "relative",
        ".LearnMore__toptext": {
          position: "fixed",
          bottom: 0,
          zIndex: 99,

          // gridArea: ["1/2/2/-1", "1/7/2/-1"],
          ml: [
            (t) => `calc(calc(${t.colWidthMob} * 2) + 30px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 7) + 280px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 7) + 240px) + ${t.desktopBigGutters}px)`,
          ],
          // mt: [13, 0],
          mb: [1, 2],
          display: ["none", "flex"],
          alignItems: "flex-start",
          justifyContent: ["flex-end", "flex-start"],
          ".LearnMore__toptext-text": {
            fontFamily: "display",
            fontWeight: "500",
            fontSize: ["16px"],
            lineHeight: ["20px"],
          },
          ".LearnMore__toptext-arrow": {
            ml: "10px",
            width: ["55px"],
            pt: ["4%", "1.6%"],
          },
        },
        ".LearnMore__imageWrapper": {
          gridArea: ["2/1/3/-1", "1/6/2/-1"],
          mt: ["213px", "290px"],
          mb: [0, "224px"],
          height: [
            "277px",
            (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 280px) * .6)`,
            (t) =>
              `calc(calc(calc(calc(${t.colWidthDesktopBig} * 6) + 240px) + ${t.desktopBigGutters}px) * .6)`,
          ],
          position: "relative",
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 6) + 280px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 240px) + ${t.desktopBigGutters}px)`,
          ],
          left: [
            "-20px",
            (t) => `calc(${t.colWidthDesktop})`,
            (t) => `calc(${t.colWidthDesktopBig})`,
          ],
          ".LearnMore__imageWrapper-image": {
            position: "absolute",
            height: "100%",
            width: ["unset", "100%"],
            right: 0,
          },
        },
        ".LearnMore__text": {
          gridArea: ["3/1/4/-1", "1/2/2/6"],
          mt: [6, "290px"],
          ml: [0],
          mb: [16, 26],
          ".LearnMore__text-header": {
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
          },
          ".LearnMore__text-link": {
            mt: [1],
            p: {
              mt: 0,
              fontFamily: "medium",
            },
          },
          ".LearnMore__text-body": {
            mt: [3, 4],
            fontSize: ["16px", "20px"],
            lineHeight: ["24px", "32px"],
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
          },
        },
      },
      carousel: {
        bg: "transparent",
        ".Carousel__toptext": {
          gridArea: ["1/1/2/-1", "1/2/2/6"],
          mt: [10, 16],
          ".Carousel__toptext-header": {
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

        ".Carousel__carouselWrapper": {
          mt: ["30px"],
          mb: [6, 24],
          position: "relative",
          gridArea: ["3/1/4/-1", "2/1/3/-1"],
          width: ["100%", "100vw"],
          left: [0, "-40px", (t) => `-${t.desktopBigGutters}px`],
          display: ["flex", "grid"],
          gridTemplateColumns: ["repeat(12,1fr)"],
          gridTemplateRows: ["auto"],
          px: [0, "40px", (t) => `${t.desktopBigGutters}px`],
          columnGap: ["40px"],
          rowGap: ["0"],
          flexFlow: "column wrap",
          ".Carousel__carouselWrapper-description": {
            gridArea: ["1/2/2/6"],
            width: ["100%", "unset"],
            ".Carousel__carouselWrapper-description-text": {
              fontSize: ["16px", "20px"],
              lineHeight: ["32px"],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".Carousel__carouselWrapper-imageWrapper": {
            gridArea: ["2/1/3/-1", "1/7/3/-1"],
            mt: [4, 0],
            mb: [4, 0],
            overflow: ["hidden"],
            width: ["100vw", "100%"],
            left: ["-20px", "unset"],
            position: "relative",
            height: [
              "calc(100vw * .623)",
              (t) =>
                `calc(calc(calc(${t.colWidthDesktop} * 6) + 200px) * .623)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) * .623)`,
            ],
            ".Carousel__carouselWrapper-imageWrapper-image": {
              position: ["relative", "absolute"],
              height: ["100%"],
              width: ["unset", "100%"],
              left: ["20px", "unset"],
            },
          },
          ".Carousel__carouselWrapper-textWrapper": {
            mt: [0, 4],
            gridArea: ["3/1/4/-1", "2/2/3/6"],
            width: "100%",
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
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
        ".PayEquity__text": {
          gridArea: ["1/1/2/-1", "1/2/2/6"],
          mt: [10, 21],
          mb: [3, 0],
          ".PayEquity__text-header": {
            ".PayEquity__text-header-text": {},
          },
          ".PayEquity__text-body": {
            mt: [3, 4],
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            ".PayEquity__text-body-text": {},
          },
          ".PayEquity__text-link": {
            mt: [1],
            p: {
              mt: 0,
              fontSize: ["16px"],
              fontFamily: "medium",
            },
          },
        },
        ".PayEquity__imageWrapper": {
          position: "relative",
          width: ["100vw", "50vw"],
          left: [
            "-20px",
            (t) => `calc(calc(${t.colWidthDesktop} * 6)  + 220px  )`,
            (t) => `calc(calc(${t.colWidthDesktopBig} * 6)  + 220px)`,
          ],
          height: ["320px", "calc(50vw * .82)"],
          gridArea: ["2/1/3/-1", "1/1/2/-1"],
          ".PayEquity__imageWrapper-image": {
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
      },
      partners: {
        bg: "clearWhite",
        color: "black",
        ".Partners__text": {
          mt: [10],
          mb: [9],
          gridArea: ["1/1/2/-1", "1/2/2/6"],
          ".Partners__text-header": {
            lineHeight: ["48px"],
          },
        },
        ".Partners__logoCarousel": {
          gridArea: ["2/1/3/-1"],
          height: ["200px", "250px"],
          mb: ["50px", 14],
          width: "100vw",
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
          position: "relative",
          overflowY: "hidden",
          overFlowX: "hidden",
          display: "flex",
          flexFlow: "column",
          ".Partners__logoCarousel-rowWrapper": {
            width: "100%",
            height: "100%",
            position: "relative",
          },
          ".Partners__logoCarousel-rowWrapper-container": {
            width: "100%",
            height: "100%",
            position: "absolute",
            overflowX: "hidden",
            top: 0,
            left: 0,
          },

          ".Partners__logoCarousel-rowWrapper-container-row": {
            width: "fit-content",
            position: "relative",
            display: "flex",
            height: "100%",
            flexFlow: ["row nowrap"],
            alignItems: "center",
          },
          ".Partners__logoCarousel-rowWrapper-container-row-imageWrapper": {
            flex: "0 0 250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            img: {
              objectFit: "contain",
              width: "100%",
              height: "100%",
            },
          },
        },
      },
      advancedei: {
        bg: "lightTurquoise",
        color: "black",
        ".AdvanceDEI__text": {
          mt: [10, 22],
          mb: [0, 30],
          gridArea: ["1/1/2/-1", "1/7/2/-2"],
          ml: [
            0,
            (t) => `calc(${t.colWidthDesktop})`,
            (t) => `calc(${t.colWidthDesktopBig})`,
          ],
          ".AdvanceDEI__text-header": {
            ".AdvanceDEI__text-header-text": {},
          },
          ".AdvanceDEI__text-body": {
            mt: ["30px", 4],
            fontFamily: "body",
            color: "black",
            ".AdvanceDEI__text-body-text": {},
          },
          ".AdvanceDEI__link": {
            mt: [1, 3],
            p: {
              fontFamily: "medium",
              fontWeight: "500",
              mt: 0,
            },
          },
        },
        ".AdvanceDEI__graphics": {
          gridArea: ["2/1/3/-1", "1/1/2/6"],
          height: ["120px", "100%"],
          position: "relative",
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}px)`,
          ],
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
          ".AdvanceDEI__graphics-box1": {
            position: "absolute",
            left: 0,
            bottom: 0,
            height: ["67px", "36%"],
            width: [
              "115px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2.5) + 120px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2.5) + 80px) + ${t.desktopBigGutters}px)`,
            ],
            bg: "#02C3CF",
            zIndex: 99,
          },
          ".AdvanceDEI__graphics-box2": {
            position: "absolute",
            left: [
              "42px",
              (t) => `calc(${t.colWidthDesktop} + 40px)`,
              (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
            ],
            bottom: "0",
            width: [
              "134px",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) + ${t.desktopBigGutters}px)`,
            ],
            height: ["120px", "64%"],
            bg: "#A4F0F4",
            zIndex: 89,
          },
          ".AdvanceDEI__graphics-box3": {
            position: "absolute",
            display: ["none", "block"],
            left: 0,
            bottom: "0",
            width: [
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) + ${t.desktopBigGutters}px)`,
            ],
            height: ["120px", "100%"],
            bg: "#000",
            zIndex: 88,
          },
        },
      },
      quotes: {
        bg: "white",
        color: "black",
        position: "relative",
        ".Quotes__imageWrapper": {
          gridArea: ["1/1/2/-1", "1/1/2/6"],
          position: "relative",
          overflow: ["hidden"],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}px)`,
          ],
          height: [
            "calc(100vw * .64)",
            (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) * 1.3)`,
            (t) =>
              `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}px) * 1.3)`,
          ],
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
          picture: {
            position: "absolute",
            width: "100%",
            height: ["100%"],
            top: [0],
            left: 0,
            bottom: 0,
            right: 0,
            img: {
              width: "100%",
              height: "100%",
            },
          },
        },
        ".Quotes__textWrapper": {
          gridArea: ["2/1/3/-1", "1/6/2/-2"],
          position: "relative",
          display: "flex",
          overflow: "hidden",
          height: ["280px", "unset"],
          alignItems: ["unset", "center"],
          ".Quotes__textWrapper-text": {
            position: "relative",
            mt: [4, 0],
            ml: [
              (t) => `calc(${t.colWidthMob} + 5px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
            ],

            ".Quotes__textWrapper-text-body": {
              fontFamily: "display",

              fontSize: ["24px", "40px"],
              lineHeight: ["31.2px", "48px"],
            },
            ".Quotes__textWrapper-text-source": {
              mt: [3, 7],
              mb: [5],
              ".Quotes__textWrapper-text-source-name": {
                fontFamily: "medium",

                lineHeight: ["24px", "32px"],
                fontSize: ["16px"],
              },
              ".Quotes__textWrapper-text-source-title": {
                fontFamily: "body",

                fontSize: ["16px"],
                lineHeight: "24px",
              },
            },
            ".Quotes__textWrapper-text-quotationmark": {
              display: ["none", "unset"],
              position: "absolute",
              left: [
                0,
                (t) => `calc(${t.colWidthDesktop} / -1)`,
                (t) => `calc(${t.colWidthDesktopBig} / -1)`,
              ],
            },
          },
        },
        ".Quotes__navigation": {
          width: ["100vw"],
          height: "100%",
          position: "absolute",
          left: [0],
          display: "flex",
          alignItems: ["flex-end", "center"],
          pb: [2, 0],
          px: [9, 3],
          zIndex: 1,
          pointerEvents: "none",
          ".Quotes__navigation-arrow": {
            pointerEvents: "auto",
            cursor: "pointer",
          },
          ".Quotes__navigation-prev": {
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
          },
          ".Quotes__navigation-next": {
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",

            ".Quotes__navigation-arrow": {
              transform: "rotate(180deg)",
            },
          },
        },
        ".Quotes__navigation-timerWrapper": {
          position: ["relative", "absolute"],
          right: 0,
          gridArea: ["3/1/4/-1", "unset"],
          height: ["64px", "100%"],
          width: ["100vw", "72px"],
          left: ["-20px", "unset"],
          bg: "rgba(255,255,255,0.24)",
          ".Quotes__navigation-timerWrapper-timer": {
            bg: "rgba(58,58,61,0.1)",
            height: ["100%", "unset"],
            width: ["unset", "100%"],
          },
        },
      },
      marketplacepartners: {
        color: "black",
        position: "relative",
        bg: "#FFF",
        ".MPP__graphics": {
          gridArea: ["1/1/2/-1", "1/1/2/6"],
          height: ["184px", "100%"],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters}px)`,
          ],
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
          position: "relative",
          ".MPP__graphics-background": {
            position: "absolute",
            height: "100%",
            width: [
              "100%",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 120px) + ${t.desktopBigGutters}px)`,
            ],
            bg: "lightViolet",
          },
          ".MPP__graphics-background-circles": {
            position: "absolute",
            width: ["215px", "464px"],
            bottom: ["-107.5px", "unset"],
            height: ["215px", "100%"],
            display: "flex",
            alignItems: "center",
            right: ["20%", "-232px"],

            ".MPP__graphics-background-circles-circle": {
              transform: ["rotate(90deg)", "unset"],
              width: "inherit",
              height: "inherit",
            },
          },
        },
        ".MPP__text": {
          gridArea: ["2/1/3/-1", "1/7/2/-1"],
          mt: ["149px", "275px"],
          mb: [10, "303px"],
          ".MPP__text-header": {
            ".MPP__text-header-text": {},
          },

          ".MPP__text-body": {
            mt: ["20px", 4],
            maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            ".MPP__text-body-text": {},
          },
          ".MPP__link": {
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
          // top: [0],
          bottom: [
            `calc(calc(calc(100vw - 80px) * .55) / -1)`,
            (t) =>
              `calc(calc(calc(calc(${t.colWidthDesktop} * 4) + 120px) * .55) / -1)`,
            (t) =>
              `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 4) + 80px) + ${t.desktopBigGutters}px) * .55) / -1)`,
          ],
          left: [
            "40px",
            (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters}px)`,
          ],
          height: [
            `calc(100vw - 80px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 4) + 80px) + ${t.desktopBigGutters}px)`,
          ],
          width: [
            `calc(100vw - 80px)`,
            (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 4) + 80px) + ${t.desktopBigGutters}px)`,
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
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            mt: [23, "248px "],
            color: "black",
            h2: {
              fontFamily: "display",
              fontSize: ["32px", "40px"],
              lineHeight: ["38.4px", "48px"],
            },
            ".body": {
              display: "flex",
              flexFlow: ["column", "unset"],
              mt: [3],
              mb: [
                (t) =>
                  `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .25) + 64px)`,
                (t) =>
                  `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33) * .51) + 88px)`,
                (t) =>
                  `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33) * .51) + 88px)`,
              ],
              ".section1": {
                width: [
                  "unset",
                  (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                ],
                mr: [
                  0,
                  (t) => `calc(${t.colWidthDesktop})`,
                  (t) => t.colWidthDesktopBig,
                ],
              },
              ".section2": {
                mt: [3, 0],
                width: [
                  "unset",
                  (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                  (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
                ],
              },
              p: {
                fontFamily: "body",
                fontSize: "16px",
                lineHeight: "24px",
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },

            ".compensationTopGraphic": {
              position: ["absolute"],
              height: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33)`,
              ],
              bottom: [
                (t) =>
                  `calc(calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .87) * .85) / -1)`,
                (t) =>
                  `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33) * .49) / -1)`,
                (t) =>
                  `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33) * .49) / -1)`,
              ],
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 9) + 320px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 9) + 320px)`,
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
            gridArea: ["1/1/2/-1", "1/3/2/-2"],
            display: "flex",
            flexFlow: ["column-reverse", "unset"],
            alignItems: "flex-start",
            mt: [
              (t) =>
                `calc(calc(calc(calc(${t.colWidthMob} * 6) + 100px) * .85) + 48px)`,
              (t) =>
                `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 9) + 320px) * .33) * .51) + 72px)`,
              (t) =>
                `calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 9) + 320px) * .33) * .51) + 72px)`,
            ],
            mb: [13],
            ".graph": {
              position: "relative",
              height: ["206px", "215px"],
              left: ["-20px", "unset"],
              mb: [6, 0],
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
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
              ml: [
                0,
                (t) => `calc(${t.colWidthDesktop})`,
                (t) => `calc(${t.colWidthDesktopBig})`,
              ],
              mb: [7, 0],
              width: [
                "unset",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) +  160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) +  160px)`,
              ],
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
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
            ".heading": {
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
              ],
              h2: {
                fontFamily: "display",
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
            ".body": {
              mt: [3, 0],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
              ],
              display: "flex",
              flexFlow: "column",
              p: {
                fontSize: "16px",
                lineHeight: "24px",
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
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
            mt: [8, "268px"],
            mb: [0, "307px"],
            gridArea: ["1/1/2/-1", "1/7/2/-1"],
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],

            ".Affordable__text-header": {
              ".Affordable__text-header-text": {
                fontFamily: "display",
              },
            },
            ".Affordable__text-body": {
              mt: [3, 4],
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
            gridArea: ["2/1/3/-1", "1/2/2/7"],
            position: "relative",
            mb: [10, 0],
            height: [(t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`, "100%"],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 100px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 200px)`,
            ],
            left: [
              (t) => t.colWidthMob,
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
            ],
            display: ["unset", "flex"],
            alignItems: "center",
            ".Affordable__graphic-image": {
              position: ["absolute", "relative"],
              top: [0, "unset"],
              left: [0, "unset"],
              width: "100%",
              height: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 200px)`,
              ],
            },
          },
        },
      },
      deijourney: {
        topgraphic: {
          position: "absolute",
          zIndex: 99,
          right: [
            "20px",
            (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig}) + 40px) + ${t.desktopBigGutters}px)`,
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
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
            },
            ".TextBlock__textWrapper-section:nth-of-type(2)": {
              order: ["unset", 3],
            },
            ".TextBlock__textWrapper-section:nth-of-type(4)": {
              order: ["unset", 4],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
      leadership: {
        topimage: {
          position: "absolute",
          width: [
            "calc(100vw - 20px)",
            (t) => `calc(calc(${t.colWidthDesktop} * 10) +  400px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}px)`,
          ],
          right: 0,
          top: [
            (t) => `calc(calc(calc(calc(100vw - 20px) * .6) * .7) / -1)`,
            (t) =>
              `calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .45) * .5) / -1)`,
            (t) =>
              `calc(calc(calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}px) * .45) * .5) / -1)`,
          ],
          height: [
            0,
            (t) => `calc(calc(calc(${t.colWidthDesktop} * 10) +  400px) * .45)`,
            (t) =>
              `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}px) * .45)`,
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
          pt: [
            `calc(calc(calc(calc(100vw - 20px) * .6) * .3) + 40px)`,
            "388px",
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
                    `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters}px)`,
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
                ],
                mt: [3, 0],
                pr: [
                  "20px",
                  (t) => `calc(calc(${t.colWidthDesktop}) + 40px)`,
                  (t) => `calc(calc(${t.colWidthDesktopBig}) + 40px)`,
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
      },

      subnavigation: {
        display: "flex",
        height: ["auto", "356px"],
        flexFlow: ["column-reverse", "unset"],

        ".SubNavigation__next": {
          height: ["224px", "100%"],
          pl: [0],
          flex: [1, "0 50%"],
          display: "flex",
          alignItems: "center",
          ".SubNavigation__link": {
            pl: [(t) => `calc(calc(${t.colWidthMob} * 3) + 80px)`, 0],
          },
        },

        ".SubNavigation__prev": {
          height: ["224px", "100%"],
          flex: [1, "0 50%"],
          pl: [0],
          display: "flex",
          alignItems: "center",
          ".SubNavigation__link": {
            pl: [(t) => `calc(${t.colWidthMob} + 40px)`, 0],
          },
        },
        ".full": {
          flex: "0 100%",
          // pl: ["50vw"],
        },

        ".SubNavigation__link": {
          height: "100%",
          width: "100%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",

          ".SubNavigation__link-content": {
            // ml: [
            //   0,
            //   (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
            //   (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 120px)`,
            // ],
            mr: [6, 0],
            cursor: "pointer",
            textDecoration: "none",
            height: ["100%", "auto"],
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: ["center", "flex-end"],
            ".SubNavigation__link-content-text": {
              fontFamily: "display",
              fontSize: ["24px", "40px"],
              lineHeight: ["24px", "40px"],
              // mb: [8],
              color: "black",
            },
            ".rotated": {
              transform: "rotate(180deg)",
            },

            ".SubNavigation__link-content-arrow": {
              height: ["30px"],
              width: ["30px"],
              position: "relative",
              mb: [4, 7],
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
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 7) + 280px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 7) + 240px) + ${t.desktopBigGutters}px)`,
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
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
              ],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
            ],
            height: [
              "225px",
              (t) =>
                `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) * .605)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) * .605)`,
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
              ],
              ".Thoughtful__section1-body-text": {},
            },
          },
          ".Thoughtful__section2": {
            gridArea: ["2/1/3/-1", "1/7/2/-2"],
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
            ],
            bottom: ["-26px", "-24px"],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 70px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 8) + 360px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 320px) + ${t.desktopBigGutters}px)`,
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
              ],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
              mx: [3, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
              ],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
            ],
          },
          ".graphics": {
            position: "absolute",
            left: [
              (t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 8) + 320px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 8) + 280px) + ${t.desktopBigGutters}px)`,
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
                mr: [(t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
                maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
              },
            },
            ".section2": {
              width: [
                "100%",
                (t) => `calc(calc(${t.colWidthDesktop} * 6) + 200px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 6) + 200px)`,
              ],
              pt: ["87%", 0],
              ml: [0],
              mt: [6, 0],
              position: "relative",
              height: [
                0,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktop} * 6) + 200px) * .60)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) * .60)`,
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
            ],
            width: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
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
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
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
            ],
            height: ["126px", "34em"],
            bottom: [0, "-7em"],
            right: [0, "40px", (t) => `${t.desktopBigGutters}px`],
            overflow: "hidden",
            ".TopContent__graphics-chainsDesktop": {
              position: "absolute",
              left: ["-6%", 0],
              bottom: ["-35%", 0],
              height: ["unset", "100%"],
              width: ["unset", "100%"],
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
            ],
            left: [
              "-20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
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
              // mt: [8, 10],
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
            gridArea: ["2/1/3/-1", "1/7/2/-1"],
            mt: [6, 16],
            mb: [12, 16],
            width: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 160px)`,
            ],
            mr: [
              "unset",
              (t) => t.colWidthDesktop,
              (t) => t.colWidthDesktopBig,
            ],
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],

            height: [
              "auto",
              (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 160px)`,
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
        // header: {
        //   bg: "rgba(242, 242, 242, 0.5)",
        //   ".text": {
        //     gridArea: ["1/1/2/-1"],
        //     mt: [18],
        //     color: "black",
        //     h1: {},
        //     h3: {
        //       mt: [2],
        //       mb: [12],
        //       fontWeight: "400",
        //       lineHeight: ["30px"],
        //       fontSize: ["20px"],
        //     },
        //   },
        //   ".buttonWrapper": {
        //     gridArea: ["2/1/3/-1"],
        //     position: "relative",
        //     ".button": {
        //       position: "absolute",
        //       top: ["-28px"],
        //     },
        //   },
        // },
        topcontent: {
          position: "relative",
          ".TopContent__buttonWrapper": {
            position: "absolute",
            bottom: ["-28px", "-24px"],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
            ],
          },
          ".TopContent__graphics": {
            position: "absolute",
            left: [(t) => `calc(calc(${t.colWidthMob} * 4) + 80px)`, "unset"],

            right: [
              "unset",
              (t) => t.desktopGutters,
              (t) => t.desktopBigGutters,
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
              ],
              position: "relative",
            },
            ".TopContent__graphics-svg": {
              position: "absolute",
              width: [
                (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
                (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
              ],
              height: [
                (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 80px) * .85)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktop} * 4) + 160px) * .85)`,
                (t) =>
                  `calc(calc(calc(${t.colWidthDesktopBig} * 4) + 160px) * .85)`,
              ],
              left: 0,
              bottom: ["-20px", 0],
              position: "relative",
              svg: {
                position: "absolute",
                height: "100%",
                width: "100%",
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
              ],
            },
            p: {
              width: [
                "100%",
                (t) => t.desktopSectionWidth,
                (t) => t.desktopSectionWidthBig,
              ],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
          mr: ["unset", (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
            ],
            width: [
              (t) => `calc(calc(${t.colWidthMob} * 2.5) + 60px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 4) + 200px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 200px)`,
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
            ],
            left: [
              (t) => `calc(${t.colWidthMob} + 20px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
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
          ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
          mr: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
              ],
              ml: [
                0,
                (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
                (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
              ],
            },
          },
        },

        ".Table": {
          position: "relative",
          width: "100vw",
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
          mb: [9, 16],
          gridArea: ["2/1/3/-1"],

          ".Table__head": {
            position: "relative",
            pl: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktopBig}) + 80px)`,
            ],
            pr: ["20px", "40px", (t) => `${t.desktopBigGutters}px`],
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
              ],
              pr: ["20px", "40px", (t) => `${t.desktopBigGutters}px`],
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
                    display: "flex",
                    alignItems: "center",
                    mr: [2, 0],
                    ".Table__body-row-grid-item-title-infoIcon": {
                      display: ["none", "unset"],
                      width: "20px",
                      height: "20px",
                      ml: [2],
                      cursor: "pointer",
                    },
                  },

                  ".Table__body-row-grid-item-infoBox": {
                    display: "none",
                  },
                  ".Table__body-row-grid-item-infoBox-open": {
                    display: "block",
                    position: "absolute",
                    zIndex: 998,
                    bg: "black",
                    boxShadow:
                      "0px 0px 1px rgba(0, 0, 0, 0.75), 0px 8px 30px rgba(0, 0, 0, 0.45)",
                    borderRadius: "8px",
                    left: "75%",
                    py: [4],
                    px: [4],
                  },
                  ".Table__body-row-grid-item-infoBox-body": {
                    width: ["272px"],
                    mb: [2],
                  },
                  ".Table__body-row-grid-item-infoBox-link": {
                    width: ["272px"],
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
            ],
            height: [
              (t) => `calc(calc(calc(${t.colWidthMob} * 3) + 40px) * .88)`,
              (t) => `calc(calc(calc(${t.colWidthDesktop} * 3) + 80px) * .88)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) * .88)`,
            ],

            left: [
              (t) => `calc(calc(${t.colWidthMob} * 3) + 80px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 9) + 400px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 9) + 360px) + ${t.desktopBigGutters}px)`,
            ],
            svg: {
              width: "100%",
              height: "100%",
            },
          },
        },
        // better: {
        //   bg: "#F8F8F8",
        //   color: "black",
        //   ".toptext": {
        //     mt: [16],
        //     mb: [12],
        //     gridArea: ["1/1/2/-1", "1/3/2/-1"],
        //     display: "flex",

        //     ".section1": {
        //       width: [
        //         "unset",
        //         (t) => t.desktopSectionWidth,
        //         (t) => t.desktopSectionWidthBig,
        //       ],
        //       h2: {},
        //     },
        //     ".section2": {
        //       ml: [
        //         "unset",
        //         (t) => t.colWidthDesktop,
        //         (t) => t.colWidthDesktopBig,
        //       ],
        //       width: [
        //         "unset",
        //         (t) => t.desktopSectionWidth,
        //         (t) => t.desktopSectionWidthBig,
        //       ],
        //       p: {
        //         mt: [1],
        //         maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
        //       },
        //     },
        //   },

        //   ".people": {
        //     gridArea: ["2/1/3/-1", "2/3/3/-1"],
        //     width: ["100vw", "unset"],
        //     left: ["-20px", "unset"],
        //     position: "relative",
        //     mb: [14, 16],
        //     display: "flex",
        //     flexFlow: ["row wrap"],
        //     justifyContent: ["space-between", "unset"],
        //     ".person:nth-of-type(4n)": {
        //       mr: 0,
        //     },
        //     ".person": {
        //       width: [(t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`],
        //       mr: [(t) => `calc(${t.colWidthDesktop} *.848)`],

        //       // flex: ["0 50%", "0 25%"],
        //       mb: [4],
        //       display: "flex",
        //       flexFlow: ["column"],
        //       alignItems: "center",
        //       ".imagewrapper": {
        //         clipPath: ["circle(80px)", "circle(50%)"],
        //         position: "relative",
        //         width: [
        //           "160px",
        //           (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
        //         ],
        //         height: [
        //           "160px",
        //           (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
        //         ],
        //         img: {
        //           position: "absolute",
        //           height: "100%",
        //           width: "100%",
        //           top: 0,
        //           left: 0,
        //         },
        //       },
        //       ".text": {
        //         mt: [1, 2],
        //         ml: [1],
        //         mb: [0],
        //         width: ["150px", "200px"],
        //         ".name": {
        //           mt: 0,
        //           mb: 0,
        //           fontSize: ["14px"],
        //           fontWeight: "400",
        //           fontFamily: "display",
        //           lineHeight: ["21px"],
        //         },
        //         ".title": {
        //           mt: 0,
        //           mb: 0,
        //           fontSize: ["13px"],
        //           fontWeight: "400",
        //           fontFamily: "body",
        //           lineHeight: ["19.5px"],
        //         },
        //       },
        //     },
        //   },
        // },
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
            width: [
              "100%",
              (t) => t.desktopSectionWidth,
              (t) => t.desktopSectionWidthBig,
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
            ],
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters}px) * .45)`,
            ],
            width: [
              (t) => `calc(100vw - 20px)`,
              (t) => `calc(calc(${t.colWidthDesktop} * 10) + 400px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters}px)`,
            ],
            left: [
              "20px",
              (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) + ${t.desktopBigGutters}px)`,
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
                `calc(calc(calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 360px) + ${t.desktopBigGutters}px) * .45) * .5) + 128px)`,
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
                    `calc(calc(calc(${t.colWidthDesktopBig} * 10) + 360px) + ${t.desktopBigGutters}px)`,
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
                ],
                ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}px) * .74)`,
            ],
            width: [
              "100vw",
              (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
              (t) =>
                `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}px)`,
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
            mr: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
                  `calc(calc(calc(${t.colWidthDesktopBig} * 10) +  360px) + ${t.desktopBigGutters}px)`,
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
              ],
              ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
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
      width: ["100vw"],
      display: ["none", "block"],
      fontFamily: "body",
      ".demobtn": {
        position: "absolute",
        top: "44px",
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
        ],
        left: [
          "20px",
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 100px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 60px) + ${t.desktopBigGutters}px)`,
        ],
        display: "flex",
        justifyContent: "center",
        ".demobtn-text": {
          color: "blue",
          fontSize: "14px",
          fontFamily: "medium",
          cursor: "pointer",
        },
      },

      ".logoWrapper": {
        position: "relative",
        width: "0",
        height: "0",
        left: 0,
        ".logo": {
          position: "absolute",
          left: ["40px"],
          top: ["40px"],
          width: "32px",
          height: "32px",
          top: "35px",
          bg: "transparent",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.white} !important`,
          },
          ".current": {
            bg: "#262629 !important",
          },
        },
        ".item": {
          color: "white",
        },
        ".login": {
          bg: "transparent",
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
        ".BigLogo": {
          bg: "transparent",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.black} !important`,
          },
          ".current": {
            bg: "#F8F8F8 !important",
          },
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
        ".BigLogo": {
          bg: "transparent",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.black} !important`,
          },
          ".current": {
            bg: "yellow !important",
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
        ".BigLogo": {
          bg: "transparent",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.black} !important`,
          },
          ".current": {
            bg: "#FFF !important",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.black} !important`,
          },
          ".current": {
            bg: "#F8F8F8 !important",
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
        ".BigLogo": {
          bg: "transparent",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.black} !important`,
          },
          ".current": {
            bg: "#FFF !important",
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
        ".BigLogo": {
          bg: "transparent",
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
        ".sub": {
          ".subitem": {
            color: (t) => `${t.colors.black} !important`,
          },
          ".current": {
            bg: "#FFF !important",
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
        ".BigLogo": {
          bg: "transparent",
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
      mobile: {
        display: ["unset", "none"],
        position: "absolute",
        top: "74px",
        left: 0,
        width: "100vw",
        height: "40px",
        overflow: "hidden",
        zIndex: 99,

        ".SubMenu__mobileContainer": {
          ".swiper-container": {
            height: "100%",
          },
          ".swiper-wrapper": {
            px: ["20px"],
          },

          ".SubMenu__mobileContainer-arrow": {
            cursor: "pointer",
            path: {
              stroke: "#CACACE",
            },
          },
          ".SubMenu__mobileContainer-left": {
            position: "absolute",
            visibility: "visible",
            width: "40px",
            height: "39px",
            top: 0,
            left: 0,
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            ".SubMenu__mobileContainer-arrow": {
              transform: "rotate(90deg)",
            },
          },
          ".SubMenu__mobileContainer-right": {
            position: "absolute",
            width: "40px",
            height: "39px",
            top: 0,
            right: 0,
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",

            ".SubMenu__mobileContainer-arrow": {
              transform: "rotate(-90deg)",
            },
          },
          ".swiper-button-disabled": {
            visibility: "hidden",
          },
          ".SubMenu__mobileContainer-draggable-item": {
            height: "100%",
            cursor: "pointer",
            // flex: ["0 0 125px", "unset"],
            display: ["flex", "unset"],
            justifyContent: ["space-between", "unset"],
            alignItems: "center",

            color: "inherit",
            textDecoration: "none",
            whiteSpace: "nowrap",
            opacity: 0.5,

            ".SubMenu__mobileContainer-draggable-item-text": {
              fontSize: "14px",
              lineHeight: "16px",
              color: "inherit",
              fontFamily: "medium",
            },
            "&:hover": {
              opacity: ["unset", 1],
            },
          },
          ".current": {
            opacity: 1,
            position: "relative",
            pl: [0, 3],
          },
          // ".SubMenu__mobileContainer-draggable": {
          //   height: "100%",
          //   display: "flex",
          //   flexFlow: ["row nowrap", "column"],
          //   alignItems: ["center", "unset"],

          // },
          height: ["100%", "unset"],
          width: "100%",
          borderBottom: ["1px solid #CACACE", "none"],
        },
      },
      desktop: {
        display: ["none", "unset"],
        position: "fixed",
        top: [24],
        left: "40px",

        zIndex: 99,
        ".SubMenu__container": {
          height: ["100%", "unset"],
          width: "100%",
          borderBottom: ["1px solid #CACACE", "none"],
          display: "flex",
          flexFlow: ["row nowrap", "column"],
          alignItems: ["center", "unset"],
          ".SubMenu__container-item": {
            cursor: "pointer",
            mb: [0, 2],
            mr: [5, 0],
            color: "inherit",
            textDecoration: "none",
            whiteSpace: "nowrap",
            opacity: 0.5,
            height: "max-content",

            "&:hover": {
              opacity: 1,
            },

            ".SubMenu__container-item-text": {
              fontSize: "14px",
              lineHeight: "16px",
              color: "inherit",
              fontFamily: "medium",
              height: "auto",
              opacity: 1,
              transform: "translate3d(0,0,0)",
              transition:
                "opacity 350ms 0ms ease-out, transform 500ms 0ms ease-out",
            },
          },
          ".SubMenu__container-item-hidden": {
            mb: [2],
            minHeight: "16px",
            ".SubMenu__container-item-text": {
              opacity: 0,
              transform: "translate3d(50px,0,0)",
              height: 0,
              transition:
                "height 0ms 500ms, opacity 350ms 0ms ease-in, transform 350ms 0ms ease-in",
              fontSize: "14px",
              lineHeight: "16px",
              color: "inherit",
              fontFamily: "medium",
            },
          },
          ".SubMenu__container-item-hamburger": {
            position: "absolute",
            left: 0,
            height: "100%",
            width: "12px",

            ".SubMenu__container-item-hamburger-line1": {
              position: "absolute",
              height: "2px",
              display: ["none", "unset"],

              width: "100%",
              top: 0,
              transform: "translate3d(0,8px,0)",
              transition: "all 250ms",
            },
            ".SubMenu__container-item-hamburger-line2": {
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
            ".SubMenu__container-item-hamburger-line1": {
              transform: "translate3d(0, 5px,0)",
            },
            ".SubMenu__container-item-hamburger-line2": {
              opacity: 1,
              transform: "translate3d(0,10px,0)",
            },
          },
          ".current": {
            opacity: 1,
            position: "relative",
            pl: [3],
          },
        },
        ".closed": {
          height: "16px",
        },
      },

      default: {
        color: "white",
        bg: "black",
      },

      white: {
        color: "black",
        bg: "#FFF",
      },
      gray: {
        color: "black",
        bg: "#F8F8F8",
      },
    },
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
              ".arrow": {
                height: "100%",
                display: "flex",
                alignItems: "center",
                svg: {
                  transition: "transform 250ms ease-out",
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
                  bg: "#262629",
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
              `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters}px) * .83)`,
          ],
          width: [
            "100vw",
            (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
            (t) =>
              `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters}px)`,
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
          left: ["-20px", "-40px", (t) => `-${t.desktopBigGutters}px`],
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
          "&:hover": {
            ".SharedCarousel__item-header": {
              ".SharedCarousel__item-header-text": {
                color: "rgba(242, 242, 242, 1)",
              },
            },
          },

          mb: [2],

          ".SharedCarousel__item-header-progressBar": {
            position: "absolute",
            left: 0,
            top: "-5px",
            height: ["32px"],
            width: "2px",
            borderRadius: "6px",
            bg: "rgba(242, 242, 242, 0.24)",
            ".SharedCarousel__item-header-progressBar-animation": {
              width: "100%",
              height: "0",
              borderRadius: "6px",
              transition: "all 0ms linear",
              transformOrigin: "top center",
            },
            ".active": {
              transition: "all 7500ms 1000ms linear",
              height: "100%",
              minHeight: "unset",
            },
          },

          ".active": {
            height: "80%",
            minHeight: "32px",
          },

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
            ],
            h2: {
              maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
            },
          },
          ".section2": {
            ml: [0, (t) => t.colWidthDesktop, (t) => t.colWidthDesktopBig],
            width: [
              "100%",
              (t) => t.desktopSectionWidth,
              (t) => t.desktopSectionWidthBig,
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
            ],
            mr: [
              0,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktop} * 10) + 358px) - calc(calc(calc(${t.colWidthDesktop} * 2) + 80px) * 4)) / 3)`,
              (t) =>
                `calc(calc(calc(calc(${t.colWidthDesktopBig} * 10) + 358px) - calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) * 4)) / 3)`,
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
      bg: "#fff",
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
