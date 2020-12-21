/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BigLogo from "./home/bigLogo";

const Navigation = ({ current, navBarStyling, staticLogo, setStaticLogo }) => {
  return (
    <motion.nav
      sx={{
        variant: "components.navigation",
        ...navBarStyling,
        transition: "all 100ms cubic-bezier(.01,.66,.83,.67)",
      }}
    >
      <div className="logowrapper">
        <Link href="/">
          <a className="logo">
            {/* <BigLogo
              navBarStyling={navBarStyling}
              staticLogo={staticLogo}
              setStaticLogo={setStaticLogo}
            /> */}
            <ReactSVG src="/assets/svgs/smile.svg" />
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
              Why Dandy?
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
          <div className="login">
            <div>Log in</div>
            <ReactSVG className="arrow" src="/assets/svgs/arrow.svg" />
          </div>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
