/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Graphics = () => {
  const lineMotion = {
    start: {
      pathLength: 0,
    },
    animate: {
      pathLength: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: "easeIn",
      },
    },
  };

  // const circleMotion = {
  //   start: {
  //     pathLength: 0,
  //   },
  //   animate: {
  //     pathLenth: 1,
  //     transition: {
  //       duration: 0.4,
  //       delay: 1,
  //       ease: "easeIn",
  //     },
  //   },
  // };

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
              duration: 1,
              delay: 0.2,
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
              duration: 1,
              delay: 0.2,
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
              duration: 1,
              delay: 0.2,
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
              duration: 1,
              delay: 0.2,
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
              duration: 1,
              delay: 0.2,
            }}
            className="bottom"
          ></motion.div>
        </motion.div>
        <motion.div id="line">
          <motion.svg
            initial="start"
            animate="animate"
            width="811"
            height="308"
            viewBox="0 0 811 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              style={{
                stroke: "white",
                strokeWidth: 2,
              }}
              variants={lineMotion}
              d={`M0 307 H0 C400 307  645 307 795 16`}
            />

            <motion.circle cx="795" cy="16" r="10" fill="white" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Graphics;
