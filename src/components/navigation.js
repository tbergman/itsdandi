/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BigLogo from "./home/bigLogo";
import { columnWidths } from "../helpers/utils";

const Navigation = ({
  current,
  navBarStyling,
  staticLogo,
  setStaticLogo,
  width,
}) => {
  const widths = columnWidths(width);

  const loginMotion = {
    rest: {
      x: 0,
    },
    hover: {
      x: 0,
    },
  };

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
            <BigLogo
              navBarStyling={navBarStyling}
              staticLogo={staticLogo}
              setStaticLogo={setStaticLogo}
              scaleTo={32 / widths.desktop}
              yOffset={-widths.desktop + 35}
            />
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
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={loginMotion}
            className="login"
          >
            <motion.div className="text">Log in</motion.div>
            <motion.div variants={arrowMotion} className="arrow">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3.00464L14 8.00464L9 13.0046"
                  stroke={"#335AFF"}
                  strokeWidth="1.6"
                />
                <line
                  x1="14"
                  y1="8.00425"
                  x2="1"
                  y2="8.00425"
                  stroke={"#335AFF"}
                  strokeWidth="1.8"
                />
              </svg>
            </motion.div>
          </motion.div>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
