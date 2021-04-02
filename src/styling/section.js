export const section = {
  wide: {
    gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
  },
  one: {
    primary: {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/8"],
      pr: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
    },
    secondary: {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/7"],
    },
    quote: {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/3/2/8"],
      pr: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
    },
  },
  two: {
    primary: {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/7/2/-1"],
      pl: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      pr: [
        0,
        0,
        0,
        (t) => `calc(${t.colWidthDesktop} + 40px)`,
        (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
        (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
      ],
    },
    quote: {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/7/2/-1"],
      pl: [
        0,
        0,
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
      pr: [
        0,
        0,
        0,
        (t) => `calc(${t.colWidthDesktop} + 40px)`,
        (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
        (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
      ],
    },
  },
  fullScreen: {
    width: "100vw",
  },
};
