/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import TopImage from "../../src/components/values/leadership/topimage";
import TextModules from "../../src/components/values/leadership/textmodules";
import Quote from "../../src/components/quote";
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

  const subPages_ = subPages({
    pages,
    currentIndex: 2,
    nextBg: "blue",
    prevBg: "violet",
  });

  const toggleMenu = (menuOpen) => {
    const body = document.body;
    return menuOpen
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
  };

  const modules = [
    {
      title: `Leadership`,
      body: `CEOs, boards, and other top-level executives are increasingly being challenged to drive real action on DEI. By providing on-demand access to rich DEI insights, Dandi helps leaders build greater awareness, accountability, and alignment throughout their organizations.`,
      bottomText: `Dandi tracks and measures your DEI efforts.`,
      linkText: `See how`,
      linkUrl: "/",
    },
    {
      title: `HR + Talent`,
      body: `As the teams responsible for building their company’s workforce and culture, HR and talent are often on the front lines of DEI efforts. By providing over 1 million new insights into every aspect of the talent management cycle, Dandi makes it easier to see what’s working and improve what isn’t.`,
      bottomText: `Dandi shows the full talent management 
lifecycle.`,
      linkText: `See how`,
      linkUrl: "/",
    },
    {
      title: `Compensation`,
      body: `Equal pay for equal work. It sounds simple, but compensation teams know that it’s a tricky thing to get right. With sophisticated wage gap analysis built right in, Dandi makes it easier to find and address pay discrepancies`,
      bottomText: `Dandi helps advance pay equity.`,
      linkText: `See how`,
      linkUrl: "/",
    },
    {
      title: `Analytics`,
      body: `Often one of the most in-demand teams in a business, it can be hard for analytics teams to give DEI the attention it deserves. But with Dandi analytics added to the mix, analytics teams don’t have to choose between working on DEI and other business problems. `,
      bottomText: `Dandi delivers advanced analytics.`,
      linkText: `See how`,
      linkUrl: "/",
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
      <SubMenu subPages={subPages_.subPages} subMenuStyling={subMenuStyling} />
      <Header
        isDesktop={isDesktop}
        title={`Work’s better with Dandi`}
        body={`Whether you’re a DEI practitioner or a leader in another part of the business, our tools can also help you do more every day.`}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        bg="#FFF"
        windowHeight={windowHeight}
        styling={{
          mb: [21, "360px"],
        }}
      >
        <TopImage />
      </Header>
      <TextModules
        isDesktop={isDesktop}
        modules={modules}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
      />
      <Quote
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navigation.yellow}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.white}
        windowHeight={windowHeight}
        name={`Name Namesson`}
        title={`Ceo, Company`}
        bg="yellow"
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity
`}
        image={{
          desktop: "/assets/images/tamarcus-brown-desktop.png",
          mobile: "/assets/images/tamarcus-brown.png",
        }}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Values;
