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

const SubMenu = ({ subPages, subMenuStyling }) => {
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });

  const { scrollY } = useViewportScroll();
  const animation = useAnimation();
  const scrollYPos = useScrollPosition(60);

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
        <div
          sx={{
            color: subMenuStyling.color,
          }}
          className="container"
        >
          <div className="arrow left">
            <svg
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
          <div className="arrow right">
            <svg
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
          {subPages.map((page, i) => (
            <Link href={page.url} key={i}>
              <motion.a className={page.current ? "item current" : "item"}>
                <Styled.p>{page.name}</Styled.p>
              </motion.a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
