export const mobileNavigation = {
  position: "fixed",
  zIndex: 1000,
  width: "100%",
  bg: "#FFF",
  height: "74px",
  width: "100%",
  display: ["unset", "unset", "unset", "none"],
  ".MobileNav__container": {
    height: "100%",
    width: "100%",
    transition: "all 100ms cubic-bezier(.01,.66,.83,.67)",
    ".MobileNav__container-wrapper": {
      display: ["flex", "flex", "flex", "none"],
      justifyContent: "space-between",
      ".MobileNav__container-wrapper-hamburger": {
        cursor: "pointer",
        mr: "20px",
        mt: "33px",
        position: "relative",
        height: "21px",
        width: "25px",
        span: {
          position: "absolute",
          transition: "all 200ms ease-out",
          left: 0,
          p: 0,
          m: 0,
          height: "3px",
          width: "25px",
          bg: "white",
        },
      },
      ".MobileNav__container-wrapper-button": {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        mt: "30px",
        ".mobileDemoBtn": {
          // initial state
          visibility: "hidden",
          opacity: 0,
          //
          color: "yellow",
          fontFamily: "medium",
          cursor: "pointer",
        },
      },
      ".MobileNav__container-wrapper-logo": {
        height: "40px",
        width: "40px",
        svg: {
          path: {
            fill: "white",
          },
        },
      },
    },
  },
};
