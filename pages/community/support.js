/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Onboarding from "../../src/components/community/support/onboarding";
import LearnMore from "../../src/components/community/support/learnmore";
import GetCreative from "../../src/components/community/support/getcreative";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/community/pages";

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

const Community = () => {
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
    toggleMenu(menuOpen);
  }, [menuOpen]);
  const subPages_ = subPages({
    pages,
    currentIndex: 2,
    nextBg: "#A8F1F4",
    prevBg: "#FFB7B7",
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
      <Navigation current="community" navBarStyling={navBarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
      />
      <MobileMenu menuOpen={menuOpen} navBarStyling={navBarStyling} />
      <SubMenu navBarStyling={navBarStyling} subPages={subPages_.subPages} />
      <Header
        title={`The support you need to advance DEI`}
        body={`Some software companies are hands-off. But that’s not Dandi.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
        bg="#FFF"
        styling={{
          mb: [20],
        }}
      ></Header>
      <Onboarding
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
      />
      <LearnMore
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.yellow}
        windowHeight={windowHeight}
      />
      <GetCreative
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Community;
