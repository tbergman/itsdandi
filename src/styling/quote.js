export const quote = {
  ".Quote__imageWrapper": {
    position: "relative",
    gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/8/2/-1"],
    height: [
      "calc(100vw * .426)",
      "calc(100vw * .426)",
      "calc(100vw * .426)",
      (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 240px) * .83)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters}) * .83)`,
      (t) =>
        `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters}) * .83)`,
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
    left: ["-20px", "-20px", "-20px", "-40px"],
  },
  ".Quote__image": {},
};
