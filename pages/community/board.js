/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Better from "../../src/components/community/board/better";
import { subPages } from "../../src/helpers/subpages";
import People from "../../src/components/community/people";
import pages from "../../src/helpers/community/pages";
import TopContent from "../../src/components/community/board/topcontent";
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
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";

const Community = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const currentPage = {
    main: "community",
    sub: "board",
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
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);

  const subPages_ = subPages({ pages, currentIndex: 0, nextBg: "#FFB7B7" });
  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

  const people = [
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
    {
      url: `/assets/images/emily.png`,
      name: `Emily Miethner`,
      title: `Founder & CEO, FindSpark`,
    },
    {
      url: `/assets/images/carol.png`,
      name: `Carol Watson`,
      title: `Chief Inclusion Officer, BCW Global`,
    },
    {
      url: `/assets/images/lakuan.png`,
      name: `Lakuan Terry Smith`,
      title: `DEI Manager, Justworks`,
    },
    {
      url: `/assets/images/kerel.png`,
      name: `Kerel Cooper`,
      title: `SVP, Global Marketing, LiveIntent`,
    },
    {
      url: `/assets/images/michael.png`,
      name: `Michael Texidor`,
      title: `VP, Member Operations, IAB`,
    },
    {
      url: `/assets/images/henry.png`,
      name: `Herry Pierre Louis`,
      title: `Product Manager, Oscar Health`,
    },
    {
      url: `/assets/images/antoinette.png`,
      name: `Antoinette Hamilton`,
      title: `Global Head of I&D, Lam Researchal`,
    },
    {
      url: `/assets/images/darren.png`,
      name: `Darren Wesley Martin Jr.`,
      title: `Founder & CEO, Streamlined Media`,
    },
    {
      url: `/assets/images/damien.png`,
      name: `Damien Wint`,
      title: `Associate General Counsel, Advertising & Privacy, Facebook`,
    },
    {
      url: `/assets/images/jill.png`,
      name: `Jill Katz`,
      title: `CHRO, Assemble HR Consulting`,
    },
    {
      url: `/assets/images/peter.png`,
      name: `Peter Phelan`,
      title: `Founder & CEO, ValuesCulture`,
    },
    {
      url: `/assets/images/netta.png`,
      name: `Netta Conyers-Haynes`,
      title: `VP, Communications, Sequoia Consulting Group`,
    },
    {
      url: `/assets/images/stephen.png`,
      name: `Stephen Kim`,
      title: `Associate Director, Communication & Information, Princeton University Art Museum`,
    },
  ];

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
      <SubMenu subMenuStyling={subMenuStyling} subPages={subPages_.subPages} />
      <Header
        isDesktop={isDesktop}
        subMenuStyling={theme.components.submenu.white}
        setSubMenuStyling={setSubMenuStyling}
        title={`Working together to advance DEI`}
        body={`A collective of leading thinkers and change-makers, Dandi’s DEI Advisory Board plays a crucial role in shaping our platform.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        windowHeight={windowHeight}
        bg="#FFF"
        styling={{
          mb: [17, 16],
        }}
      >
        <TopContent />
      </Header>
      <People
        subMenuStyling={theme.components.submenu.white}
        setSubMenuStyling={setSubMenuStyling}
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        windowHeight={windowHeight}
        title={`Making Dandi better for everyone`}
        body={`We’ve got a huge mission at Dandi—to make business better for everyone. We know we can’t do it alone. And that’s where our DEI Advisory Board comes in.

The Advisory Board, along with our Marketplace Partners, provides an important point of contact with other DEI leaders. Conceived as a working group of diverse talents and brilliant minds, the Board offers ongoing input regarding our products and the practice of DEI as a whole. They’re a vital complement to our team, and we’re very lucky to have them working with us.`}
        people={people}
      />

      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Community;
