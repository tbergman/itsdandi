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
  const subPages = [
    {
      name: "Pay Equity",
      url: "/values/equitypay",
      current: true,
    },
    {
      name: "The DEI Journey",
      url: "/values/deijourney",
    },
    {
      name: "For Your Role",
      url: "/values/leadership",
    },
  ];
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  return (
    <div
      sx={{
        bg: "#FFF",
      }}
    >
      <Navigation
        current="values"
        setNavbarStyling={setNavbarStyling}
        styling={navBarStyling}
      />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <SubMenu subPages={subPages} navBarStyling={navBarStyling} />
      <Header
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        styling={{
          mb: [0, 15],
        }}
        title={`Dandi makes pay equity possible`}
        body={`With sophisticated compensation analytics built right in, Dandi helps you find the pay gaps at your company—and make them disappear.`}
      >
        <TopGraphic />
      </Header>
      <Compensation
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <CompensationGraph
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Reports
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Quote setNavbarStyling={setNavbarStyling} windowHeight={windowHeight} />

      <Affordable
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <SubNavigation
        next={{
          name: "The DEI Journey",
          url: "/values/deijourney",
          bg: theme.colors.turquoise,
        }}
      />
      <Footer />
    </div>
  );
};

export default Home;
