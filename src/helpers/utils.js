export const rootMargin = (desktop, windowHeight) => {
  return desktop
    ? `0px 0px -${windowHeight - 94}px 0px`
    : `0px 0px -${windowHeight - 74}px 0px`;
};
