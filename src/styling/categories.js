export const categories = {
  display: "flex",
  flexFlow: ["column", "column", "column", "row"],

  ".categories__category": {
    display: ["flex", "flex", "flex", "unset"],
    width: [
      "auto",
      "auto",
      "auto",
      (t) => `calc(calc(${t.colWidthDesktop} * 3) +  80px)`,
      (t) => `calc(calc(${t.colWidthDesktopBig} * 3) +  80px)`,
      (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) +  80px)`,
    ],
    mr: [0, 0, 0, "40px"],
    position: "relative",
    ".categories__divider": {
      mb: [1, 1, 1, 0],
      mt: [1, 1, 1, 0],
      top: ["unset", "unset", "unset", 4],
      position: ["absolute"],
      width: "100%",
      height: ["2px"],
      span: {
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    },
    ".categories__title": {
      width: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 60px)`,
        (t) => `calc(calc(${t.colWidthMob} * 3) + 60px)`,
        (t) => `calc(calc(${t.colWidthMob} * 3) + 60px)`,
        "unset",
      ],
      mt: [2, 2, 2, 0],
      mb: [4],
      p: {
        fontFamily: "medium",
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
    ".categories__items": {
      width: [
        (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
        (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
        (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
        "unset",
      ],
      mt: [2, 2, 2, 0],
      display: "flex",
      flexFlow: "column",
      ".categories__item": {},
      ".categories__text": {
        fontSize: ["14px"],
        lineHeight: ["21px"],
      },
    },
  },
};
