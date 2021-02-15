/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Graphics = () => {
  const lineMotion = {
    start: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      sx={{
        variant: "pages.home.top.bars",
      }}
      className="Bars"
    >
      <motion.div className="Bars__barWrapper">
        <motion.div className="Bars__barWrapper-bar1">
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
            className="Bars__barWrapper-bar1-top"
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
            className="Bars__barWrapper-bar1-bottom"
          ></motion.div>
        </motion.div>
        <motion.div className="Bars__barWrapper-bar2">
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
            className="Bars__barWrapper-bar2-top"
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
            className="Bars__barWrapper-bar2-bottom"
          ></motion.div>
        </motion.div>
        <motion.div className="Bars__barWrapper-bar3">
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
            className="Bars__barWrapper-bar3-bottom"
          ></motion.div>
        </motion.div>
        <motion.div className="Bars__barWrapper-line">
          <motion.svg
            width="811"
            height="308"
            viewBox="0 0 200 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              style={{
                stroke: "white",
                strokeWidth: 1,
              }}
              initial="start"
              animate="animate"
              variants={lineMotion}
              d={`M-50 75 H80`}

              //C100 75  160 75 195 0
            />

            <motion.circle
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                type: "spring",
                stiffness: 175,
              }}
              cx="98"
              cy="0"
              r="2"
              fill="white"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Graphics;
