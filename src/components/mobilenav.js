/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  motion,
  useViewportScroll,
  useTransform,
  transform,
} from "framer-motion";
import Link from "next/link";
import BigLogo from "../components/home/bigLogo";

const MobileNav = ({ menuOpen, setMenuOpen, navBarStyling, subPages }) => {
  const { scrollYProgress } = useViewportScroll();
  const opacityAnim = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1]);

  return (
    <div
      sx={{
        position: "fixed",
        zIndex: 1000,
        width: "100%",
        bg: "#FFF",
        height: "74px",
        width: "100%",
        display: ["unset", "none"],
      }}
    >
      <div
        sx={{
          height: "100%",
          width: "100%",
          ".wrapper": {
            display: ["flex", "none"],
            justifyContent: "space-between",

            ".hamburger": {
              cursor: "pointer",
              mr: "20px",
              mt: "33px",
              position: "relative",
              height: "21px",
              width: "25px",
              span: {
                position: "absolute",
                transition: "all 200ms ease-out",
                left: 0,
                p: 0,
                m: 0,
                height: "3px",
                width: "25px",
                bg: "white",
              },
            },
            ".logo": {
              svg: {
                path: {
                  fill: "white",
                },
              },
            },
          },
          ...navBarStyling,
          transition: "all 100ms cubic-bezier(.01,.66,.83,.67)",
        }}
      >
        <div className="wrapper">
          <Link href="/">
            <a
              sx={{
                mt: 3,
                ml: "20px",
              }}
              className="logo"
            >
              {/* <BigLogo navBarStyling={navBarStyling} menuOpen={menuOpen} /> */}

              <motion.svg
                style={{
                  opacity: 1,
                }}
                width="32"
                height="27"
                viewBox="0 0 32 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M31.0664 11.2834L31.0664 8.53613L26.6282 8.53613L26.6282 11.2834C26.6282 17.2224 21.7468 22.062 15.5339 22.062C9.32108 22.062 4.43909 17.2229 4.43909 11.2834L4.43909 8.53613L0.00148582 8.53613L0.00148577 11.2834C0.00148559 19.8621 7.10199 26.901 15.5339 26.901C23.9659 26.901 31.0664 19.8621 31.0664 11.2834Z"
                  fill="#1A1A1D"
                />
                <motion.path
                  d="M24.1873 5.34393L24.1873 0.504883L19.3579 0.504883L19.3579 5.34393L24.1873 5.34393Z"
                  fill="#1A1A1D"
                />
                <motion.path
                  d="M11.9936 5.34394L11.9936 0.504883L7.16412 0.504883L7.16412 5.34394L11.9936 5.34394Z"
                  fill="#1A1A1D"
                />
              </motion.svg>
            </a>
          </Link>
          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            <span
              sx={{
                top: menuOpen ? "33.33%" : "0",
                transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
              }}
            />
            <span
              sx={{
                top: "7px",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "translateX(10px)" : "translateX(0)",
              }}
            />
            <span
              sx={{
                top: menuOpen ? "33.33%" : "14px",
                transform: menuOpen ? "rotate(-45deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {subPages && <div className=""></div>}
      </div>
    </div>
  );
};

export default MobileNav;
