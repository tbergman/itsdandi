export const Header__scaleUp = {
  initial: (isDesktop) => ({
    scale: .8,
    originX: isDesktop ? "50%" : "100%",
    originY: "100%",
  }),
  animate: (isDesktop) => ({
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  }),
};

export const Table__circle = {
  initial: {
    scale: 0,
  },
  animate: (i) => ({
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.25 * i,
    },
  }),
};

export const InfoBox__fadeIn = {
  initial: { opacity: 0, visibility: "hidden" },
  animate: {
    opacity: 1,
    visibility: "visible",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
