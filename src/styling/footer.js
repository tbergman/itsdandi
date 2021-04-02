export const footer = {
  bg: "#1F1F21",
  ".header": {
    mt: [10, 10, 10, 11],
    gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/1/2/4"],
    h2: {
      fontFamily: "display",
      fontWeight: "500",
      fontSize: "28px",
      lineHeight: "32px",
    },
    p: {
      mt: ["20px", "20px", "20px", 4],
      mb: ["20px"],
      fontFamily: "body",
      fontWeight: "400",
    },
  },
  ".Form": {
    mt: [0, 0, 0, 11],
    position: "relative",
    top: [0, 0, 0, "-12px"],
    gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/7/3/-1"],
    display: "flex",
    flexFlow: ["column wrap", "column wrap", "column wrap", "row wrap"],

    ".Form__inputWrapper": {
      ".Form__inputWrapper-error": {
        fontSize: "14px",
        pl: [3],
        mt: [1],
      },
      input: {
        mb: 0,
        caretColor: "yellow",
        "&:focus": {
          bg: "#3A3A3D",
          border: "none",
        },
        "&:hover": {
          cursor: ["auto", "auto", "auto", "pointer"],
        },
      },
      "input:-webkit-autofill, input:-webkit-autofill:hover, select:-webkit-autofill, select:-webkit-autofill:hover": {
        boxShadow: "0 0  0px 1000px #262629 inset",
        WebkitTextFillColor: "rgb(242,242,242)",
        border: "solid 8px #262629",
        px: [2],
        py: [1],
      },
      "input:-webkit-autofill::first-line": {
        fontSize: "18px",
        fontFamily: "body",
      },
    },

    ".Form__inputWrapper:nth-child(odd)": {
      flex: [1, 1, 1, "1 40%"],
      mr: [0, 0, 0, "6px"],
      mt: ["12px"],
      mb: 0,
    },
    ".Form__inputWrapper:nth-child(even)": {
      flex: [1, 1, 1, "1 40%"],
      ml: [0, 0, 0, "6px"],
      mt: ["12px"],
      mb: 0,
    },

    ".Form__dropdownWrapper": {
      flex: [1, 1, 1, "1 100%"],
      position: "relative",
      height: ["64px"],
      borderRadius: "8px",
      bg: "#262629",
      mt: ["12px"],

      ".Form__dropdownWrapper-error": {
        pl: [3],
        mt: [1],
        fontSize: "14px",
      },

      ".Form__dropdownWrapper-arrow": {
        position: "absolute",
        right: [2],
        top: "50%",
        transform: "translateY(-50%)",
      },

      ".Form__dropdownWrapper-dropdown": {
        appearance: "none",
        m: 0,
        width: "100%",
        maxWidth: "100%",
        display: "block",
        color: "rgba(242, 242, 242, 0.24)",
        px: [3],
        bg: "transparent",
        height: "100%",
        fontSize: ["18px"],
        lineHeight: ["26px"],
        fontFamily: "body",
        fontWeight: "400",
        border: "none",
        outline: "none",
        cursor: "pointer",

        ":focus": {
          outline: "none",
        },
        option: {
          width: "100%",
        },
      },
    },
    ".Form__button": {
      mt: [3, 3, 3, 5],
      flex: [1, 1, 1, "1 100%"],
      display: "flex",
      justifyContent: ["flex-start", "flex-start", "flex-start", "flex-end"],
      button: {
        "&:focus": {
          outline: "none",
        },
      },
    },
  },
  ".socials": {
    gridArea: ["3/1/4/-1", "3/1/4/-1", "3/1/4/-1", "2/4/3/6"],
    mt: [6, 6, 6, 0],
    display: "flex",
    alignItems: "center",

    ".item": {
      mr: [2],
      cursor: "pointer",
      height: "30px",
      width: "30px",

      div: {
        height: "inherit",
        width: "inherit",
        div: {
          height: "inherit",
          width: "inherit",
          svg: {
            width: "100%",
            height: "100%",
            path: {
              fill: "white",
            },
            "&:hover": {
              path: {
                fill: "rgba(242,242,242,.7)",
              },
            },
          },
        },
      },
    },
  },
  ".newsletter": {
    gridArea: ["4/1/5/-1", "4/1/5/-1", "4/1/5/-1", "3/4/4/7"],
    mt: ["33px", "33px", "33px", 0],
    mb: ["44px", "44px", "44px", 6],
    a: {
      mb: 0,
    },
    p: {
      fontSize: ["13px"],
      fontFamily: "medium",
    },
  },
  ".logo": {
    gridArea: ["5/1/6/-1", "5/1/6/-1", "5/1/6/-1", "2/1/3/3"],
    display: "flex",
    alignItems: "center",
  },
  ".copyright": {
    gridArea: ["6/1/7/-1", "6/1/7/-1", "6/1/7/-1", "3/1/4/4"],
    mt: [1, 1, 1, 0],
    mb: [4, 4, 4, 0],
    p: {
      fontSize: ["13px"],
      fontFamily: "medium",
      color: "#909095",
    },
  },
};
