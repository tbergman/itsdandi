/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useEffect } from "react";
import useScrollPosition from "@react-hook/window-scroll";

const SubMenu = ({ subPages, navBarStyling }) => {
  const { scrollY } = useViewportScroll();
  const animation = useAnimation();
  const scrollYPos = useScrollPosition(60);

  return (
    <div
      sx={{
        variant: "components.submenu",
      }}
    >
      <div
        sx={{
          color: navBarStyling.color,
        }}
        className="container"
      >
        {subPages.map((page, i) => (
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
                  <motion.span id="line1" />
                  <motion.span id="line2" />
                </motion.div>
              )}
              <Styled.p>{page.name}</Styled.p>
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;
