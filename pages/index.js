/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Top from "../src/components/home/top";
import LearnMore from "../src/components/home/learnmore";
import Carousel from "../src/components/home/carousel";
import PayEquity from "../src/components/home/payequity";
import MobileMenu from "../src/components/mobilemenu";
import Partners from "../src/components/home/partners";
import AdvanceDEI from "../src/components/home/advancedei";
import Quotes from "../src/components/home/quotes";
import MarketPlacePartners from "../src/components/home/marketplacepartners";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../src/components/mobilenav";

const Home = () => {
  const { theme } = useThemeUI();
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.default,
  });

  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

  const colors = [
    {
      bg: theme.colors.black,
      color: theme.colors.white,
    },
  ];

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);

  return (
    <div
      sx={{
        bg: "black",
      }}
    >
      <Navigation current={`home`} navBarStyling={navBarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
      />
      <MobileMenu menuOpen={menuOpen} navBarStyling={navBarStyling} />
      <Top
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <LearnMore
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.violet}
        windowHeight={windowHeight}
      />
      <Carousel
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <PayEquity
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
      />
      <Partners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
      />
      <AdvanceDEI
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.lightTurquoise}
      />
      <Quotes
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray2}
      />
      <MarketPlacePartners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
      />
      <Footer />
    </div>
  );
};

export default Home;
