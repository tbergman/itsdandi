/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Graphics = () => {
  return (
    <div
      sx={{
        variant: "pages.home.top.bars",
      }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          staggerChildren: 10,
        }}
        className="barWrapper"
      >
        <motion.span
          // initial={{
          //   top: "250px",
          //   height: "0",
          // }}
          // animate={{
          //   top: 0,
          //   height: "250px",
          // }}
          // transition={{
          //   duration: 0.5,
          // }}
          id="bar1"
        ></motion.span>
        <motion.span
          // initial={{
          //   top: "250px",
          //   height: "0",
          // }}
          // animate={{
          //   top: "97px",
          //   height: "153px",
          // }}
          // transition={{
          //   duration: 0.5,
          // }}
          id="bar2"
        ></motion.span>
        <motion.span
          // initial={{
          //   top: "250px",
          //   height: "0",
          // }}
          // animate={{
          //   top: "175px",
          //   height: "75px",
          // }}
          // transition={{
          //   duration: 0.5,
          // }}
          id="bar3"
        ></motion.span>
      </motion.div>
    </div>
  );
};

export default Graphics;
