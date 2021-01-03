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
  const shouldClose = scrollYPos >= 200;

  useEffect(() => {
    if (shouldClose) {
      send("CLOSE");
    } else {
      send("OPEN");
    }
  }, [shouldClose]);

  return (
    <div
      className="SubMenu"
      sx={{
        variant: "components.submenu.desktop",
      }}
    >
      <div
        onMouseEnter={() => (current.matches("closed") ? send("OPEN") : null)}
        onMouseLeave={() =>
          current.matches("opened") && shouldClose ? send("CLOSE") : null
        }
        className={`SubMenu__container ${
          current.matches("closed") ? "closed" : ""
        }`}
        sx={{
          color: subMenuStyling.color,
        }}
      >
        {subPages.slice(0, subPages.length - 1).map((page, i) => (
          <Link href={page.url} key={i}>
            <motion.a
              className={`SubMenu__container-item${
                current.matches("closed") && !page.current ? "-hidden" : ""
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
