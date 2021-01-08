/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion, useAnimation, animationControls } from "framer-motion";
import { useEffect } from "react";

const CarouselItem = ({
  header,
  current,
  setCurrent,
  progressBarBg,
  idx,
  children,
}) => {
  const animationControls = useAnimation();

  useEffect(() => {
    if (current) {
      animationControls.start({
        opacity: [0, 0, 1],
        maxHeight: [0, 1000, 1000],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.25, 1],
          delay: 0.8,
        },
      });
    } else {
      animationControls.start({
        opacity: [1, 0, 0],
        maxHeight: [1000, 1000, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5],
        },
      });
    }
  }, [current]);

  return (
    <div onClick={() => setCurrent(idx)} className="SharedCarousel__item">
      <motion.div
        sx={{
          color: current
            ? "rgba(242, 242, 242, 1)"
            : "rgba(242, 242, 242, 0.35)",
          left: current ? 0 : "3px",
        }}
        className={
          current
            ? "SharedCarousel__item-header-progressBar active"
            : "SharedCarousel__item-header-progressBar"
        }
      >
        <motion.div
          sx={{
            bg: progressBarBg,
          }}
          className={
            current
              ? "SharedCarousel__item-header-progressBar-animation active"
              : "SharedCarousel__item-header-progressBar-animation"
          }
        ></motion.div>
      </motion.div>
      <motion.div layout className="SharedCarousel__item-header">
        <Styled.p
          className="SharedCarousel__item-header-text"
          sx={{
            color: current
              ? "rgba(242, 242, 242, 1)"
              : "rgba(242, 242, 242, 0.35)",
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
