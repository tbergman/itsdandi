/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import TopGraphic from "../../src/components/values/deijourney/topgraphic";
import TextBlock from "../../src/components/values/deijourney/textblock";
import Partners from "../../src/components/values/deijourney/partners";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import pages from "../../src/helpers/values/pages";
import { subPages } from "../../src/helpers/subpages";
import { useState, useEffect } from "react";
import Butter from "buttercms";

import MobileNav from "../../src/components/mobilenav";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";
import GridContainer from "../../src/components/gridcontainer";
import Section from "../../src/components/section";
import QuoteImage from "../../src/components/quoteimage";
import QuoteText from "../../src/components/quotetext";

const Values = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "values",
    sub: "deijourney",
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
    currentIndex: 2,
    nextBg: "violet",
    prevBg: "blue",
  });

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
        setNavbarStyling={setNavbarStyling}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        bg="#FFF"
        styling={{
          mb: [12, 12, 16, 9],
        }}
        content={{
          header: props.header.header,
          body: props.header.body,
        }}
      >
        <TopGraphic />
      </Header>
      <TextBlock
        isDesktop={isDesktop}
        content={{
          ...props.getting_started,
        }}
        styling={{
          bg: "rgba(248, 248, 248, 1)",
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
      />

      {/* Quote */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        bg="#F8F8F8"
      >
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

      <TextBlock
        isDesktop={isDesktop}
        content={{
          ...props.unpacking,
        }}
        styling={{
          ".TextBlock__textWrapper": {
            mb: [
              (t) => `calc(calc(${t.colWidthMob} * 2) + 50px)`,
              (t) => `calc(calc(${t.colWidthMob} * 2) + 50px)`,
              (t) => `calc(calc(${t.colWidthMob} * 2) + 50px)`,
              18,
            ],
          },
        }}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
      />
      <Partners
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        content={{
          ...props.transformation,
        }}
      />
      <TextBlock
        isDesktop={isDesktop}
        content={{
          ...props.taking_action,
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
      />
      <TextBlock
        isDesktop={isDesktop}
        content={{
          ...props.sustaining_progress,
        }}
        styling={{
          bg: "rgba(248, 248, 248, 1)",
        }}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "values_deijourney");

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

export default Values;
