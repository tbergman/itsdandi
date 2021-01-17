export const TopContentLines = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const TopContentCircles = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 1.5,
    },
  },
};

export const InsightsCircle__parent = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

export const InsightsCircle__fadeIn = {
  initial: {
    opacity: 0.2,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
