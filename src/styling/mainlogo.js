export const mainLogo = {
  backgroundColor: "salmon",
  cursor: "pointer",
  width: ["40px", "80px"],
  height: ["40px", "80px"],
  transform: "rotate(90deg)",
  position: "absolute",
  top: "25%",
  left: [
    (t) => t.mobileGutters,
    (t) => t.mobileGutters,
    (t) => t.mobileGutters,
    (t) => t.mobileGutters,
  ],
  borderTop: " 1px solid yellow",
  ".mainLogo__svg": {
    position: "absolute",
    height: "100%",
    width: "328%",
  },
};
