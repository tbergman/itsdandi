/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import useScrollPosition from "@react-hook/window-scroll";
import Link from "next/link";
import { useMachine } from "@xstate/react";
import { SubMenuDesktopMachine } from "../../machines/submenu";
import { useEffect } from "react";

const SubMenuDesktop = ({ subPages, subMenuStyling }) => {
  const { scrollY } = useViewportScroll();
  const scrollYPos = useScrollPosition(60);
  const [current, send] = useMachine(SubMenuDesktopMachine);

  useEffect(() => {
    if (scrollYPos >= 200) {
      send("CLOSE");
    } else {
      send("OPEN");
    }
  }, [scrollYPos]);

  return (
    <div
      className="SubMenu"
      sx={{
        variant: "components.submenu.desktop",
      }}
    >
      <div
        className="SubMenu__container"
        sx={{
          color: subMenuStyling.color,
        }}
      >
        {subPages.slice(0, subPages.length - 1).map((page, i) => (
          <Link href={page.url} key={i}>
            <motion.a
              //   style={{
              //     opacity: page.current
              //       ? 1
              //       : useTransform(scrollY, [0, 200], [0.5, 0]),
              //     x: page.current
              //       ? 0
              //       : useTransform(scrollY, [0, 100, 200], [0, 0, 50]),
              //   }}
              className={`SubMenu__container-item${
                scrollYPos >= 100 && !page.current ? "-hidden" : ""
              } ${page.current ? "current" : ""}`}
            >
              {page.current && (
                <motion.div
                  className={
                    current.matches("closed")
                      ? "SubMenu__container-item-hamburger folded"
                      : "SubMenu__container-item-hamburger"
                  }
                >
                  <motion.span
                    sx={{
                      bg: subMenuStyling.color,
                    }}
                    className="SubMenu__container-item-hamburger-line1"
                  />
                  <motion.span
                    sx={{
                      bg: subMenuStyling.color,
                    }}
                    className="SubMenu__container-item-hamburger-line2"
                  />
                </motion.div>
              )}
              <Styled.p className="SubMenu__container-item-text">
                {page.name}
              </Styled.p>
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenuDesktop;
