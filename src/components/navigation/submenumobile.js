/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const SubMenuMobile = ({ subPages, subMenuStyling }) => {
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);
  const [xPos, setXPos] = useState(null);

  const grid = [0, -50, -150, -220];

  useEffect(() => {
    controls.start({
      x: grid[current],
    });
  }, [current]);
  return (
    <div
      className="SubMenu"
      sx={{
        variant: "components.submenu.mobile",
      }}
    >
      <motion.div
        sx={{
          color: subMenuStyling.color,
        }}
        className="SubMenu__mobileContainer"
      >
        {current > 0 && (
          <div
            onClick={() => (current > 0 ? setCurrent(current - 1) : null)}
            className="SubMenu__mobileContainer-left"
          >
            <svg
              className="SubMenu__mobileContainer-arrow"
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
            className="SubMenu__mobileContainer-right"
          >
            <svg
              className="SubMenu__mobileContainer-arrow"
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
          className="SubMenu__mobileContainer-draggable"
        >
          {subPages.map((page, i) => (
            <Link href={page.url} key={i}>
              <motion.a
                className={
                  page.current
                    ? "SubMenu__mobileContainer-draggable-item current"
                    : "SubMenu__mobileContainer-draggable-item"
                }
              >
                <Styled.p className="SubMenu__mobileContainer-draggable-text">
                  {page.name}
                </Styled.p>
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SubMenuMobile;
