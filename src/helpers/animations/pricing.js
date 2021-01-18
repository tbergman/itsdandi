export const Header__scaleUp = {
  initial: (isDesktop) => ({
    scale: 0,
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
