/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Compensation from "../../src/components/values/payequity/compensation";
import Reports from "../../src/components/values/payequity/reports";
import Quote from "../../src/components/quote";
import Affordable from "../../src/components/values/payequity/affordable";
import CompensationGraph from "../../src/components/values/payequity/compensationgraph";
import TopGraphic from "../../src/components/values/payequity/topgraphic";
import MobileNav from "../../src/components/mobilenav";
import SubMenu from "../../src/components/submenu";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/values/pages";
import MobileMenu from "../../src/components/mobilemenu";
import { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";

const Values = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "values",
    sub: "equitypay",
  };
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.submenu.white,
  });
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.white,
  });

  const subPages_ = subPages({
    pages,
    currentIndex: 0,
    nextBg: "turquoise",
    prevBg: "",
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
  }, [menuOpen]);

  return (
    <div
      sx={{
        bg: "#FFF",
      }}
    >
      <Navigation
        current={currentPage.main}
        setNavbarStyling={setNavbarStyling}
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
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        bg="#FFF"
        styling={{
          mb: [23, 15],
        }}
        title={`Dandi makes pay equity possible`}
        body={`With sophisticated compensation analytics built right in, Dandi helps you find the pay gaps at your company—and make them disappear.`}
      >
        <TopGraphic />
      </Header>
      <Compensation
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
      />
      <CompensationGraph
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.default}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
      />
      <Reports
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
      />
      <Quote
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
        bg="#FAFAFA"
        image={{
          desktop: "/assets/images/tamarcus-brown-desktop.png",
          mobile: "/assets/images/tamarcus-brown.png",
        }}
        name={`Name Namesson`}
        title={`Ceo, Company`}
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity.`}
        isDesktop={isDesktop}
      />

      <Affordable
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
        isDesktop={isDesktop}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Values;
