export const textBlockAndLinks = {
  mr: [
    0,
    (t) => `calc(${t.colWidthDesktop} + 40px)`,
    (t) => `calc(${t.colWidthDesktopBig} + 40px)`,
    (t) => `calc(${t.colWidthDesktopMassive} + 40px)`,
  ],
  display: "flex",
  flexFlow: "column",
  ".TextBlock__section1": {},
  ".TextBlock__section2": {},
  ".TextBlock__divider": {
    width: "100%",
    borderBottom: "1px solid #CACACE",
  },
  ".TextBlock__listHeader": {
    mt: [1],
  },
  ".TextBlock__listHeaderText": {
    fontFamily: "display",
  },
  ".TextBlock__links": {
    display: "flex",
    flexFlow: "column",
    a: {
      mb: [0],
    },
  },
};
