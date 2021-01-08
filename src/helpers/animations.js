export const globalSlideUp = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4 + i * 0.3,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

export const imageCarousel = {
  enter: {
    opacity: 0,
    x: 1000,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
  exit: {
    x: -1000,
    opacity: 0,
  },
};
