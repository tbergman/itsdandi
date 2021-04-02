export const mobilemenu = {
  position: "fixed",
  display: ["unset", "unset", "unset", "none"],
  pt: [11],
  pb: [15],
  bg: "black",
  height: "100vh",
  overflowY: "scroll",
  width: "100vw",
  zIndex: 999,
  ".navitems": {
    gridArea: ["1/1/2/-1"],
    ".item": {
      cursor: "pointer",
      mb: [2],

      ".wrapper": {
        ".main": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          a: {
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
            "&:visited": {
              outline: "none",
            },
          },
          ".arrow": {
            height: "100%",
            display: "flex",
            alignItems: "center",
            svg: {
              path: {
                strokeWidth: "3",
              },
            },
          },
        },

        ".sub": {
          display: "flex",
          flexFlow: "column",
          overflow: "hidden",

          width: "100vw",
          left: "-20px",
          position: "relative",

          ".subitem": {
            textDecoration: "none",
            position: "relative",
            pl: [4],
            py: [2],

            color: "white",
            cursor: "pointer",
            "&:visited": {
              outline: "none",
            },
            "&:hover": {
              bg: ["none"],
            },
          },
        },
      },
    },
  },
};
