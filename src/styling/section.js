export const section = {
  wide: {
    gridArea: ["1/1/2/3", "1/3/2/-1"],
  },
  first: {
    gridArea: ["1/1/2/-1", "1/3/2/7"],
  },
  second: {
    gridArea: ["2/1/3/-1", "1/7/2/-1"],
    pl: [
      0,
      (t) => t.colWidthDesktop,
      (t) => t.colWidthDesktopBig,
      (t) => t.colWidthDesktopMassive,
    ],
  },
};
