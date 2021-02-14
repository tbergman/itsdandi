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
        <Link href="/">
          <a className="item">
            <div
              sx={{
                opacity: current === "home" ? 0.95 : 0.5,
              }}
            >
              Home
            </div>
          </a>
        </Link>
        <Link href="/values/equitypay">
          <a className="item">
            <div
              sx={{
                opacity: current === "values" ? 0.95 : 0.5,
              }}
            >
              Why Dandi?
            </div>
            Z
          </a>
        </Link>
        <Link href="/product/measure">
          <a className="item">
            <div
              sx={{
                opacity: current === "product" ? 0.95 : 0.5,
              }}
            >
              Product
            </div>
          </a>
        </Link>
        <Link href="/pricing">
          <a className="item">
            <div
              sx={{
                opacity: current === "pricing" ? 0.95 : 0.5,
              }}
            >
              Pricing
            </div>
          </a>
        </Link>
        <Link href="/community/board">
          <a className="item">
            <div
              sx={{
                opacity: current === "community" ? 0.95 : 0.5,
              }}
            >
              Community
            </div>
          </a>
        </Link>

        <a href="www.google.com" target="_blank" className="item">
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
        <DemoBtn variant={"yellow"} demoButtonStatic={demoButtonStatic} />
      </div>
    </motion.nav>
  );
};

export default Navigation;
