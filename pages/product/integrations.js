/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Connections from "../../src/components/product/integrations/connections";
import Secure from "../../src/components/product/integrations/secure";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import TopContent from "../../src/components/product/integrations/topcontent";
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
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "product",
    sub: "integrations",
  };
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.submenu.white,
  });
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.gray2,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);

  const subPages_ = subPages({
    pages,
    currentIndex: 4,
    nextBg: "violet",
    prevBg: "blue",
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
        isDesktop={isDesktop}
        title={`Easy integrations for better insights`}
        body={`Dandi ties together the data in your existing HR platforms to unlock over 1 million new DEI insights.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray2}
        subMenuStyling={theme.components.submenu.white}
        setSubMenuStyling={setSubMenuStyling}
        windowHeight={windowHeight}
        bg="#F8F8F8"
        styling={{
          mb: [12, 16],
        }}
      >
        <TopContent isDesktop={isDesktop} />
      </Header>
      <Connections
        subMenuStyling={theme.components.submenu.white}
        setSubMenuStyling={setSubMenuStyling}
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <Secure
        subMenuStyling={theme.components.submenu.white}
        setSubMenuStyling={setSubMenuStyling}
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
