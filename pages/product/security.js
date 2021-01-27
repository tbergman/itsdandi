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
import TopContent from "../../src/components/product/security/topcontent";
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
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";

const Product = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const currentPage = {
    main: "product",
    sub: "security",
  };
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.white,
  });
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.white,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);

  const subPages_ = subPages({
    pages,
    currentIndex: 3,
    nextBg: "turquoise",
    prevBg: "yellow",
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
        content={{
          ...props.header,
        }}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        bg="#fff"
        styling={{
          mb: [13, 16],
          h1: {
            fontSize: ["36px", "52px"],
            lineHeight: ["43px", "58px"],
          },
        }}
      >
        {!isServer() && (
          <TopContent
            isDesktop={isDesktop}
            content={{
              ...props.header,
            }}
          />
        )}
      </Header>
      <BestInClass
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.default}
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
        content={{
          ...props.best_in_class,
        }}
      />
      <Quote
        isDesktop={isDesktop}
        content={{
          ...props.quote,
        }}
        bg="white"
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray2}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
      />
      <Workflows
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        content={{
          ...props.workflows,
        }}
      />
      <Connect
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        content={{
          ...props.connect,
        }}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "product_security");

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
