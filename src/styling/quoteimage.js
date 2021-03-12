export const quoteimage = {
  position: "relative",
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
  left: ["-20px", 0],
};
