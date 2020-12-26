/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { motion } from "framer-motion";

const SubNavigation = ({ next, prev }) => {
  const arrowMotion = {
    rest: {
      x: 0,
    },
    hover: {
      x: 10,

      transition: {
        type: "spring",
        stiffness: 250,
        duration: 0.3,
      },
    },
  };
  const arrowMotionRotated = {
    rest: {
      x: 0,
    },
    hover: {
      x: -10,

      transition: {
        type: "spring",
        stiffness: 250,
        duration: 0.3,
      },
    },
  };
  return (
    <div
      sx={{
        variant: "pages.values.subnavigation",
      }}
    >
      {prev && (
        <div
          sx={{
            bg: prev ? prev.bg : "black",
          }}
          className="prev"
        >
          <Link href={prev.url}>
            <motion.a
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="link"
            >
              <motion.svg
                style={{
                  rotate: 180,
                  originX: "50%",
                  originY: "50%",
                }}
                variants={arrowMotionRotated}
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3.00464L14 8.00464L9 13.0046"
                  // stroke="#FFD93B"
                  stroke-width="1.6"
                />
                <line
                  x1="14"
                  y1="8.00425"
                  x2="1"
                  y2="8.00425"
                  stroke-width="1.8"
                />
              </motion.svg>
              <Styled.h3>
                Prev <br />
                {prev.name}
              </Styled.h3>
            </motion.a>
          </Link>
        </div>
      )}
      <motion.div
        sx={{
          bg: next ? next.bg : "black",
        }}
        className={prev ? "next" : "next full"}
      >
        <Link href={next.url}>
          <motion.a
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="link"
          >
            <motion.svg
              variants={arrowMotion}
              className="arrow"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.00464L14 8.00464L9 13.0046"
                // stroke="#FFD93B"
                stroke-width="1.6"
              />
              <line
                x1="14"
                y1="8.00425"
                x2="1"
                y2="8.00425"
                stroke-width="1.8"
              />
            </motion.svg>

            <Styled.h3>
              Next <br />
              {next.name}
            </Styled.h3>
          </motion.a>
        </Link>
      </motion.div>
    </div>
  );
};

export default SubNavigation;
