/** @jsx jsx */
import { jsx } from "theme-ui";

import MainLogo from "./home/mainlogo";
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
          <MainLogo
            navBarStyling={navBarStyling}
            menuOpen={menuOpen}
            setStaticLogo={setStaticLogo}
            staticLogo={staticLogo}
            yOffset={-widths.mobile + 30}
          />
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
