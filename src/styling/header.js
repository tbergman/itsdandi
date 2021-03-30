export const header = {
  color: "black",
  ".Header__text": {
    mt: [18, 22],
    gridArea: ["1/1/2/-1", "1/3/2/9"],
  },
  ".Header__text-header": {
    fontSize: ["32px", "52px"],
    lineHeight: ["38.4px", "60px"],
  },
  ".Header__text-body": {
    mt: [2, 3],
    fontFamily: "body",
    lineHeight: ["30px", "36px"],
    fontSize: ["20px", "24px"],
  },
  ".Header__graphic": {
    gridArea: ["2/1/3/-1", "2/1/3/-1"],
    position: "relative",
    width: ["100vw"],
    left: [
      "-20px",
      "-40px",
      (t) => `calc(${t.desktopBigGutters} / -1)`,
      (t) => `calc(${t.desktopMassiveGutters} / -1)`,
    ],
  },
};
