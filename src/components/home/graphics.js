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
      <motion.div className="barWrapper">
        <motion.div id="bar1">
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: "100%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="top"
          ></motion.div>
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: "40%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="bottom"
          ></motion.div>
        </motion.div>
        <motion.div id="bar2">
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: "61%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="top"
          ></motion.div>
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: "40%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="bottom"
          ></motion.div>
        </motion.div>
        <motion.div id="bar3">
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{
              height: "40%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="bottom"
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Graphics;
