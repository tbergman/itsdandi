export const quote = {
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
  },
  ".Quote__image": {},
  ".Quote__textWrapper": {
    gridArea: ["2/1/3/-1", "1/3/2/7"],
    display: "flex",
    alignItems: "center",
    mt: [4, 0],
  },
  ".Quote__text": {
    color: "black",
    position: "relative",
    ".Quote__textWrapper-text-quotation": {
      position: "absolute",
      top: [0],
    },
  },
  ".Quote__body": {
    ml: [5],
    maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
  },
  ".Quote__bodyText": {
    fontFamily: "display",
    fontSize: ["24px", "40px"],
    lineHeight: ["31.2px", "48px"],
  },
  ".Quote__name": {
    mt: [4],
    ml: [5],
    mb: [8, 0],
  },
  ".Quote__nameText": {
    lineHeight: ["20px"],
    fontSize: ["14px"],
    fontFamily: "body",
  },
};
