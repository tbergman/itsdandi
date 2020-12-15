export const subPages = ({ pages, currentIndex, nextBg, prevBg }) => {
  return {
    next:
      currentIndex < pages.length - 1
        ? { ...pages[currentIndex + 1], bg: nextBg }
        : { ...pages[0], bg: nextBg, goBack: true },
    prev: currentIndex >= 1 ? { ...pages[currentIndex - 1], bg: prevBg } : null,
    subPages: pages.map((page, i) => {
      if (i === currentIndex) {
        return {
          ...page,
          current: true,
        };
      }
      return {
        ...page,
      };
    }),
  };
};
