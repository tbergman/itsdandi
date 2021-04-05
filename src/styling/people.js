export const people = {
  bg: "#F8F8F8",
  color: "black",
  ".toptext": {
    mt: [8, 8, 8, 16],
    mb: [12],
    gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
    display: "flex",
    flexFlow: ["column", "column", "column", "unset"],

    ".section1": {
      width: [
        "100%",
        "100%",
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],
      h2: {
        maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
      },
    },
    ".section2": {
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
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],

      p: {
        mt: [2, 2, 2, 1],
        maxWidth: [
          "unset",
          "unset",
          (t) => t.tabletMaxSectionWidth,
          (t) => t.desktopMaxSectionWidth,
        ],
      },
    },
  },

  ".people": {
    gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/3/3/-1"],
    width: ["unset"],
    left: ["unset"],
    position: "relative",
    mb: [8, 8, 14, 16],
    display: "flex",
    flexFlow: ["row wrap"],
    justifyContent: [
      "space-between",
      "space-between",
      "space-between",
      "unset",
    ],
    ".person:nth-of-type(4n)": {
      mr: 0,
    },
    ".person": {
      textDecoration: "none",
      color: "inherit",
      width: [
        "100%",
        "100%",
        (t) => `calc(calc(${t.colWidthTablet} * 3) + 40px)`,
        (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 120px)`,
        (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 120px)`,
      ],

      mb: [4],
      display: "flex",
      flexFlow: ["row"],
      alignItems: ["flex-start"],
      ".person__imageWrapper": {
        clipPath: ["circle(50%)"],
        position: "relative",
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 20px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 20px)`,
          (t) => `calc(calc(${t.colWidthTablet} * 1) + 20px)`,
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
        height: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 20px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 20px)`,
          (t) => `calc(calc(${t.colWidthTablet} * 1) + 20px)`,
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
      },
      ".person__image": {
        position: "relative",
        height: "100%",
        width: "100%",
        objectFit: "cover",
      },
      ".person__text": {
        mt: [2, 2, 2, 0],
        ml: [
          (t) => `calc(${t.colWidthMob} + 20px)`,
          (t) => `calc(${t.colWidthMob} + 20px)`,
          "20px",
          "40px",
        ],
        mb: [0],
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
          (t) => `calc(${t.colWidthTablet} * 2)`,
          (t) => `calc(calc(${t.colWidthDesktop} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 40px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 40px)`,
        ],
      },
      ".person__link": {
        textDecoration: "none",
        height: "fit-content",
        width: "fit-content",
        color: "inherit",
        cursor: "pointer",
      },
      ".person__name": {
        mt: 0,
        width: "fit-content",
        mb: 0,
        fontSize: ["14px"],
        fontWeight: "400",
        fontFamily: "display",
        lineHeight: ["21px"],
        "&:hover": {
          textDecoration: "underline",
        },
      },
      ".person__title": {
        mt: 0,
        mb: 0,
        fontSize: ["13px"],
        fontWeight: "400",
        fontFamily: "body",
        lineHeight: ["19.5px"],
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
};
