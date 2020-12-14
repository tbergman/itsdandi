/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Connections from "../../src/components/product/integrations/connections";
import Secure from "../../src/components/product/integrations/secure";
import { subPages } from "../../src/helpers/product/subpages";
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
    ...theme.components.navigation.gray,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const subPages_ = subPages({
    pages,
    currentIndex: 4,
    nextBg: "violet",
    prevBg: "blue",
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
      <SubMenu navBarStyling={navBarStyling} subPages={subPages_.subPages} />
      <Header
        title={`Easy integrations for better insights`}
        body={`Dandi ties together the data in your existing HR platforms to unlock over 1 million new DEI insights.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
        styling={{
          mb: [16],
        }}
      ></Header>
      <Connections
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <Secure
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
