/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion, useAnimation } from "framer-motion";

const ProgressBar = ({ current, progressBarBg }) => {
  return (
    <motion.div
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
  );
};

export default ProgressBar;
