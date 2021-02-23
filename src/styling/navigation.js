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

  variants: {
    default: {
      bg: "black",
      color: "white",
      ".main": {
        a: {
          color: "white !important",
        },
        path: {
          stroke: "white !important",
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.white} !important`,
        },
        ".current": {
          bg: "#262629 !important",
        },
      },
      ".item": {
        color: "white",
        ".item-dropdown": {
          bg: (t) => `${t.colors.black} !important`,
          ".item-dropdown-bg": {
            bg: (t) => `rgba(58,58,61,0.5) !important`,
            ".item-dropdown-bg-item": {
              color: (t) => `${t.colors.white} !important`,
              opacity: 0.5,
              "&:hover": {
                opacity: 1,
              },
            },
          },
        },
      },

      ".login": {
        bg: "transparent",
        color: "yellow",
        path: {
          stroke: "yellow",
        },
        line: {
          stroke: "yellow",
        },
      },
      ".logo": {
        bg: "transparent",
        path: {
          fill: "white",
        },
      },
      ".BigLogo": {
        bg: "transparent !important",
      },
      ".hamburger": {
        span: {
          bg: "white",
        },
      },
    },
    violet: {
      bg: "violet",
      color: "black",
      ".main": {
        a: {
          color: "black !important",
        },
        path: {
          stroke: "black !important",
        },
      },
      ".item": {
        color: (t) => `${t.colors.black} !important`,
        ".item-dropdown": {
          bg: (t) => `${t.colors.violet} !important`,
          ".item-dropdown-bg": {
            bg: (t) => `rgba(255, 255, 255, 0.5) !important`,
            ".item-dropdown-bg-item": {
              color: (t) => `${t.colors.black} !important`,
              opacity: 0.7,
              "&:hover": {
                opacity: 1,
              },
            },
          },
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".current": {
          bg: "#F8F8F8 !important",
        },
      },
      ".login": {
        color: (t) => `${t.colors.blue} !important`,
        path: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
        line: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
      },
      ".logo": {
        bg: "transparent",
        path: { fill: (t) => `${t.colors.black} !important` },
      },
      ".BigLogo": {
        bg: "transparent !important",
      },
      ".hamburger": {
        span: {
          bg: (t) => `${t.colors.black} !important`,
        },
      },
      ".demobtn": {
        "&:hover": {
          // bg: "#f2f2f2 !important",
          ".demobtn-text": {
            fontFamily: "medium",
          },
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bg: (t) => `${t.colors.blue} !important`,
        borderRadius: "200px",
        cursor: "pointer",
        height: "40px",
        width: "165px",
        ".demobtn-text": {
          color: (t) => `${t.colors.white} !important`,
          fontSize: "14px",
          fontFamily: "body",
        },
      },
    },
    gray: {
      bg: "#F8F8F8",
      color: "black",
      ".main": {
        a: {
          color: "black !important",
        },
        path: {
          stroke: "black !important",
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".current": {
          bg: "rgba(0,0,0,0.04)",
        },
      },
      ".item": {
        color: (t) => `${t.colors.black} !important`,
        ".item-dropdown": {
          bg: `#FFF !important`,
          ".item-dropdown-bg": {
            bg: `#FFF !important`,
            ".item-dropdown-bg-item": {
              color: (t) => `${t.colors.black} !important`,
              opacity: 0.5,
              "&:hover": {
                opacity: 1,
              },
            },
          },
        },
      },
      ".login": {
        color: (t) => `${t.colors.blue} !important`,
        path: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
        line: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
      },
      ".logo": {
        bg: "transparent",
        path: { fill: (t) => `${t.colors.black} !important` },
      },
      ".BigLogo": {
        bg: "transparent !important",
      },
      ".hamburger": {
        span: {
          bg: (t) => `${t.colors.black} !important`,
        },
      },
    },
    gray2: {
      bg: "#FAFAFA",
      color: "black",
      ".main": {
        a: {
          color: "black !important",
        },
        path: {
          stroke: "black !important",
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".current": {
          bg: "rgba(0,0,0,0.05)",
        },
      },
      ".item": {
        color: (t) => `${t.colors.black} !important`,
        ".item-dropdown": {
          bg: `#FFF !important`,
          ".item-dropdown-bg": {
            bg: `#FFF !important`,
            ".item-dropdown-bg-item": {
              color: (t) => `${t.colors.black} !important`,
              opacity: 0.7,
              "&:hover": {
                opacity: 1,
              },
            },
          },
        },
      },
      ".login": {
        color: (t) => `${t.colors.blue} !important`,
        path: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
        line: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
      },
      ".BigLogo": {
        bg: "transparent",
      },
      ".logo": {
        bg: "transparent",
        path: { fill: (t) => `${t.colors.black} !important` },
      },
      ".hamburger": {
        span: {
          bg: (t) => `${t.colors.black} !important`,
        },
      },
    },

    white: {
      bg: "#FFF",
      color: "black",
      ".main": {
        a: {
          color: "black !important",
        },
        path: {
          stroke: "black !important",
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".current": {
          bg: "#F8F8F8 !important",
        },
      },
      ".item": {
        color: (t) => `${t.colors.black} !important`,
        ".item-dropdown": {
          bg: `#FFF !important`,
          ".item-dropdown-bg": {
            bg: (t) => `rgba(248, 248, 248, 0.5) !important`,
            ".item-dropdown-bg-item": {
              color: (t) => `${t.colors.black} !important`,
              opacity: 0.7,
              "&:hover": {
                opacity: 1,
              },
            },
          },
        },
      },
      ".login": {
        color: (t) => `${t.colors.blue} !important`,
        path: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
        line: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
      },
      ".logo": {
        bg: "transparent",
        path: { fill: (t) => `${t.colors.black} !important` },
      },
      ".BigLogo": {
        bg: "transparent !important",
      },
      ".hamburger": {
        span: {
          bg: (t) => `${t.colors.black} !important`,
        },
      },
    },
    lightTurquoise: {
      bg: "lightTurquoise",
      color: "black",
      ".main": {
        a: {
          color: "black !important",
        },
        path: {
          stroke: "black !important",
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".current": {
          bg: "#FFF !important",
        },
      },
      ".item": {
        color: (t) => `${t.colors.black} !important`,
        ".item-dropdown": {
          bg: (t) => `${t.colors.lightTurquoise} !important`,
          ".item-dropdown-bg": {
            bg: `rgba(255, 255, 255, 0.5) !important`,
            ".item-dropdown-bg-item": {
              color: (t) => `${t.colors.black} !important`,
              opacity: 0.7,
              "&:hover": {
                opacity: 1,
              },
            },
          },
        },
      },
      ".login": {
        color: (t) => `${t.colors.blue} !important`,
        path: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
        line: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
      },
      ".logo": {
        bg: "transparent",
        path: { fill: (t) => `${t.colors.black} !important` },
      },
      ".BigLogo": {
        bg: "transparent !important",
      },
      ".hamburger": {
        span: {
          bg: (t) => `${t.colors.black} !important`,
        },
      },
      ".demobtn": {
        "&:hover": {
          ".demobtn-text": {
            fontFamily: "medium",
          },
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bg: (t) => `${t.colors.blue} !important`,
        borderRadius: "200px",
        cursor: "pointer",
        height: "40px",
        width: "165px",
        ".demobtn-text": {
          color: (t) => `${t.colors.white} !important`,
          fontSize: "14px",
          fontFamily: "body",
        },
      },
    },
    yellow: {
      bg: "yellow",
      color: "black",
      ".main": {
        a: {
          color: "black !important",
        },
        path: {
          stroke: "black !important",
        },
      },
      ".sub": {
        ".subitem": {
          color: (t) => `${t.colors.black} !important`,
        },
        ".current": {
          bg: "rgba(0,0,0,0.05)",
        },
      },
      ".item": {
        color: (t) => `${t.colors.black} !important`,
        ".item-dropdown": {
          bg: (t) => `${t.colors.yellow} !important`,
          ".item-dropdown-item": {
            color: (t) => `${t.colors.black} !important`,
            opacity: 0.5,
            "&:hover": {
              opacity: 1,
            },
          },
        },
      },
      ".login": {
        color: (t) => `${t.colors.blue} !important`,
        path: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
        line: {
          stroke: (t) => `${t.colors.blue} !important`,
        },
      },
      ".logo": {
        bg: "transparent",
        path: { fill: (t) => `${t.colors.black} !important` },
      },
      ".BigLogo": {
        bg: "transparent !important",
      },
      ".hamburger": {
        span: {
          bg: (t) => `${t.colors.black} !important`,
        },
      },
    },
  },
};
