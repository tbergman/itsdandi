/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ProgressBar = ({ current, progressBarBg, animationSettings }) => {
  const { delay, time, duration } = animationSettings;
  const animationControls = useAnimation();

  useEffect(() => {
    if (current) {
      animationControls.start({
        height: "100%",
        transition: {
          duration: time / 1000,
          ease: "linear",
        },
      });
    } else {
      animationControls.start({
        height: 0,
        transition: {
          duration: 0,
        },
      });
    }
  }, [current]);

  return (
    <motion.div className={"SharedCarousel__item-header-progressBar"}>
      <motion.div
        sx={{
          bg: progressBarBg,
        }}
        initial={{
          height: 0,
        }}
        animate={animationControls}
        className={"SharedCarousel__item-header-progressBar-animation"}
      ></motion.div>
    </motion.div>
  );
};

export default ProgressBar;
