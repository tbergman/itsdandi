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
import { columnWidths } from "../helpers/utils";
import MobileDemoBtn from "./navigation/mobiledemobtn";

const MobileNav = ({
  menuOpen,
  setMenuOpen,
  navBarStyling,
  subPages,
  width,
  staticLogo,
  setStaticLogo,
  staticDemoBtn,
}) => {
  const widths = columnWidths(width);

  const { scrollYProgress } = useViewportScroll();
  const opacityAnim = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1]);

  return (
    <div
      className="MobileNav"
      sx={{
        variant: "components.mobileNavigation",
      }}
    >
      <div
        className="MobileNav__container"
        sx={{
          ...navBarStyling,
        }}
      >
        <div className="MobileNav__container-wrapper">
          <Link href="/">
            <a
              sx={{
                mt: 3,
                ml: "20px",
              }}
              className="MobileNav__container-wrapper-logo"
            >
              <BigLogo
                navBarStyling={navBarStyling}
                menuOpen={menuOpen}
                setStaticLogo={setStaticLogo}
                staticLogo={staticLogo}
                scaleTo={32 / widths.mobile}
                yOffset={-widths.mobile + 30}
              />
            </a>
          </Link>
          <div className="MobileNav__container-wrapper-button">
            <MobileDemoBtn menuOpen={menuOpen} staticDemoBtn={staticDemoBtn} />
          </div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="MobileNav__container-wrapper-hamburger"
          >
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
      </div>
    </div>
  );
};

export default MobileNav;
