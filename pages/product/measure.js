/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Metrics from "../../src/components/product/measure/metrics";
import Quote from "../../src/components/quote";
import WhyMeasure from "../../src/components/product/measure/whymeasure";
import Intersectional from "../../src/components/product/measure/intersectional";
import Thoughtful from "../../src/components/product/measure/thoughtful";
import SubMenu from "../../src/components/submenu";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.gray,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const subPages = [
    {
      name: "Measure",
      url: "/product/measure",
      current: true,
    },
    {
      name: "Analyze",
      url: "/product/analyze",
    },
    {
      name: "Collaborate",
      url: "/product/collaborate",
    },
    {
      name: "Security",
      url: "/product/security",
    },
    {
      name: "Integrations",
      url: "/product/integrations",
    },
  ];
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];

  return (
    <div
      sx={{
        bg: "#FFF",
      }}
    >
      <Navigation current="product" styling={navBarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <SubMenu navBarStyling={navBarStyling} subPages={subPages} />
      <Header
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
        title={`DEI, made to measure`}
        body={`Simple. Precise. Eye-opening. Dandi sets the new standard for DEI measurement.`}
        styling={{
          mb: [22],
        }}
        bg="white"
      ></Header>
      <Metrics
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />

      <Quote
        imageUrl={`/assets/images/tamarcus-brown.png`}
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity
`}
        name={`Name Namesson`}
        title={`Ceo, Company`}
        color={theme.colors.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray2}
        windowHeight={windowHeight}
        bg="white"
      />
      <WhyMeasure
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <Intersectional
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <Thoughtful
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <SubNavigation
        next={{
          name: "Analyze",
          url: "/product/analyze",
          bg: "turquoise",
        }}
      />
      <Footer />
    </div>
  );
};

export default Product;
