export const TopContentLines = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: .5,
      delay: 0.25,
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
      duration: 0.25,
      delay: .75,
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
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
