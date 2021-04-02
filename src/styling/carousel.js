export const carousel = {
  position: "relative",
  height: ["350px"],
  overflow: "hidden",
  width: ["100%"],
  flexFlow: ["column wrap"],
  ".SharedCarousel__item": {
    position: "relative",
    mb: [2],

    ".SharedCarousel__item-header-progressBar": {
      position: "absolute",
      left: 0,
      top: "-5px",
      minHeight: "32px",
      height: "80%",
      width: "2px",
      borderRadius: "6px",
      bg: "rgba(242, 242, 242, 0.24)",
      ".SharedCarousel__item-header-progressBar-animation": {
        width: "100%",
        height: "0",
        borderRadius: "6px",

        transformOrigin: "top center",
      },
    },

    ".SharedCarousel__item-header": {
      position: "relative",
      cursor: "pointer",
      pl: [2],
      ".SharedCarousel__item-header-text": {
        fontSize: ["16px"],
        lineHeight: "18.8px",
      },
    },

    ".SharedCarousel__item-body": {
      mt: [2],
      ml: [2],
      height: 0, // initial
      overflow: "hidden",
      ".SharedCarousel__item-body-text": {
        fontSize: ["16px"],
        lineHeight: ["24px"],
      },
      ".SharedCarousel__item-body-link": {
        mt: [2],
        p: {},
      },
    },
  },
};
