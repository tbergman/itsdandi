/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { useMediaQuery } from "react-responsive";
import devices from "../helpers/devices";
import { findIndex, indexOf, min } from "ramda";

const SubMenu = ({ subPages, subMenuStyling }) => {
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [current, setCurrent] = useState(0);
  const [xPos, setXPos] = useState(null);

  const grid = [0, -50, -150, -220];

  const { scrollY } = useViewportScroll();
  const controls = useAnimation();
  const scrollYPos = useScrollPosition(60);

  console.log(xPos);

  useEffect(() => {
    controls.start({
      x: grid[current],
    });
  }, [current]);

  return (
    <div
      className="submenu"
      sx={{
        variant: "components.submenu",
      }}
    >
      {isDesktop ? (
        <div
          sx={{
            color: subMenuStyling.color,
          }}
          className="container"
        >
          {subPages.slice(0, subPages.length - 1).map((page, i) => (
            <Link href={page.url} key={i}>
              <motion.a
                style={{
                  opacity: page.current
                    ? 1
                    : useTransform(scrollY, [0, 200], [0.5, 0]),
                  x: page.current
                    ? 0
                    : useTransform(scrollY, [0, 100, 200], [0, 0, 50]),
                }}
                className={page.current ? "item current" : "item"}
              >
                {page.current && (
                  <motion.div
                    className={
                      scrollYPos >= 200 ? "hamburger folded" : "hamburger"
                    }
                  >
                    <motion.span
                      sx={{
                        bg: subMenuStyling.color,
                      }}
                      id="line1"
                    />
                    <motion.span
                      sx={{
                        bg: subMenuStyling.color,
                      }}
                      id="line2"
                    />
                  </motion.div>
                )}
                <Styled.p>{page.name}</Styled.p>
              </motion.a>
            </Link>
          ))}
        </div>
      ) : (
        <motion.div
          sx={{
            color: subMenuStyling.color,
          }}
          className="mobilecontainer"
        >
          {current > 0 && (
            <div
              onClick={() => (current > 0 ? setCurrent(current - 1) : null)}
              className="left"
            >
              <svg
                className="arrow"
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.51472 1.51472L10 10L18.4853 1.51472"
                  stroke="#F2F2F2"
                  stroke-opacity="0.95"
                  stroke-width="3"
                />
              </svg>
            </div>
          )}

          {current < grid.length - 1 && xPos > -100 && (
            <div
              onClick={() =>
                current < grid.length - 1 ? setCurrent(current + 1) : null
              }
              className="right"
            >
              <svg
                className="arrow"
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.51472 1.51472L10 10L18.4853 1.51472"
                  stroke="#F2F2F2"
                  stroke-opacity="0.95"
                  stroke-width="3"
                />
              </svg>
            </div>
          )}

          <motion.div
            animate={controls}
            drag="x"
            dragConstraints={{
              left: -220,
              right: 0,
            }}
            dragElastic={0.8}
            onDragEnd={(event, info) => {
              return setXPos(info.offset.x);
            }}
            // dragTransition={{
            //   power: 0.5,
            //   timeConstant: 100,
            //   modifyTarget: (target) => {
            //     const distances = grid.map((i) => Math.abs(target - i));
            //     const minDist = Math.min(...distances);
            //     return grid[distances.indexOf(minDist)];
            //   },
            // }}
            className="draggable"
          >
            {subPages.map((page, i) => (
              <Link href={page.url} key={i}>
                <motion.a className={page.current ? "item current" : "item"}>
                  <Styled.p>{page.name}</Styled.p>
                </motion.a>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SubMenu;
