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

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [windowHeight, setWindowHeight] = useState(500);
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
        current="values"
        setNavbarStyling={setNavbarStyling}
        navBarStyling={navBarStyling}
      />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
      />
      <MobileMenu menuOpen={menuOpen} navBarStyling={navBarStyling} />
      <SubMenu subPages={subPages_.subPages} navBarStyling={navBarStyling} />
      <Header
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
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
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
      />
      <CompensationGraph
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.default}
        windowHeight={windowHeight}
      />
      <Reports
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
      />
      <Quote
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
        bg="#FAFAFA"
        imageUrl="/assets/images/tamarcus-brown.png"
        name={`Name Namesson`}
        title={`Ceo, Company`}
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity.
`}
      />

      <Affordable
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Home;
