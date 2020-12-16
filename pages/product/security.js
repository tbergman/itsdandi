/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import BestInClass from "../../src/components/product/security/bestinclass";
import Quote from "../../src/components/quote";
import Workflows from "../../src/components/product/security/workflows";
import Connect from "../../src/components/product/security/connect";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";
import SubMenu from "../../src/components/submenu";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.white,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const subPages_ = subPages({
    pages,
    currentIndex: 3,
    nextBg: "turquoise",
    prevBg: "yellow",
  });
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
      <Navigation current="product" navBarStyling={navBarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <SubMenu subPages={subPages_.subPages} navBarStyling={navBarStyling} />
      <Header
        title={`Your people data is precious. Protecting it is our top priority.`}
        body={`Learn more about the Dandi security standard.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
        bg="#fff"
        styling={{
          mb: [0, 16],
          h1: {
            fontSize: ["52px"],
            lineHeight: ["58px"],
          },
        }}
      ></Header>
      <BestInClass
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <Quote
        imageUrl="/assets/images/tamarcus-brown.png"
        text={`I trust Dandi with our most sensitive info`}
        name={`Name Namesson`}
        title={`Ceo,Company`}
        bg="white"
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray2}
        windowHeight={windowHeight}
      />
      <Workflows
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <Connect
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Product;
