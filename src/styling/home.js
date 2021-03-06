export const home = {
  top: {
    bg: ["transparent"],
    // bigLogo: {
    //   height: "100%",
    //   width: "100%",
    //   pointerEvents: "none",
    //   ".BigLogo__logoSvg": {
    //     opacity: 0, // starting point,
    //   },
    //   ".BigLogo__logoSvg-letter": {},
    //   ".BigLogo__logoSvg-svg": {},
    //   ".static": {},

    //   svg: {
    //     position: "fixed",
    //     zIndex: 9999,
    //     top: [0],
    //     left: [
    //       (t) => t.mobileGutters,
    //       (t) => t.mobileGutters,
    //       (t) => t.desktopGutters,
    //       (t) => t.desktopGutters,
    //     ],
    //     height: ["43px", "43px", "43px", "90px"],
    //     width: ["125px", "125px", "125px", "calc(90px * 3.4)"],
    //     mb: [
    //       (t) => t.mobileGutters,
    //       (t) => t.mobileGutters,
    //       (t) => t.desktopGutters,
    //       (t) => t.desktopGutters,
    //     ],
    //   },
    // },
    ".Top__text": {
      gridArea: ["1/2/2/-1", "1/2/2/-1", "1/3/2/-1", "1/7/2/-1"],
      ml: [
        (t) => `calc(${t.colWidthMob} + 10px)`,
        (t) => `calc(${t.colWidthMob} + 10px)`,
        (t) => `calc(${t.colWidthMob} + 10px)`,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      mt: [24, 24, 24, "250px"],
      mb: [2, 2, 2, 0],
      ".Top__text-header": {
        fontSize: ["36px", "36px", "48px", "72px"],
        lineHeight: ["43.2px", "43.2px", "48px", "70px"],
        mr: [
          "unset",
          "unset",
          "unset",
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => `calc(${t.colWidthDesktopMassive} + 60px)`,
        ],
      },
      ".Top__text-button": {
        position: "relative",
        cursor: "pointer",
        zIndex: 99,
        left: [0, 0, 0, "-8px"],
        gridArea: ["2/2/3/6", "2/2/3/6", "2/2/3/6", "2/7/3/-1"],
        width: ["160px"],
        height: ["56px"],
        mt: ["24px", "24px", "24px", "48px"],
        bg: "yellow",
        borderRadius: "200px",
        display: ["flex", "flex", "flex", "none"],
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
    ".Top__learnMore": {
      mt: [4],
      display: ["none", "none", "none", "flex"],
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        color: ["yellow"],
        ".Top__arrow": {
          fill: ["yellow"],
          stroke: ["yellow"],
        },
      },
    },
    ".Top__arrow": {
      mr: [2],
      fill: "white",
      stroke: "white",
    },
    bars: {
      pointerEvents: "none",
      gridArea: ["2/1/3/-1"],
      position: "relative",
      width: "100vw",
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      height: ["191px", "191px", "220px", "112px", "136px"],

      ".Bars__barWrapper": {
        position: "absolute",
        width: "100%",
        bottom: 0,
        left: 0,
        height: ["175px", "175px", "175px", "250px", "275px", "300px"],
      },
      ".Bars__barWrapper-bar1": {
        zIndex: 99,
        position: "absolute",
        height: "100%",
        width: ["55px", "65px", "80px", `95px`, ,],
        ml: [
          (t) => t.mobileGutters,
          (t) => t.mobileGutters,
          (t) => t.desktopGutters,
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
          borderRadius: "7px 7px 0px 0px",
        },
        ".Bars__barWrapper-bar1-bottom": {
          position: "absolute",
          bg: "blue",
          width: "100%",

          borderRadius: "0px 0px 7px 7px",
          top: "100%",
          left: 0,
        },
      },
      ".Bars__barWrapper-bar2": {
        zIndex: 99,
        width: ["55px", "65px", "80px", "95px"],
        ml: [
          (t) => `calc(20px + 105px)`,
          (t) => `calc(20px + 115px)`,
          (t) => `calc(40px + 130px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 225px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopBig} * 1) + 40px) + ${t.desktopBigGutters}) + 185px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 1) + 40px) + ${t.desktopMassiveGutters}) + 185px)`,
        ],
        bottom: 0,
        height: "100%",
        position: "absolute",
        ".Bars__barWrapper-bar2-top": {
          position: "absolute",
          width: "100%",
          bg: "turquoise",
          bottom: 0,
          left: 0,
          borderRadius: "7px 7px 0px 0px",
        },
        ".Bars__barWrapper-bar2-bottom": {
          position: "absolute",
          width: "100%",
          bg: "blue",
          top: "100%",
          left: 0,
          borderRadius: "0px 0px 7px 7px",
        },
      },
      ".Bars__barWrapper-bar3": {
        zIndex: 99,
        width: ["55px", "65px", "80px", "95px"],
        height: "100%",
        bottom: 0,
        position: "absolute",
        ml: [
          (t) => `calc(20px + 210px)`,
          (t) => `calc(20px + 230px)`,
          (t) => `calc(40px + 260px)`,

          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 394px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopBig} * 1) + 40px) + ${t.desktopBigGutters}) + 370px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 1) + 40px) + ${t.desktopMassiveGutters}) + 370px)`,
        ],

        ".Bars__barWrapper-bar3-bottom": {
          position: "absolute",
          width: "100%",
          left: 0,
          top: "100%",
          bg: "blue",
          borderRadius: "0px 0px 7px 7px",
        },
      },
      ".Bars__barWrapper-line": {
        position: "absolute",
        bottom: ["-45%", "-45%", "-45%", "-37%", "-30%"],
        height: [
          "120%",
          "120%",
          (t) => `calc(calc(calc(${t.colWidthMob} * 5.5) + 100px) * .38)`,
          (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 240px) * .38)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) + ${t.desktopBigGutters}) * .38)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px) + ${t.desktopMassiveGutters}) * .38)`,
        ],
        right: [
          (t) => `calc(calc(${t.colWidthMob} * 1.5) + 40px)`,
          (t) => `calc(calc(${t.colWidthMob} * 1.5) + 40px)`,
          "unset",
          "unset",
        ],
        left: ["unset", "unset", 0, "unset"],
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 5.5) + 100px)`,
          (t) => `calc(calc(${t.colWidthMob} * 5.5) + 100px)`,
          (t) => `calc(calc(${t.colWidthMob} * 5.5) + 100px)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 6) + 240px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px) + ${t.desktopMassiveGutters})`,
        ],
        maxWidth: ["811px", "811px", "600px", "811px", "1000px", "1250px"],
        maxHeight: ["308px", "308px", "222px", "308px", "350px", "500px"],
        zIndex: 99,
        svg: {
          height: "100%",
          width: ["unset", "unset", "100%", "100%"],
          position: "absolute",
          top: 0,
          right: 0,
          path: {
            stroke: "#FFF",
            strokeWidth: [4, 4, 4, 3, 2, 2],
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
        (t) => `calc(calc(${t.colWidthMob} * 2) + 30px)`,
        (t) => `calc(calc(${t.colWidthMob} * 2) + 30px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 7) + 240px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 7) + 240px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 7) + 240px)`,
      ],
      mb: [1, 1, 1, 2],
      display: ["none", "none", "none", "flex"],
      alignItems: "flex-start",
      justifyContent: ["flex-end", "flex-end", "flex-end", "flex-start"],
      ".LearnMore__toptext-text": {
        fontFamily: "display",
        fontWeight: "500",
        fontSize: ["16px"],
        lineHeight: ["20px"],
      },
      ".LearnMore__toptext-arrow": {
        ml: "10px",
        width: ["55px"],
        pt: ["4%", "4%", "4%", "1.6%"],
      },
    },
    ".hidden": {
      opacity: 0,
      transition: "opacity 200ms ease-in",
    },
    ".LearnMore__imageWrapper": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/6/2/-1"],
      mt: ["213px", "213px", "213px", "290px"],
      mb: [0, 0, 0, "224px"],
      height: [
        "calc(120vw * .54)",
        "calc(120vw * .54)",
        "calc(120vw * .54)",
        "500px",
      ],
      position: "relative",
      width: [
        "100vw",
        "100vw",
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 6) + 280px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 240px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 240px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.colWidthDesktop})`,
        (t) => `calc(${t.colWidthDesktopBig})`,
        (t) => `calc(${t.colWidthDesktopMassive})`,
      ],
      ".LearnMore__imageWrapper-image": {
        position: "absolute",
        height: "100%",
        right: [0, 0, 0, "unset"],
        left: ["unset", "unset", "unset", 0],
      },
    },
    ".LearnMore__text": {
      gridArea: ["3/1/4/-1", "3/1/4/-1", "3/1/4/-1", "1/2/2/7", "1/2/2/6"],
      mt: [6, 6, 6, "290px"],
      ml: [0],
      mb: [16, 16, 16, 26],
      ".LearnMore__text-header": {
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
      ".LearnMore__text-link": {
        mt: [1],
        p: {
          mt: 0,
          fontFamily: "medium",
        },
      },
      ".LearnMore__text-body": {
        mt: [3, 3, 3, 4],
        fontSize: ["16px", "16px", "16px", "20px"],
        lineHeight: ["24px", "24px", "24px", "32px"],
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
    },
  },
  carousel: {
    bg: "transparent",
    pb: [10, 10, 10, "192px"],
    pt: [10, 10, 10, 16],
    ".Carousel__topText": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/2/2/7", "1/2/2/6"],
      height: "fit-content",
      mb: [3, 3, 3, 0],
    },
    ".Carousel__header": {
      fontFamily: "display",
      fontWeight: "500",
    },
    ".Carousel__description": {
      fontFamily: "body",
      fontWeight: "400",
      mt: [3, 3, 3, 4],
      pr: [0, 0, (t) => t.colWidthMob, 0],

      fontSize: ["16px", "16px", "16px", "20px"],
      lineHeight: ["32px"],
      maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
    },
    ".Carousel__textWrapper": {
      gridArea: ["3/1/4/-1", "3/1/4/-1", "3/1/4/-1", "2/2/3/6", "2/2/3/6"],
      mt: [3, 3, 3, 10, 16],
      maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
    },

    ".Carousel__imageSection": {
      gridArea: [
        "2/1/3/-1",
        "2/1/3/-1",
        "2/1/3/-1",
        "1/7/4/-1",
        "1/7/4/-1",
        "1/7/3/-1",
      ],
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "flex-end",
    },
    ".Carousel__imageWrapper": {
      overflow: "hidden",
      mb: [0, 0, 0, 5, 0],
      position: "relative",
      width: [
        "calc(100vw - 40px)",
        "calc(100vw - 40px)",
        "calc(100vw - 80px)",
        "100%",
      ],
      height: [
        "calc(100vw - 40px)",
        "calc(100vw - 40px)",
        "calc(100vw - 80px)",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 6) + 200px))`,
        (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 6) + 200px))`,
        (t) => `calc(calc(calc(${t.colWidthDesktopMassive} * 6) + 200px))`,
      ],
    },
    ".Carousel__image": {
      position: ["absolute"],
      height: ["unset"],
      width: ["100%"],
      left: [0],
      bottom: [0],
    },
  },
  payequity: {
    bg: "#F8F8F8",
    color: "black",
    ".PayEquity__text": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/2/2/7", "1/2/2/6"],
      mt: [10, 10, 10, 0],
      mb: [3, 3, 3, 0],
      display: ["block", "block", "block", "flex"],
      flexFlow: "column",
      justifyContent: "center",
      ".PayEquity__text-header": {
        ".PayEquity__text-header-text": {},
      },
      ".PayEquity__text-body": {
        mt: [3, 3, 3, 4],
        pr: [0, 0, (t) => t.colWidthMob, 0],
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
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
      width: ["100vw", "100vw", "100vw", "50vw"],
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 6)  + 220px  )`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 6)  + 220px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 6)  + 220px)`,
      ],
      height: [
        "calc(100vw * .82)",
        "calc(100vw * .82)",
        "calc(100vw * .82)",
        "calc(50vw * .82)",
      ],
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/1/2/-1"],
      ".PayEquity__imageWrapper-image": {
        zIndex: 99,
        position: "absolute",
        height: ["100%"],
        width: ["100%"],
        top: ["unset", "unset", "unset", 0],
        bottom: [0, 0, 0, "unset"],
        display: "flex",
        justifyContent: "center",
      },
    },
  },
  partners: {
    bg: "clearWhite",
    color: "black",
    ".Partners__text": {
      mt: [10, 10, 10, 21],
      mb: [9],
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/2/2/7", "1/2/2/6"],
      ".Partners__text-header": {
        pr: [0, (t) => t.colWidthMob, (t) => t.colWidthMob, 0],
      },
    },
    ".Partners__logoCarousel": {
      gridArea: ["2/1/3/-1"],
      height: ["200px", "200px", "200px", "250px"],
      mb: ["50px", "50px", "50px", 14],
      width: "100vw",
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
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
        maxHeight: ["unset", "unset", "unset", "100px"],
        position: "absolute",
        overflowX: "hidden",
        overflowY: "hidden",
      },

      ".Partners__logoCarousel-rowWrapper-container-row": {
        position: "relative",
        height: "70%",
        width: "fit-content",
        display: "flex",
        justifyContent: "space-between",
      },
      ".Partners__logoCarousel-rowWrapper-container-row-imageWrapper": {
        height: "100%",
        px: [3, 3, 3, 6],
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
      mt: [10, 10, 10, 22],
      mb: [0, 5, 5, 30],
      pr: [0, (t) => t.colWidthMob, (t) => t.colWidthMob, 0],
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/7/2/-2"],
      ml: [
        0,
        0,
        0,
        (t) => `calc(${t.colWidthDesktop})`,
        (t) => `calc(${t.colWidthDesktopBig})`,
        (t) => `calc(${t.colWidthDesktopMassive})`,
      ],
      ".AdvanceDEI__text-header": {
        ".AdvanceDEI__text-header-text": {},
      },
      ".AdvanceDEI__text-body": {
        mt: ["30px", "30px", "30px", 4],
        fontFamily: "body",
        color: "black",
        ".AdvanceDEI__text-body-text": {},
      },
      ".AdvanceDEI__link": {
        mt: [1, 1, 1, 3],
        p: {
          fontFamily: "medium",
          fontWeight: "500",
          mt: 0,
        },
      },
    },
    ".AdvanceDEI__graphics": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/1/2/6"],
      height: ["120px", "180px", "225px", "100%"],
      position: "relative",
      width: [
        "100vw",
        "100vw",
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 5) + 200px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 160px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 160px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      ".AdvanceDEI__graphics-box1": {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: ["50%", "50%", "50%", "36%"],
        width: [
          "30%",
          "30%",
          "35%",
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
          "10%",
          "10%",
          "10%",
          (t) => `calc(${t.colWidthDesktop} + 40px)`,
          (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
          (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
        ],
        bottom: "0",
        width: [
          "30%",
          "30%",
          "35%",
          (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 80px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 80px) + ${t.desktopMassiveGutters})`,
        ],
        height: ["100%", "100%", "100%", "64%"],
        bg: "#A4F0F4",
        zIndex: 89,
      },
      ".AdvanceDEI__graphics-box3": {
        position: "absolute",
        display: ["none", "none", "none", "block"],
        left: 0,
        bottom: "0",
        width: [
          0,
          0,
          0,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopBig} * 2) + 80px) + ${t.desktopBigGutters})`,
          (t) =>
            `calc(calc(calc(${t.colWidthDesktopMassive} * 2) + 80px) + ${t.desktopMassiveGutters})`,
        ],
        height: ["120px", "120px", "120px", "100%"],
        bg: "#000",
        zIndex: 88,
      },
    },
  },
  quotes: {
    bg: "#FAFAFA",
    color: "black",
    position: "relative",
    ".Quotes": {},
    ".Quotes__content": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-2"],
      display: "flex",
      flexFlow: ["column", "column", "column", "row nowrap"],
      py: [0, 0, 0, 20],
    },

    ".Quotes__imageWrapper": {
      flexShrink: [0],
      transform: [
        "translate(-20px,0px)",
        "translate(-20px,0px)",
        "translate(-40px,0px)",
        "unset",
      ],
      overflow: "hidden",
      position: "relative",
      width: [
        "100vw",
        "100vw",
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 4) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 120px)`,
      ],
      height: [
        "calc(100vw * .75)",
        "calc(100vw * .75)",
        "calc(100vw * .75)",
        (t) => `calc(calc(calc(${t.colWidthDesktop} * 4) + 120px) * .75)`,
        (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 4) + 120px) * .75)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 4) + 120px) * .75)`,
      ],
    },
    ".Quotes__picture": {
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
    },
    ".Quotes__image": {
      width: "100%",
    },
    ".Quotes__textWrapper": {
      flexShrink: 1,
      ml: [0, 0, 0, "40px"],
      position: "relative",
      display: "flex",
      overflow: "hidden",
      height: ["fit-content", "fit-content", "fit-content", "unset"],
      alignItems: ["unset", "unset", "unset", "flex-start"],
    },
    ".Quotes__text": {
      position: "relative",
      mt: [4, 4, 4, 0],
      ml: [0, 0, 0, 5],
      pr: [3, 3, 3, 0],
    },
    ".Quotes__body": {
      fontFamily: "display",
      fontSize: ["24px", "24px", "24px", "36px", "40px"],
      lineHeight: ["31.2px", "31.2px", "31.2px", "44px", "48px"],
      ml: ["40px", "40px", "40px", "unset"],
    },
    ".Quotes__source": {
      mt: [3, 3, 3, 5],
      mb: [5],
      ml: ["40px", "40px", "40px", "unset"],
    },
    ".Quotes__name": {
      fontFamily: "medium",

      lineHeight: ["24px", "24px", "24px", "32px"],
      fontSize: ["16px"],
    },
    ".Quotes__quotationmark": {
      // display: ["none", "none", "none", "unset"],
      position: "absolute",
      left: [0, 0, 0, "-40px"],
    },
    ".Quotes__title": {
      fontFamily: "body",
      fontSize: ["16px"],
      lineHeight: "24px",
    },
    ".Quotes__company": {
      fontFamily: "body",
      fontSize: ["16px"],
      lineHeight: "24px",
    },

    ".Quotes__navigation": {
      width: ["100vw"],
      height: "100%",
      position: "absolute",
      left: [0],
      display: "flex",
      alignItems: ["flex-end", "flex-end", "flex-end", "center"],
      pb: [2, 2, 2, 0],
      px: [9, 9, 9, 3],
      zIndex: 1,
      pointerEvents: "none",
    },
    ".Quotes__prev": {
      flex: 1,
      display: "flex",
      justifyContent: "flex-start",
    },
    ".Quotes__next": {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      ".Quotes__arrow": {
        transform: "rotate(180deg)",
      },
    },
    ".Quotes__arrow": {
      pointerEvents: "auto",
      cursor: "pointer",
    },

    ".Quotes__timerWrapper": {
      position: ["relative", "relative", "relative", "absolute"],
      right: [0],
      gridArea: ["3/1/4/-1", "3/1/4/-1", "3/1/4/-1", "unset"],
      height: ["64px", "64px", "64px", "100%"],
      width: ["100vw", "100vw", "100vw", "72px"],
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        "unset",
      ],
      bg: "rgba(255,255,255,0.24)",
    },
    ".Quotes__timer": {
      bg: "rgba(58,58,61,0.1)",
      height: ["100%", "100%", "100%", "unset"],
      width: ["unset", "unset", "unset", "100%"],
    },
  },
  marketplacepartners: {
    color: "black",
    position: "relative",
    bg: "#FFF",
    ".MPP__graphics": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/1/2/6"],
      pt: [10, 10, 10, 0],
      bg: ["lightViolet", "lightViolet", "lightViolet", "unset"],
      height: [
        (t) => `calc(calc(calc(${t.colWidthMob} * 4) + 60px) / 2)`,
        (t) => `calc(calc(calc(${t.colWidthMob} * 4) + 60px) / 2)`,
        (t) => `calc(calc(calc(${t.colWidthMob} * 4) + 60px) / 2)`,

        "100%",
      ],
      width: [
        "100vw",
        "100vw",
        "100vw",
        (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters})`,
        (t) =>
          `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters})`,
      ],
      left: [
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.mobileGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopGutters} / -1)`,
        (t) => `calc(${t.desktopBigGutters} / -1)`,
        (t) => `calc(${t.desktopMassiveGutters} / -1)`,
      ],
      position: "relative",
      ".MPP__graphics-background": {
        position: "absolute",
        height: "100%",
        width: [
          "100%",
          "100%",
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
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          "380px",
          "464px",
        ],
        bottom: [
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 4) + 60px) * .5) / -1)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 4) + 60px) * .5) / -1)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 4) + 60px) * .5) / -1)`,

          "unset",
        ],
        height: [
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          "100%",
        ],
        display: "flex",
        alignItems: "center",
        right: ["20%", "20%", "20%", "-190px", "-232px"],

        ".MPP__graphics-background-circles-circle": {
          transform: [
            "rotate(90deg)",
            "rotate(90deg)",
            "rotate(90deg)",
            "unset",
          ],
          width: "inherit",
          height: "inherit",
        },
      },
    },
    ".MPP__text": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/7/2/-1"],
      mt: [10, 10, 10, "275px"],
      mb: [10, 10, 10, "303px"],
      ".MPP__text-header": {
        mt: [
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 4) + 60px) / 2) + 40px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 4) + 60px) / 2) + 40px)`,
          (t) =>
            `calc(calc(calc(calc(${t.colWidthMob} * 4) + 60px) / 2) + 60px)`,
          0,
        ],
        ".MPP__text-header-text": {
          pr: [0, 0, (t) => t.colWidthMob, 0],
        },
      },

      ".MPP__text-body": {
        mt: ["20px", "20px", "20px", 4],
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
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
