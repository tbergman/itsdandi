/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

import { motion, useAnimation, animationControls } from "framer-motion";
import MainLogo from "./home/mainlogo";
import { columnWidths } from "../helpers/utils";
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
        {!isServer && (
          <MainLogo
            navBarStyling={navBarStyling}
            staticLogo={staticLogo}
            setStaticLogo={setStaticLogo}
            scaleTo={32 / 90}
            yOffset={-90 + 35}
            width={width}
          />
        )}
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

        <div className="item login">
          <a href="www.google.com" target="_blank" className="item-link">
            <div>
              <div
                body="Log in"
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
        <DemoBtn />
      </div>
    </motion.nav>
  );
};

export default Navigation;
