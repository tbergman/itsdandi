/** @jsx jsx */
import { useMachine } from "@xstate/react";
import { jsx } from "theme-ui";
import { useRef, useEffect, useState } from "react";
import Logo from "./logo";
import { gsap } from "gsap";

const CarouselRow = ({ logosRow, isServer, duration, width }) => {
  const containerRow = useRef(null);
  const rowWrapper = useRef(null);

  useEffect(() => {
    if (!isServer) {
      const wrapperBounds = rowWrapper.current.getBoundingClientRect();
      const containerBounds = containerRow.current.getBoundingClientRect();

      const elements = gsap.utils.toArray(
        containerRow.current.querySelectorAll(
          ".Partners__logoCarousel-rowWrapper-container-row-imageWrapper"
        )
      );
      const overflow = containerBounds.width - wrapperBounds.width;

      // const widest = elements.reduce((acc, curr) =>
      //   acc.offsetWidth > curr.offsetWidth ? acc : curr
      // ).offsetWidth;

      // start animations
      elements.map((el) => {
        const bounds = el.getBoundingClientRect();

        const tween = gsap.to(el, {
          duration,
          ease: "none",
          repeat: -1,
          x: -containerBounds.width,
          modifiers: {
            x: gsap.utils.unitize(
              gsap.utils.wrap(
                containerBounds.left - bounds.left - overflow / 2,
                containerBounds.right - bounds.left - overflow / 2
              ),
              "px"
            ),
          },
        });
      });
    }
  }, [isServer, width]);

  return (
    <div className="Partners__logoCarousel-rowWrapper" ref={rowWrapper}>
      <div className="Partners__logoCarousel-rowWrapper-container">
        <div
          ref={containerRow}
          className="Partners__logoCarousel-rowWrapper-container-row"
        >
          {logosRow.map((url, i) => (
            <Logo url={url} key={i} idx={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselRow;
