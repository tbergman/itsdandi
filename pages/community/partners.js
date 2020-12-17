/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import DoMore from "../../src/components/community/partners/domore";
import People from "../../src/components/community/people";
import Curious from "../../src/components/community/partners/curious";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/community/pages";
import SubMenu from "../../src/components/submenu";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";
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
    currentIndex: 1,
    nextBg: "#FDF1FF",
    prevBg: "#A8F1F4",
  });
  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

  const people = [
    {
      url: `/assets/images/carol.png`,
      name: `Carol Watson`,
      title: `Chief Inclusion Officer, BCW Global`,
    },
    {
      url: `/assets/images/jamie.png`,
      name: `Jaime Klein`,
      title: `Founder & CEO, Inspire Human Resources`,
    },
    {
      url: `/assets/images/dave.png`,
      name: `Dave Cilberto`,
      title: `Principal, Dave Ciliberto Enterprises, Inc.`,
    },
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
    {
      url: `/assets/images/lily.png`,
      name: `Lily`,
      title: `-`,
    },
    {
      url: `/assets/images/robert.png`,
      name: `Robert Beaven`,
      title: `COO & CRO, Jennifer Brown Consulting`,
    },
    {
      url: `/assets/images/tayo.png`,
      name: `Tayo Rockson`,
      title: `President & CEO, UYD Management`,
    },
    {
      url: `/assets/images/natania.png`,
      name: `Natania Gazek`,
      title: `-`,
    },
    {
      url: `/assets/images/nathan.png`,
      name: `Nathan Knight`,
      title: `-`,
    },
  ];

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
      <SubMenu subPages={subPages_.subPages} navBarStyling={navBarStyling} />
      <Header
        title={`Your partners in change`}
        body={`Dandi's Marketplace Partners are here to help you navigate the challenges you meet along the way.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
        bg="#FFF"
        styling={{
          mb: [16],
        }}
      ></Header>
      <People
        title={`Do more with your data`}
        body={`Composed of leading consultants and practitioners, Dandi’s Marketplace Partners are experts at leveraging data to advance DEI initiatives. Whether it’s helping make sense of your numbers, implementing new programs, or managing through organizational change, Partners can provide the extra know-how needed to make good things happen.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
        people={people}
      />

      <Curious
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
