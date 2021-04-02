export const quoteimage = {
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
    (t) => `calc(calc(calc(${t.colWidthDesktopMassive} * 4) + 120px) * .75)`,
  ],
  ml: [0, 0, 0, "40px"],

  ".Quote__image": {
    position: "absolute",
    width: "100%",
  },

  left: ["-20px", "-20px", "-20px", 0],
};
