export const header = {
  color: "black",
  ".Header__text": {
    mt: [18, 18, 18, 22],
    gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/9"],
    pr: [0, (t) => t.colWidthMob, (t) => t.colWidthMob, 0],
    maxWidth: ["650px", "650px", "650px", "unset"],
  },
  ".Header__text-header": {
    fontSize: ["32px", "32px", "32px", "52px"],
    lineHeight: ["38.4px", "38.4px", "38.4px", "60px"],
  },
  ".Header__text-body": {
    mt: [2, 2, 2, 3],
    fontFamily: "body",
    lineHeight: ["30px", "30px", "30px", "36px"],
    fontSize: ["20px", "20px", "20px", "24px"],
  },
  ".Header__graphic": {
    gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/1/3/-1"],
    position: "relative",
    width: ["100vw"],
    left: [
      "-20px",
      "-20px",
      "-20px",
      "-40px",
      (t) => `calc(${t.desktopBigGutters} / -1)`,
      (t) => `calc(${t.desktopMassiveGutters} / -1)`,
    ],
  },
};
