/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Top from "../src/components/home/top";
import LearnMore from "../src/components/home/learnmore";
import Carousel from "../src/components/home/carousel";
import PayEquity from "../src/components/home/payequity";
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
  const [navbarStyling, setNavbarStyling] = useState({
    bg: theme.colors.black,
  });

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
  }, []);

  return (
    <div
      sx={{
        bg: "black",
      }}
    >
      <Navigation current={`home`} styling={navbarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <Top setNavbarStyling={setNavbarStyling} />
      <LearnMore
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Carousel
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <PayEquity
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Partners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <AdvanceDEI
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Quotes setNavbarStyling={setNavbarStyling} windowHeight={windowHeight} />
      <MarketPlacePartners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Footer />
    </div>
  );
};

export default Home;
