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
        {/* <motion.div id="line">
          <svg
            width="811"
            height="308"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M794.718 15.9678 C794.718 15.9678 645.528 307 248.574 307H0"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M794.72 31.2483C803.16 31.2483 810.001 24.4068 810.001 15.9674C810.001 7.528 803.16 0.686523 794.72 0.686523C786.281 0.686523 779.439 7.528 779.439 15.9674C779.439 24.4068 786.281 31.2483 794.72 31.2483Z"
              fill="white"
            />
          </svg>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Graphics;
