/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Insights from "../../src/components/product/analyze/insights";
import NewInsights from "../../src/components/product/analyze/newinsights";
import InAction from "../../src/components/product/analyze/inaction";
import Sharable from "../../src/components/product/analyze/sharable";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import TopContent from "../../src/components/product/analyze/topcontent";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "product",
    sub: "analyze",
  };
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.submenu.white,
  });
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
    currentIndex: 1,
    nextBg: "yellow",
    prevBg: "turquoise",
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
      <Navigation
        current={currentPage.main}
        navBarStyling={navBarStyling}
        staticLogo={staticLogo}
        setStaticLogo={setStaticLogo}
        width={width}
      />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
        staticLogo={staticLogo}
        setStaticLogo={setStaticLogo}
        width={width}
      />
      <MobileMenu
        menuOpen={menuOpen}
        navBarStyling={navBarStyling}
        currentPage={currentPage.sub}
      />
      <SubMenuMobile
        subPages={subPages_.subPages}
        subMenuStyling={subMenuStyling}
      />
      <SubMenuDesktop
        subPages={subPages_.subPages}
        subMenuStyling={subMenuStyling}
      />
      <Header
        title={`See what your HR data’s trying to tell you`}
        body={`Dandi helps you understand your people data in a whole new way.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        bg="#FFF"
        styling={{
          mb: [12, 23],
        }}
      >
        <TopContent isDesktop={isDesktop} />
      </Header>
      <Insights
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.default}
        windowHeight={windowHeight}
      />
      <NewInsights
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
      />
      <InAction
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.default}
        windowHeight={windowHeight}
      />
      <Sharable
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Product;
