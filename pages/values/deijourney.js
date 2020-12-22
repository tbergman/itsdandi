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
import pages from "../../src/helpers/values/pages";
import { subPages } from "../../src/helpers/subpages";
import { useState, useEffect } from "react";

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

const Values = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
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

  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

  const subPages_ = subPages({
    pages,
    currentIndex: 1,
    nextBg: "violet",
    prevBg: "blue",
  });

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
      <Navigation current="values" navBarStyling={navBarStyling} />
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
        isDesktop={isDesktop}
        bg="#FFF"
        styling={{
          mb: [12, 9],
        }}
        title={`DEI is a journey. Dandi works with you every step of the way.`}
        body={`Whether your business is just starting to focus on DEI or already has programs underway, Dandi has the flexibility to meet you where you are.`}
      >
        <TopGraphic />
      </Header>
      <TextBlock
        isDesktop={isDesktop}
        title={`01. Getting Started`}
        sections={sections}
        styling={{
          bg: "rgba(250, 250, 250, 0.96)",
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
      />
      <TextBlock
        isDesktop={isDesktop}
        title={`02. Unpacking the data`}
        sections={sections}
        styling={{
          ".text": {
            mb: [21, 18],
          },
        }}
        navBarStyling={theme.components.navigation.white}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Partners
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <TextBlock
        isDesktop={isDesktop}
        title={`03. Taking action`}
        sections={sections}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.white}
      />
      <TextBlock
        isDesktop={isDesktop}
        title={`04. Sustaining Progress`}
        sections={sections}
        styling={{
          bg: "rgba(250, 250, 250, 0.96)",
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navigation.gray}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Values;
