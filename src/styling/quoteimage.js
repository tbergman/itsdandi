export const quoteimage = {
  position: "relative",
  width: [
    0,
    (t) => `calc(calc(${t.colWidthDesktop} * 3) + 120px)`,
    (t) => `calc(calc(${t.colWidthDesktopBig} * 3) + 120px)`,
    (t) => `calc(calc(${t.colWidthDesktopMassive} * 3) + 120px)`,
  ],

  height: [
    0,
    (t) => `calc(calc(calc(${t.colWidthDesktop} * 3) + 120px) * .75)`,
    (t) => `calc(calc(calc(${t.colWidthDesktopBig} * 3) + 120px) * .75)`,
    (t) => `calc(calc(calc(${t.colWidthDesktopMassive} * 3) + 120px) * .75)`,
  ],

  ".Quote__image": {
    position: "absolute",
    width: "100%",
  },

  ".Quote__graphics": {
    position: "absolute",
    height: "200%",
    width: "200%",
    transform: "translate3d(-25%,-25%,0)",
  },
  ".Quote__circle": {
    stroke: (t) => t.colors.turquoise,
  },
  // height: [
  //   "calc(100vw * .426)",
  //   (t) => `calc(calc(calc(${t.colWidthDesktop} * 5) + 240px) * .83)`,
  //   (t) =>
  //     `calc(calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters}) * .83)`,
  //   (t) =>
  //     `calc(calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters}) * .83)`,
  // ],
  // width: [
  //   "100vw",
  //   (t) => `calc(calc(${t.colWidthDesktop} * 5) + 240px)`,
  //   (t) =>
  //     `calc(calc(calc(${t.colWidthDesktopBig} * 5) + 200px) + ${t.desktopBigGutters})`,
  //   (t) =>
  //     `calc(calc(calc(${t.colWidthDesktopMassive} * 5) + 200px) + ${t.desktopMassiveGutters})`,
  // ],
  left: ["-20px", 0],
};
