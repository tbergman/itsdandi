export const submenu = {
  mobile: {
    display: ["unset", "unset", "unset", "none"],
    position: "absolute",
    top: "74px",
    left: 0,
    width: "100vw",
    height: "40px",
    overflow: "hidden",
    zIndex: 99,
    borderBottom: ["1px solid #CACACE"],

    ".SubMenu__arrow": {
      cursor: "pointer",
      path: {
        stroke: "#CACACE",
      },
    },
    ".SubMenu__left": {
      position: "absolute",
      visibility: "visible",
      opacity: 1,
      width: "40px",
      height: "39px",
      top: 0,
      left: 0,
      zIndex: 99,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ".SubMenu__arrow": {
        transform: "rotate(90deg)",
      },
    },
    ".SubMenu__right": {
      position: "absolute",
      width: "40px",
      height: "39px",
      visibility: "visible",
      opacity: 1,
      top: 0,
      right: 0,
      zIndex: 99,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",

      ".SubMenu__arrow": {
        transform: "rotate(-90deg)",
      },
    },

    ".SubMenu__mobileContainer": {
      px: ["20px"],
      display: "flex",
      height: ["100%"],
      width: "fit-content",

      ".SubMenu__mobileContainer-draggable-item": {
        height: "100%",
        cursor: "pointer",
        pr: [3],
        display: ["flex"],
        justifyContent: ["space-between"],
        alignItems: "center",

        color: "inherit",
        textDecoration: "none",
        whiteSpace: "nowrap",
        opacity: 0.5,

        ".SubMenu__mobileContainer-draggable-item-text": {
          fontSize: "14px",
          lineHeight: "16px",
          color: "inherit",
          fontFamily: "medium",
        },
      },
      ".current": {
        opacity: 1,
        position: "relative",
        pl: [0],
      },
    },
  },
  desktop: {
    display: ["none", "none", "none", "unset"],
    position: "fixed",
    top: [24],
    left: "40px",

    zIndex: 99,
    ".SubMenu__container": {
      // height: ["100%", ""],
      width: "100%",
      borderBottom: ["1px solid #CACACE", "none"],
      display: "flex",
      flexFlow: ["row nowrap", "column"],
      alignItems: ["center", "unset"],
      ".SubMenu__container-item": {
        cursor: "pointer",
        mb: [0, 2],
        mr: [5, 0],
        color: "inherit",
        textDecoration: "none",
        whiteSpace: "nowrap",
        opacity: 0.5,
        height: "max-content",

        "&:hover": {
          opacity: 1,
        },

        ".SubMenu__container-item-text": {
          fontSize: "14px",
          lineHeight: "16px",
          color: "inherit",
          fontFamily: "medium",
          height: "auto",
          opacity: 1,
          transform: "translate3d(0,0,0)",
          transition:
            "opacity 350ms 0ms ease-out, transform 500ms 0ms ease-out",
        },
      },
      ".SubMenu__container-item-hidden": {
        mb: [2],
        minHeight: "16px",
        ".SubMenu__container-item-text": {
          opacity: 0,
          transform: "translate3d(50px,0,0)",
          height: 0,
          transition:
            "height 0ms 500ms, opacity 350ms 0ms ease-in, transform 350ms 0ms ease-in",
          fontSize: "14px",
          lineHeight: "16px",
          color: "inherit",
          fontFamily: "medium",
        },
      },
      ".SubMenu__container-item-hamburger": {
        position: "absolute",
        left: 0,
        height: "100%",
        width: "12px",

        ".SubMenu__container-item-hamburger-line1": {
          position: "absolute",
          height: "2px",
          display: ["none", "unset"],

          width: "100%",
          top: 0,
          transform: "translate3d(0,8px,0)",
          transition: "all 250ms",
        },
        ".SubMenu__container-item-hamburger-line2": {
          position: "absolute",
          height: "2px",
          width: "100%",
          top: 0,
          opacity: 0,
          transform: "translate3d(-10px,10px,0)",
          transition: "all 250ms",
        },
      },
      ".folded": {
        ".SubMenu__container-item-hamburger-line1": {
          transform: "translate3d(0, 5px,0)",
        },
        ".SubMenu__container-item-hamburger-line2": {
          opacity: 1,
          transform: "translate3d(0,10px,0)",
        },
      },
      ".current": {
        opacity: 1,
        position: "relative",
        pl: [3],
      },
    },
    ".closed": {
      height: "16px",
    },
  },

  variants: {
    default: {
      color: "white",
      bg: "black",
    },

    white: {
      color: "black",
      bg: "#FFF",
    },
    gray: {
      color: "black",
      bg: "#F8F8F8",
    },
  },
};
