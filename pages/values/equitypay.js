/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/values/payequity/header";
import Compensation from "../../src/components/values/payequity/compensation";
import Reports from "../../src/components/values/payequity/reports";
import QuoteSection from "../../src/components/values/payequity/quotesection";
import Affordable from "../../src/components/values/payequity/affordable";
import CompensationGraph from "../../src/components/values/payequity/compensationgraph";
import MobileNav from "../../src/components/mobilenav";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.white,
  });
  const subPages = ["Pay Equity", "The DEI Journey", "For Your Role"];
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
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
        bg: "#FFF",
      }}
    >
      <Navigation
        current="values"
        setNavbarStyling={setNavbarStyling}
        styling={navBarStyling}
      />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <Header setNavbarStyling={setNavbarStyling} windowHeight={windowHeight} />
      <Compensation
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <CompensationGraph
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Reports
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <QuoteSection
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />

      <Affordable
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      {/* <SubNavigation subPages={subPages} /> */}
      <Footer />
    </div>
  );
};

export default Home;
