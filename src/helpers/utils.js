import React from "react";

export const rootMargin = (desktop, windowHeight) => {
  return desktop
    ? `-94px 0px -${windowHeight - 94}px 0px`
    : `-74px 0px -${windowHeight - 74}px 0px`;
};

export const rootMarginSub = (windowHeight) => {
  return `-200px 0px -${windowHeight - 200}px 0px`;
};

export const lineBreaks = (text) => {
  return text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
};

export const columnWidths = (width) => {
  return {
    desktop: (width - 40 * 13) / 12,
    mobile: (width - 20 * 7) / 6,
  };
};
