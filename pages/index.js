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
import { useMediaQuery } from "react-responsive";
import devices from "../src/helpers/devices";
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
  const isDesktop = useMediaQuery({ query: devices.desktop });
  const currentPage = {
    main: "home",
    sub: "home",
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(500);
  const [staticLogo, setStaticLogo] = useState(false);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.default,
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
  }, [menuOpen, window]);

  return (
    <div
      sx={{
        bg: "black",
      }}
    >
      <Navigation
        current={currentPage.main}
        navBarStyling={navBarStyling}
        staticLogo={staticLogo}
        setStaticLogo={setStaticLogo}
      />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
      />
      <MobileMenu
        menuOpen={menuOpen}
        navBarStyling={navBarStyling}
        currentPage={currentPage.main}
      />
      <Top
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
      />
      <LearnMore
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.violet}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
      />
      <Carousel
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
      />
      <PayEquity
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
        isDesktop={isDesktop}
      />
      <Partners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
        isDesktop={isDesktop}
      />
      <AdvanceDEI
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.lightTurquoise}
        isDesktop={isDesktop}
      />
      <Quotes
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray2}
        isDesktop={isDesktop}
      />
      <MarketPlacePartners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
        isDesktop={isDesktop}
      />
      <Footer />
    </div>
  );
};

export default Home;
