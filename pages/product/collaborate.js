/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import DeiWork from "../../src/components/product/collaborate/deiwork";
import Customizable from "../../src/components/product/collaborate/customizable";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import TopContent from "../../src/components/product/collaborate/topcontent";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";
import SubMenu from "../../src/components/submenu";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.gray,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);
  const subPages_ = subPages({
    pages,
    currentIndex: 2,
    nextBg: "blue",
    prevBg: "violet",
  });

  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

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
        navBarStyling={navBarStyling}
      />
      <MobileMenu menuOpen={menuOpen} navBarStyling={navBarStyling} />
      <SubMenu navBarStyling={navBarStyling} subPages={subPages_.subPages} />
      <Header
        title={`Unlocking the power of collaboration`}
        body={`With everyone working in Dandi, conversations get more productive and progress happens faster.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
        bg="#fff"
        styling={{
          mb: [13, 23],
        }}
      >
        <TopContent />
      </Header>
      <DeiWork
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <Customizable
        isDesktop={isDesktop}
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
