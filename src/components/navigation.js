/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, animationControls } from "framer-motion";
import BigLogo from "./home/bigLogo";
import { columnWidths } from "../helpers/utils";
import useScrollPosition from "@react-hook/window-scroll";
import { useEffect } from "react";
import DemoBtn from "./navigation/demobtn";
import NavItem from "./navigation/navitem";
import { navItems } from "../helpers/navigation";

const Navigation = ({
  current,
  navBarStyling,
  staticLogo,
  setStaticLogo,
  isDesktop,
  isServer,
  width,
  demoButtonStatic,
}) => {
  const widths = columnWidths(width);

  return (
    <motion.nav
      sx={{
        variant: "components.navigation",
        ...navBarStyling,
        transition: "all 100ms cubic-bezier(.01,.66,.83,.67)",
      }}
      className="Navigation"
    >
      <div className="logoWrapper">
        <Link href="/">
          <a className="logo">
            {!isServer && (
              <BigLogo
                navBarStyling={navBarStyling}
                staticLogo={staticLogo}
                setStaticLogo={setStaticLogo}
                scaleTo={32 / widths.desktop}
                yOffset={-widths.desktop + 35}
                width={width}
              />
            )}
          </a>
        </Link>
      </div>

      <div className="links">
        {navItems.map((item, i) => (
          <NavItem
            url={item.url}
            active={current === item.type}
            sub={item.sub}
            body={item.title}
            key={i}
          />
        ))}

        <div className="item">
          <a href="www.google.com" target="_blank" className="item-link">
            <div>
              <div
                sx={{
                  opacity: 0.5,
                }}
                className="text"
              >
                Log in
              </div>
            </div>
          </a>
        </div>

        <DemoBtn variant={"yellow"} demoButtonStatic={demoButtonStatic} />
      </div>
    </motion.nav>
  );
};

export default Navigation;
