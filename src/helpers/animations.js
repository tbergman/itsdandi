export const globalSlideUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0 + i * 0.1,
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
      delay: 0.45,
    },
  },
  exit: {
    x: -1000,
    opacity: 0,
  },
};

export const quotesCarousel = {
  enter: (settings) => {
    return {
      x: settings.direction > 0 ? settings.width : settings.width * -1,
      opacity: 1,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.18, 1],
    },
  },
  exit: (settings) => {
    return {
      zIndex: 0,
      x: settings.direction < 0 ? settings.width : settings.width * -1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.18, 1],
      },
    };
  },
};

export const quotesCarouselText = {
  enter: {
    y: 10,

    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        ease: "easeOut",
        duration: 0.175,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      y: {
        ease: "easeIn",
        duration: 0.2,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

export const quotesCarouselTimerDesktop = {
  initial: {
    height: "0%",
  },
  animate: {
    height: "100%",
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const quotesCarouselTimerMobile = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const compensationLines = {
  initial: {
    pathLength: 0,
  },
  animate: (i) => ({
    pathLength: 1,
    transition: {
      duration: 3,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

export const compensationCircles = {
  initial: {
    scale: 0,
    zIndex: 10,
  },
  animate: (i) => ({
    scale: 1,
    zIndex: 10,
    transition: {
      delay: 3 + i * 0.2,
      duration: 0.3,
    },
  }),
};

export const personAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: i * 0.2,
    },
  }),
};

export const personImageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      // delay: i * 0.2,
    },
  }),
};
