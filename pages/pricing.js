/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Header from "../src/components/pricing/header";
import Cost from "../src/components/pricing/cost";
import BetterInsights from "../src/components/pricing/betterinsights";
import MobileMenu from "../src/components/mobilemenu";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../src/components/mobilenav";

const Pricing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.white,
  });

  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);

  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];
  return (
    <div
      sx={{
        bg: "#fff",
      }}
    >
      <Navigation current="pricing" navBarStyling={navBarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
      />
      <MobileMenu menuOpen={menuOpen} navBarStyling={navBarStyling} />
      <Header
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <Cost
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
      />
      <BetterInsights
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <Footer />
    </div>
  );
};

export default Pricing;
