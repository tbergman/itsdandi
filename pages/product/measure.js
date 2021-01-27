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
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import TopContent from "../../src/components/product/measure/topcontent";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { isServer } from "../../src/helpers/utils";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";
import { prop } from "ramda";

const Product = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, height] = useWindowSize();
  const currentPage = {
    main: "product",
    sub: "measure",
  };
  const { theme } = useThemeUI();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [staticLogo, setStaticLogo] = useState(true);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.submenu.gray,
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
    currentIndex: 0,
    nextBg: "turquoise",
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
        slidesPerView={3}
      />
      <SubMenuDesktop
        subPages={subPages_.subPages}
        subMenuStyling={subMenuStyling}
      />
      <Header
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.gray}
        content={{
          header: props.header.header,
          body: props.header.body,
        }}
        bg="#F8F8F8"
        styling={{
          mb: [12, 22],
        }}
      >
        {!isServer() && (
          <TopContent
            isDesktop={isDesktop}
            width={width}
            content={{
              ...props.header,
            }}
          />
        )}
      </Header>
      <Metrics
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        content={{
          ...props.metrics,
        }}
      />

      <Quote
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        content={{
          ...props.quote,
        }}
        color={theme.colors.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray2}
        windowHeight={windowHeight}
        bg="white"
      />
      <WhyMeasure
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
        content={{
          header: props.measurement.header,
          body: props.measurement.body,
          categories: props.categories,
        }}
      />
      <Intersectional
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.default}
        windowHeight={windowHeight}
        content={{
          ...props.intersectional,
        }}
      />
      <Thoughtful
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        content={{
          ...props.thoughtful,
        }}
      />
      <SubNavigation next={subPages_.next} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "product_measure");

    return {
      props: {
        ...response.data.data.fields,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        ...err,
      },
    };
  }
}

export default Product;
