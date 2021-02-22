export const home = {
  top: {
    bg: "transparent",
    bigLogo: {
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      ".BigLogo__logoSvg": {
        opacity: 0, // starting point,
      },
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
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      mt: [24, 28],
      mb: [2, 0],
      ".Top__text-header": {
        mr: [
          "unset",
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
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
      left: [
        "-20px",
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      height: ["191px", "168px", "232px"],

      ".Bars__barWrapper": {
        position: "absolute",
        width: "100%",
        bottom: 0,
        left: 0,
        height: ["178px", "246px", "275px", "300px"],
      },
      ".Bars__barWrapper-bar1": {
        zIndex: 99,
        position: "absolute",
        height: "100%",
        width: [
          (t) => `calc(${t.colWidthMob} + 10px)`,
          `95px`,
          (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
          (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
        ],
        ml: [
          "20px",
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 56px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 1) + 40px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 1) + 40px) + ${t.desktopMassiveGutters})`,
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
        width: [
          (t) => `calc(${t.colWidthMob} + 10px)`,
          "95px",
          (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
          (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
        ],
        ml: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 225px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) + ${t.desktopBigGutters}))`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 80px) + ${t.desktopMassiveGutters})`,
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
        width: [
          (t) => `calc(${t.colWidthMob} + 10px)`,
          "95px",
          (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
          (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
        ],
        height: "100%",
        bottom: 0,
        position: "absolute",
        ml: [
          (t) => `calc(calc(${t.colWidthMob} * 3.5) + 80px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 394px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 120px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 120px) + ${t.desktopMassiveGutters})`,
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
          (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 240px) * .38)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) + ${t.desktopBigGutters}) * .38)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px) + ${t.desktopMassiveGutters}) * .38)`,
        ],
        right: [(t) => `calc(calc(${t.colWidthMob} * 1.5) + 40px)`, "unset"],
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 5.5) + 100px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 6) + 240px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px) + ${t.desktopMassiveGutters})`,
        ],
        maxWidth: ["811px", "811px", "1000px", "1250px"],
        maxHeight: ["308px", "308px", "350px", "500px"],
        zIndex: 99,
        svg: {
          height: "100%",
          width: ["unset", "100%"],
          position: "absolute",
          top: 0,
          right: 0,
          path: {
            stroke: "#FFF",
            strokeWidth: [4, 3, 2, 2],
          },
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
      cursor: "pointer",
      bottom: 0,
      zIndex: 99,
      opacity: 1,
      transition: "opacity 400ms ease-in",
      ml: [
        (t) => `calc(calc(${t.colWidthMob} * 2) + 30px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 7) + 240px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 7) + 240px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 7) + 240px)`,
      ],
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
    ".hidden": {
      opacity: 0,
      transition: "opacity 200ms ease-in",
    },
    ".LearnMore__imageWrapper": {
      gridArea: ["2/1/3/-1", "1/6/2/-1"],
      mt: ["213px", "290px"],
      mb: [0, "224px"],
      height: [
        "277px",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 280px) * .6)`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthDesktopBig} * 6) + 240px) + ${t.desktopBigGutters}) * .6)`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 240px) + ${t.desktopMassiveGutters}) * .6)`,
      ],
      position: "relative",
      width: [
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 6) + 280px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 240px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 240px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        "-20px",
        (t) => `calc(${t.colWidthDesktop})`,
        (t) => `calc(${t.colWidthDesktopBig})`,
        (t) => `calc(${t.colWidthDesktopMassive})`,
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
      left: [
        0,
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      display: ["flex", "grid"],
      gridTemplateColumns: ["repeat(12,1fr)"],
      gridTemplateRows: ["auto"],
      px: [
        0,
        "40px",
        (t) => t.desktopBigGutters,
        (t) => t.desktopMassiveGutters,
      ],
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
          (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 200px) * .623)`,
          (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) * .623)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px) * .623)`,
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
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 6)  + 220px)`,
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
      left: [
        "-20px",
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      position: "relative",
      display: "flex",
      flexFlow: "column",
      ".Partners__logoCarousel-rowWrapper": {
        width: "100%",
        height: "100%",
        position: "relative",
        mb: [2],
      },
      ".Partners__logoCarousel-rowWrapper-container": {
        width: "100%",
        height: "100%",
        maxHeight: ["unset", "100px"],
        position: "absolute",
        overflowX: "hidden",
        overflowY: "hidden",
      },

      ".Partners__logoCarousel-rowWrapper-container-row": {
        position: "relative",
        height: "100%",
        width: "fit-content",
        display: "flex",
        justifyContent: "space-between",
      },
      ".Partners__logoCarousel-rowWrapper-container-row-imageWrapper": {
        height: "100%",
        px: [2],
        py: [2],

        img: {
          height: "100%",
          objectFit: "contain",
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
        (t) => `calc(${t.colWidthDesktopMassive})`,
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
          `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 160px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        "-20px",
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      ".AdvanceDEI__graphics-box1": {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: ["67px", "36%"],
        width: [
          "115px",
          (t) => `calc(calc(${t.colWidthDesktop} * 2.5) + 120px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 2.5) + 80px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 2.5) + 80px) + ${t.desktopMassiveGutters})`,
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
          (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
        ],
        bottom: "0",
        width: [
          "134px",
          (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 80px) + ${t.desktopMassiveGutters})`,
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
            `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 80px) + ${t.desktopMassiveGutters})`,
        ],
        height: ["120px", "100%"],
        bg: "#000",
        zIndex: 88,
      },
    },
  },
  quotes: {
    bg: "#FAFAFA",
    color: "black",
    position: "relative",
    ".Quotes__imageWrapper": {
      gridArea: ["1/1/2/-1", "1/1/2/6"],
      position: "relative",
      overflow: "hidden",
      width: [
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 160px) + ${t.desktopMassiveGutters})`,
      ],
      height: [
        "calc(100vw * .64)",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 200px) )`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters}) )`,
        (t) =>
          `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 160px) + ${t.desktopMassiveGutters}) )`,
      ],
      left: [
        "-20px",
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      picture: {
        position: "absolute",
        width: "100%",
        height: ["100%"],
        top: [0],
        left: 0,

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
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
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
            (t) => `calc(${t.colWidthDesktopMassive} / -1)`,
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
          `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        "-20px",
        "-40px",
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      position: "relative",
      ".MPP__graphics-background": {
        position: "absolute",
        height: "100%",
        width: [
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 3) + 160px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 120px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 120px) + ${t.desktopMassiveGutters})`,
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
};