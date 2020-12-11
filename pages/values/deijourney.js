/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import TopGraphic from "../../src/components/values/deijourney/topgraphic";
import TextBlock from "../../src/components/values/deijourney/textblock";
import Partners from "../../src/components/values/deijourney/partners";
import SubMenu from "../../src/components/submenu";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";

const Values = () => {
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
  }, []);

  const subPages = [
    {
      name: "Pay Equity",
      url: "/values/equitypay",
    },
    {
      name: "The DEI Journey",
      url: "/values/deijourney",
      current: true,
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

  const sections = [
    {
      title: "The moment",
      body: `For many businesses, the beginning of their DEI journey can be an
            exciting and vulnerable moment. There is the excitement of knowing
            that the company has committed to doing more for its people. But
            this is often mixed with the anxiety of knowing that this may be, at
            times, an uncertain and uncomfortable process.`,
    },
    {
      title: "The challenge",
      body: `Many businesses begin their DEI journey by taking some kind of action—perhaps hosting a diversity training or unconscious bias seminar. While this work can be invaluable, people are often left with a lingering question: Where do we go from here?`,
    },
    {
      title: "The opportunity: Adopt a data-driven approach",
      body: `Adding data to your DEI efforts brings greater structure and accountability to the entire process. Data can provide greater clarity around issues that need addressing, and greater insight into the programs that actually work.`,
    },
    {
      title: "How Dandi can help",
      body: `Dandi’s designed to meet your need for DEI data. On day 1 with the platform, you’ll have over 1 million new people insights at your disposal. `,
    },
  ];

  return (
    <div
      sx={{
        bg: "#FFF",
      }}
    >
      <Navigation current="values" styling={navBarStyling} />
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
          mb: [0, 9],
        }}
        title={`DEI is a journey. Dandi works with you every step of the way.`}
        body={`Whether your business is just starting to focus on DEI or already has programs underway, Dandi has the flexibility to meet you where you are.`}
      >
        <TopGraphic />
      </Header>
      <TextBlock
        title={`01. Getting Started`}
        sections={sections}
        styling={{
          bg: "rgba(242, 242, 242, 0.96)",
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
      />
      <TextBlock
        title={`02. Unpacking the data`}
        sections={sections}
        navBarStyling={theme.components.navigation.white}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Partners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <TextBlock
        title={`03. Taking action`}
        sections={sections}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
      />
      <TextBlock
        title={`04. Sustaining Progress`}
        sections={sections}
        styling={{
          bg: "white",
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        styling={{
          bg: "rgba(242, 242, 242, 0.96)",
        }}
        navBarStyling={theme.components.navigation.gray}
      />
      <SubNavigation
        next={{
          name: "For Your Role",
          url: "/values/leadership",
          bg: theme.colors.violet,
        }}
        prev={{
          name: "Pay Equity",
          url: "/values/equitypay",
          bg: theme.colors.blue,
        }}
      />
      <Footer />
    </div>
  );
};

export default Values;
