/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Compensation from "../../src/components/values/payequity/compensation";
import Reports from "../../src/components/values/payequity/reports";

import Affordable from "../../src/components/values/payequity/affordable";
import CompensationGraph from "../../src/components/values/payequity/compensationgraph";

import MobileNav from "../../src/components/mobilenav";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/values/pages";
import MobileMenu from "../../src/components/mobilemenu";
import { useState, useEffect } from "react";
import { useWindowSize } from "@react-hook/window-size";
import Butter from "buttercms";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import { isServer } from "../../src/helpers/utils";
import GridContainer from "../../src/components/gridcontainer";
import Section from "../../src/components/section";
import QuoteText from "../../src/components/quotetext";
import QuoteImage from "../../src/components/quoteimage";
import React from "react";

const EquityPay = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "values",
    sub: "equitypay",
  };
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.submenu.variants.white,
  });
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navBarVariants.white,
  });

  const subPages_ = subPages({
    pages,
    currentIndex: 1,
    nextBg: "turquoise",
    prevBg: "violet",
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
        current={currentPage.main}
        setNavbarStyling={setNavbarStyling}
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
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
        content={{
          header: props.header.header,
          body: props.header.body,
        }}
        bg="#FFF"
        styling={{
          mb: [12, 12, 12, 18],
        }}
      ></Header>
      <Compensation
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        isServer={isServer()}
        content={{
          ...props.compensation,
        }}
      />
      <CompensationGraph
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.default}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.default}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        content={{
          chart_items: props.bar_chart.chart_items,
          body: props.bar_chart.text,
        }}
      />
      <Reports
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        content={{
          ...props.reports,
        }}
      />

      {/* Quote */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        bg={"#F8F8F8"}
      >
        {/* Change order depending on device */}

        <Section
          styling={{
            py: [0, 0, 0, 20],
            ...theme.components.section.one.quote,
          }}
          shouldSlideUp={true}
        >
          <QuoteText content={{ ...props.quote }} />
        </Section>
        <Section
          styling={{
            py: [0, 0, 0, 20],
            ...theme.components.section.two.quote,
          }}
        >
          <QuoteImage content={{ ...props.quote }} />
        </Section>
      </GridContainer>

      <Affordable
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.white}
        isDesktop={isDesktop}
        content={{
          ...props.affordable,
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
    const response = await butter.page.retrieve("*", "values_payequity");

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

export default EquityPay;
