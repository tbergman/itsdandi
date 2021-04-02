export const button = {
  width: [
    (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
    (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
    (t) => `calc(calc(${t.colWidthMob} * 3) + 40px)`,
    (t) => `calc(calc(${t.colWidthDesktop} * 2) + 80px)`,
    (t) => `calc(calc(${t.colWidthDesktopBig} * 2) + 80px)`,
    (t) => `calc(calc(${t.colWidthDesktopMassive} * 2) + 80px)`,
  ],
  bg: "blue",
  borderRadius: ["168px", "168px", "168px", "180px"],
  height: ["56px", "56px", "56px", "48px"],
  "&:hover": {
    bg: "#5200FF",
    transition: "all 150ms ease-out",
  },
  ".button": {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    p: {
      m: 0,
      lineHeight: "18.88px",
      fontFamily: "medium",
    },
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: "white",
  },
};
