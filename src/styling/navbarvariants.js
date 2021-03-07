export const navBarVariants = {
  default: {
    // global
    bg: "black",
    color: "white",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.white} !important` },
      },
    },

    // desktop
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

    // ".login": {
    //   bg: "transparent",
    //   color: "yellow",
    //   path: {
    //     stroke: "yellow",
    //   },
    //   line: {
    //     stroke: "yellow",
    //   },
    // },
    ".logo": {
      bg: "transparent",
      path: {
        fill: "white",
      },
    },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.white} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {},
    },
  },
  violet: {
    // global
    bg: "violet",
    color: "black",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.black} !important` },
      },
    },

    // desktop
    ".demobtn": {
      "&:hover": {
        bg: "#5200FF !important",
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
    // ".login": {
    //   color: (t) => `${t.colors.blue} !important`,
    //   path: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    //   line: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    // },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.black} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {
        color: (t) => `${t.colors.blue} !important`,
      },
    },

    ".main": {
      a: {
        color: "black !important",
      },
      path: {
        stroke: "black !important",
      },
    },
  },
  gray: {
    // global
    bg: "#F8F8F8",
    color: "black",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.black} !important` },
      },
    },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.black} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {
        color: (t) => `${t.colors.blue} !important`,
      },
    },

    // desktop
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
    // ".login": {
    //   color: (t) => `${t.colors.blue} !important`,
    //   path: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    //   line: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    // },
  },
  gray2: {
    // global
    bg: "#FAFAFA",
    color: "black",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.black} !important` },
      },
    },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.black} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {
        color: (t) => `${t.colors.blue} !important`,
      },
    },

    //desktop
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
    // ".login": {
    //   color: (t) => `${t.colors.blue} !important`,
    //   path: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    //   line: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    // },
  },

  white: {
    // global
    bg: "#FFF",
    color: "black",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.black} !important` },
      },
    },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.black} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {
        color: (t) => `${t.colors.blue} !important`,
      },
    },

    //desktop
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
    // ".login": {
    //   color: (t) => `${t.colors.blue} !important`,
    //   path: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    //   line: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    // },
  },
  lightTurquoise: {
    // global
    bg: "lightTurquoise",
    color: "black",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.black} !important` },
      },
    },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.black} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {
        color: (t) => `${t.colors.blue} !important`,
      },
    },

    //desktop
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
    // ".login": {
    //   color: (t) => `${t.colors.blue} !important`,
    //   path: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    //   line: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    // },

    ".demobtn": {
      "&:hover": {
        bg: "#5200FF !important",
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
    // global
    bg: "yellow",
    color: "black",
    ".BigLogo": {
      bg: "transparent !important",
      ".BigLogo__logoSvg": {
        path: { fill: (t) => `${t.colors.black} !important` },
      },
    },

    // mobile
    ".MobileNav__container-wrapper-hamburger": {
      span: {
        bg: (t) => `${t.colors.black} !important`,
      },
    },
    ".MobileNav__container-wrapper-logo": {
      bg: "transparent",
    },
    ".MobileNav__container-wrapper-button": {
      ".mobileDemoBtn": {},
    },

    //desktop
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
    // ".login": {
    //   color: (t) => `${t.colors.blue} !important`,
    //   path: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    //   line: {
    //     stroke: (t) => `${t.colors.blue} !important`,
    //   },
    // },
  },
};
