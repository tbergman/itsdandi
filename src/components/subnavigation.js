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
        type: "tween",
        ease: "easeOut",
        duration: 0.175,
      },
    },
  };
  const arrowMotionRotated = {
    rest: {
      x: 0,
      rotate: 180,
      originX: "50%",
      originY: "50%",
    },
    rotated: {
      rotate: 180,
      x: 0,
    },
    hover: {
      x: -10,

      transition: {
        type: "ease",
        duration: 0.175,
      },
    },
  };
  return (
    <div
      sx={{
        variant: "components.subnavigation",
      }}
      className="SubNavigation"
    >
      {prev && (
        <div
          sx={{
            bg: prev ? prev.bg : "black",
          }}
          className="SubNavigation__prev"
        >
          <Link href={prev.url}>
            <motion.a
              initial="rest"
              whileHover="hover"
              animate="rotated"
              className="SubNavigation__link"
            >
              <motion.div
                sx={{
                  ml: [
                    0,
                    0,
                    0,
                    (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
                    (t) => `calc(${t.desktopBigGutters} )`,
                    (t) => `calc(${t.desktopMassiveGutters} )`,
                  ],
                }}
                className="SubNavigation__link-content"
              >
                <motion.svg
                  className="SubNavigation__link-content-arrow"
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
                    strokeWidth="1.6"
                  />
                  <line
                    x1="14"
                    y1="8.00425"
                    x2="1"
                    y2="8.00425"
                    strokeWidth="1.8"
                  />
                </motion.svg>
                <Styled.h3 className="SubNavigation__link-content-text">
                  {prev.name}
                </Styled.h3>
              </motion.div>
            </motion.a>
          </Link>
        </div>
      )}
      <motion.div
        sx={{
          bg: next ? next.bg : "black",
        }}
        className={prev ? "SubNavigation__next" : "SubNavigation__next full"}
      >
        <Link href={next.url}>
          <motion.a
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={"SubNavigation__link"}
          >
            <motion.div
              sx={{
                ml: prev
                  ? [
                      0,
                      ,
                      0,
                      0,
                      (t) => `calc(calc(${t.colWidthDesktop} * 2) + 120px)`,
                      (t) => `calc(${t.desktopBigGutters})`,
                      (t) => `calc(${t.desktopMassiveGutters})`,
                    ]
                  : [
                      0,
                      0,
                      0,
                      (t) =>
                        `calc(calc(calc(${t.colWidthDesktop} * 2) + 120px) + 50vw)`,
                      (t) => `calc(${t.desktopBigGutters}) + 50vw)`,
                      (t) => `calc(${t.desktopMassiveGutters}) + 50vw)`,
                    ],
              }}
              className={"SubNavigation__link-content"}
            >
              <motion.svg
                variants={arrowMotion}
                className="SubNavigation__link-content-arrow"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 3.00464L14 8.00464L9 13.0046" strokeWidth="1.6" />
                <line
                  x1="14"
                  y1="8.00425"
                  x2="1"
                  y2="8.00425"
                  strokeWidth="1.8"
                />
              </motion.svg>
              <Styled.h3 className="SubNavigation__link-content-text">
                {next.name}
              </Styled.h3>
            </motion.div>
          </motion.a>
        </Link>
      </motion.div>
    </div>
  );
};

export default SubNavigation;
