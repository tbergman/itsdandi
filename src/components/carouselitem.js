/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion, useAnimation, animationControls } from "framer-motion";
import { useEffect } from "react";
import ProgressBar from "./progressbar";

const CarouselItem = ({
  header,
  current,
  setCurrent,
  progressBarBg,
  idx,
  time,
  children,
}) => {
  const animationControls = useAnimation();
  const duration = 2;
  const delay = 0.3;

  useEffect(() => {
    if (current) {
      animationControls.start({
        opacity: [0, 0, 1],
        maxHeight: [0, 1000, 1000],
        transition: {
          duration: duration,
          ease: "easeInOut",
          times: [0, 0.25, 0.2],
          delay: delay,
        },
      });
    } else {
      animationControls.start({
        opacity: [1, 0, 0],
        maxHeight: [1000, 1000, 0],
        transition: {
          duration: duration,
          ease: "easeInOut",
          times: [0, 0.1, 0.25],
        },
      });
    }
  }, [current]);

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
      <motion.div layout className="SharedCarousel__item-header">
        <Styled.p
          className="SharedCarousel__item-header-text"
          sx={{
            color: current
              ? "rgba(242, 242, 242, 1)"
              : "rgba(242, 242, 242, 0.35)",
            "&:hover": {
              color: "rgba(242, 242, 242, 1)",
              transition: "color 100ms linear",
            },
            transition: "color 100ms linear",
          }}
        >
          {header}
        </Styled.p>
      </motion.div>
      <motion.div
        animate={animationControls}
        className="SharedCarousel__item-body"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CarouselItem;
