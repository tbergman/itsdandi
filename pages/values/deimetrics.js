/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Metrics from "../../src/components/values/deimetrics/metrics";
import Quote from "../../src/components/quote";
import MeasurementCapabilities from "../../src/components/values/deimetrics/measurementcapabilities";
import Intersectional from "../../src/components/values/deimetrics/intersectional";
import Thoughtful from "../../src/components/values/deimetrics/thoughtful";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/values/pages";
import TopContent from "../../src/components/values/deimetrics/topcontent";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { isServer, lineBreaks } from "../../src/helpers/utils";
import StandardModule from "../../src/components/standardmodule";
import Section from "../../src/components/section";
import QuoteImage from "../../src/components/quoteimage";

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
import BaseContainer from "../../src/components/basecontainer";
import Categories from "../../src/components/categories";
import QuoteText from "../../src/components/quotetext";
import TextBlockAndLinks from "../../src/components/textblock_and_links";

const DEIMetrics = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, height] = useWindowSize();
  const currentPage = {
    main: "values",
    sub: "deimetrics",
  };
  const { theme } = useThemeUI();
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
  const [staticLogo, setStaticLogo] = useState(true);
  const [subMenuStyling, setSubMenuStyling] = useState({
    ...theme.components.submenu.variants.gray,
  });
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navBarVariants.gray,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
    toggleMenu(menuOpen);
  }, [menuOpen]);

  const subPages_ = subPages({
    pages,
    currentIndex: 0,
    nextBg: "turquoise",
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
      <Navigation
        current={currentPage.main}
        navBarStyling={navBarStyling}
        staticLogo={staticLogo}
        setStaticLogo={setStaticLogo}
        demoButtonStatic={true}
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
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.gray}
        content={{
          header: props.header.header,
          body: props.header.body,
        }}
        bg="#F8F8F8"
        styling={{
          mb: [12, 22],
        }}
      >
        {!isServer() && (
          <TopContent
            isDesktop={isDesktop}
            width={width}
            content={{
              ...props.header,
            }}
          />
        )}
      </Header>

      {/* List Categories */}
      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          variant="components.section.wide"
          styling={{
            mt: [16],
          }}
        >
          <Categories categories={props.categories} />
        </Section>
      </BaseContainer>

      {/* Measurement Capabilities */}
      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          variant="components.section.first"
          shouldSlideUp={true}
          styling={{
            mt: [16],
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.measurement_capabilities.header}</Styled.h2>
          </div>
        </Section>
        <Section
          variant="components.section.second"
          shouldSlideUp={true}
          styling={{
            mt: [16],
            mb: [12],
          }}
        >
          <div className="slideUp">
            <Styled.p>
              {lineBreaks(props.measurement_capabilities.body)}
            </Styled.p>
          </div>
        </Section>
      </BaseContainer>

      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray2}
        windowHeight={windowHeight}
        bg={theme.colors.white}
      >
        <Section variant="components.section.first" shouldSlideUp={true}>
          <QuoteText content={{ ...props.quote1 }} />
        </Section>
        <Section variant="components.section.second">
          <QuoteImage content={{ ...props.quote1 }} />
        </Section>
      </BaseContainer>

      {/* Metrics */}
      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          variant="components.section.first"
          shouldSlideUp={true}
          styling={{
            mt: [16],
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.metrics.header}</Styled.h2>
          </div>
        </Section>
        <Section
          variant="components.section.second"
          shouldSlideUp={true}
          styling={{
            mt: [16],
            mb: [12],
          }}
        >
          <div className="slideUp">
            <Styled.p>{lineBreaks(props.metrics.body)}</Styled.p>
          </div>
        </Section>
      </BaseContainer>

      {/* Speed */}
      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          variant="components.section.first"
          shouldSlideUp={true}
          styling={{
            mt: [16],
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.speed.header}</Styled.h2>
          </div>
        </Section>
        <Section
          variant="components.section.second"
          shouldSlideUp={true}
          styling={{
            mt: [16],
            mb: 12,
          }}
        >
          <div className="slideUp">
            <Styled.p>{lineBreaks(props.speed.body)}</Styled.p>
          </div>
        </Section>
      </BaseContainer>

      {/* Quote 2 */}
      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray2}
        windowHeight={windowHeight}
        bg={theme.colors.white}
      >
        <Section variant="components.section.first" shouldSlideUp={true}>
          <QuoteText content={{ ...props.quote2 }} />
        </Section>
        <Section variant="components.section.second">
          <QuoteImage content={{ ...props.quote2 }} />
        </Section>
      </BaseContainer>

      {/* Continuing Effort */}

      <BaseContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          variant="components.section.first"
          shouldSlideUp={true}
          styling={{
            mt: [16],
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.continuing_effort.header}</Styled.h2>
          </div>
        </Section>
        <Section
          variant="components.section.second"
          shouldSlideUp={true}
          styling={{
            mt: [16],
            mb: 12,
          }}
        >
          <TextBlockAndLinks content={{ ...props.continuing_effort }} />
        </Section>
      </BaseContainer>
      {/* <Quote
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        content={{
          ...props.quote1,
        }}
        color={theme.colors.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray2}
        windowHeight={windowHeight}
        bg="white"
      /> */}

      {/* Metrics */}
      {/* 
      <BaseContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
      >
        <StandardModule
          header={props.metrics.header}
          body={props.metrics.body}
        />
      </BaseContainer> */}
      {/* 
      <BaseContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
      >
        <StandardModule header={props.speed.header} body={props.speed.body} />
      </BaseContainer> */}

      {/* <Quote
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        content={{
          ...props.quote2,
        }}
        color={theme.colors.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray2}
        windowHeight={windowHeight}
        bg="white"
      /> */}

      {/* Continuing Effort */}
      {/* <BaseContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
      >
        <Thoughtful
          content={{
            ...props.continuing_effort,
          }}
        />
      </BaseContainer> */}

      <SubNavigation
        next={subPages_.next}
        prev={{
          name: "Home",
          url: "/",
          bg: "blue",
        }}
      />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "values_deimetrics");

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

export default DEIMetrics;
