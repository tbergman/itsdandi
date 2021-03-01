/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Header from "../src/components/pricing/header";
import Cost from "../src/components/pricing/cost";
import BetterInsights from "../src/components/pricing/betterinsights";
import MobileMenu from "../src/components/mobilemenu";
import devices from "../src/helpers/devices";
import { useState, useEffect } from "react";
import SubNavigation from "../src/components/subnavigation";
import Butter from "buttercms";
import { isServer } from "../src/helpers/utils";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../src/components/mobilenav";
import { useMediaQuery } from "react-responsive";
import { useWindowSize } from "@react-hook/window-size";

const Pricing = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navBarVariants.white,
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

  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];

  return (
    <div
      sx={{
        bg: "#fff",
      }}
    >
      <Navigation
        current="pricing"
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
        staticDemoBtn={false}
        width={width}
      />
      <MobileMenu menuOpen={menuOpen} navBarStyling={navBarStyling} />
      <Header
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
        isServer={isServer()}
        content={{
          ...props.header,
        }}
      />
      <Cost
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        content={{
          ...props.cost,
        }}
      />
      <BetterInsights
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.default}
        windowHeight={windowHeight}
        width={width}
        content={{
          ...props.better_insights,
        }}
      />
      <SubNavigation
        next={{
          url: "/community/board",
          name: "Community",
          bg: "blue",
        }}
        prev={{
          url: "/product/measure",
          name: "Product",
          bg: "violet",
        }}
      />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "pricing");

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

export default Pricing;
