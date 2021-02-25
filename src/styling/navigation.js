export const navigation = {
  position: "fixed",
  zIndex: 999,
  height: "94px",
  width: ["100vw"],
  display: ["none", "block"],
  fontFamily: "body",
  ".demobtn": {
    "&:hover": {
      bg: "#FF9133",
      ".demobtn-text": {
        fontFamily: "medium",
      },
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bg: "yellow",
    borderRadius: "200px",
    cursor: "pointer",
    height: "40px",
    width: "165px",
    ".demobtn-text": {
      color: "black",
      fontSize: "14px",
      fontFamily: "body",
    },
  },

  ".logoWrapper": {
    position: "relative",
    width: "0",
    height: "0",
    left: 0,
    ".logo": {
      position: "absolute",
      left: ["40px"],
      top: ["40px"],
      width: "32px",
      height: "32px",
      top: "35px",
      bg: "transparent",
      div: {
        div: {
          svg: {
            fill: "#fff",
            path: {
              fill: "#fff",
            },
          },
        },
      },
    },
  },
  ".links": {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    px: ["40px"],
    ".item": {
      fontSize: "nav",

      color: "white",
      ml: [4],
      position: "relative",
      ".item-link": {
        textDecoration: "none",
        color: "inherit",
        fontFamily: "body", // initial
        width: "100%",

        div: {
          "&:hover": {
            opacity: 0.95,
            fontFamily: "medium",
          },
          "&:after": {
            // reserve space for hover
            content: "attr(body)",
            display: "block",
            fontFamily: "medium",
            height: 0,
            overflow: "hidden",
            visibility: "hidden",
          },
        },
      },
      ".item-dropdown": {
        position: "absolute",
        visibility: "hidden", // initial state
        opacity: 0, // initial state
        mt: ["12px"],
        left: "-16px",
        bg: "black",
        borderRadius: "8px",

        ".item-dropdown-bg": {
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          bg: "rgba(58, 58, 61, 0.5)",
          pb: [2],

          display: "flex",
          flexFlow: "column",
          width: "fit-content",
          ".item-dropdown-bg-item": {
            px: [2],
            mr: [1],
            textDecoration: "none",
            pt: [2],
            color: "white",
            opacity: 0.5,
            "&:hover": {
              opacity: 1,
              ".item-dropdown-bg-item-text": {
                fontFamily: "medium",
              },
            },
            ".item-dropdown-bg-item-text": {
              whiteSpace: "nowrap",
              fontSize: "14px",
              fontFamily: "body",
              "&:after": {
                content: "attr(title)",
                display: "block",
                height: 0,
                overflow: "hidden",
                visibility: "hidden",
                fontFamily: "medium",
              },
            },
          },
        },

        ".item-dropdown-filler": {
          bg: "transparent",
          width: "100%",
          height: "12px",
          position: "absolute",
          top: "-12px",
        },
      },
    },
    ".login": {
      color: "yellow",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      ".arrow": {
        pl: "14px",
      },
    },
  },
};
