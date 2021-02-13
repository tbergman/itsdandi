/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useEffect, useRef } from "react";
import ProgressBar from "./progressbar";
import { useMachine } from "@xstate/react";
import { CarouselItemMachine } from "../machines/carousel";
import { gsap } from "gsap";

const CarouselItem = ({
  header,
  current,
  setCurrent,
  progressBarBg,
  idx,
  time,
  children,
}) => {
  const [state, send] = useMachine(CarouselItemMachine);
  const ref = useRef(null);
  const duration = 2;
  const delay = 0.3;

  // onload
  useEffect(() => {
    gsap.set(ref.current, {
      opacity: 0,
    });

    send({
      type: "TOGGLE",
      payload: {
        current,
      },
    });
  }, [current]);

  // state updates
  useEffect(() => {
    if (state.matches("active")) {
      const tl = gsap
        .timeline()
        .to(ref.current, {
          height: "auto",
          duration: 0.25,
          opacity: 0,
        })
        .to(ref.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
    } else if (state.matches("inactive")) {
      const tl = gsap.timeline().to(ref.current, {
        height: 0,
        duration: 0.25,
        opacity: 0,
      });
    }
  }, [state]);

  return (
    <div onClick={() => setCurrent(idx)} className="SharedCarousel__item">
      <ProgressBar
        current={current}
        progressBarBg={progressBarBg}
        animationSettings={{
          duration,
          delay,
          time,
        }}
      />
      <div layout className="SharedCarousel__item-header">
        <Styled.p
          className="SharedCarousel__item-header-text"
          sx={{
            color: current
              ? "rgba(242, 242, 242, 1)"
              : "rgba(242, 242, 242, 0.35)",
            "&:hover": {
              color: "rgba(242, 242, 242, 1)",
              transition: "color 75ms linear",
            },
            transition: "color 75ms linear",
          }}
        >
          {header}
        </Styled.p>
      </div>
      <div ref={ref} className="SharedCarousel__item-body">
        {children}
      </div>
    </div>
  );
};

export default CarouselItem;
