import React from "react";
import { gsap } from "gsap";

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
    desktop: Number(((width - 40 * 13) / 12).toFixed(1)),
    mobile: Number(((width - 20 * 7) / 6).toFixed(1)),
  };
};

export const isServer = () => typeof window === "undefined";

export const scrollToBottom = (window, isDesktop) => {
  if (isDesktop) {
    window.scrollTo({
      top: window.document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      // click on input field
      const nameField = window.document.getElementById("namefield");
      nameField.focus();
    }, 500);
  } else {
    // const scrollTarget = window.document
    //   .querySelector("#footerHeader")
    //   .getBoundingClientRect().y;
    const scrollTarget = window.document.body.scrollHeight - 1200;

    window.scrollTo({
      top: scrollTarget,
      left: 0,
      behavior: "smooth",
    });

    const nameField = window.document.getElementById("namefield");
    nameField.focus();
  }

  return;
};

export const pricingCalulation = (employees) => {
  if (employees <= 500) {
    return 6000;
  }

  const adjustedEmployees = employees - 500;

  return 6000 + adjustedEmployees * 12;
};

export const scrollYPos = (window) => {
  return Math.max(
    window.pageYOffset,
    window.document.documentElement.scrollTop,
    window.document.scrollingElement.scrollTop,
    window.document.body.scrollTop,
    window.scrollY
  );
};

export const createSnapGrid = ({ swiperWrapper, swiper }) => {
  let snapGrid = {
    startingOffset: 0,
    grid: [],
  };
  let currentPos = 0;
  const maxOffset =
    swiper.current.clientWidth - swiperWrapper.current.clientWidth;
  const elements = gsap.utils.toArray(
    swiper.current.querySelectorAll(".SubMenu__mobileContainer-draggable-item")
  );

  elements.forEach((val, key, arr) => {
    if (val.classList.contains("current")) {
      snapGrid.startingOffset =
        currentPos < maxOffset ? -currentPos : -maxOffset;
    }

    if (key === 0) {
      snapGrid.grid.push(0);
    } else {
      if (currentPos < maxOffset) {
        snapGrid.grid.push(-currentPos);
      }
    }
    currentPos += val.clientWidth;
  });

  snapGrid.grid.push(-maxOffset);

  return snapGrid;
};
