/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/values/pages";
import TopContent from "../../src/components/values/deimetrics/topcontent";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { isServer, lineBreaks } from "../../src/helpers/utils";
import Section from "../../src/components/section";
import QuoteImage from "../../src/components/quoteimage";
import MobileNav from "../../src/components/mobilenav";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";
import GridContainer from "../../src/components/gridcontainer";
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
          mb: [12, 12, 12, 23],
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
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          styling={{
            mt: [6, 6, 6, 16],
            ...theme.components.section.wide,
          }}
        >
          <Categories categories={props.categories} />
        </Section>
      </GridContainer>

      {/* Measurement Capabilities */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.primary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.measurement_capabilities.header}</Styled.h2>
          </div>
        </Section>
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [3, 3, 4, 16],
            mb: [6, 6, 6, 10],
            ...theme.components.section.two.primary,
          }}
        >
          <div className="slideUp">
            <Styled.p>
              {lineBreaks(props.measurement_capabilities.body)}
            </Styled.p>
          </div>
        </Section>
      </GridContainer>

      {/* Quote1 */}
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
          <QuoteText content={{ ...props.quote1 }} />
        </Section>
        <Section
          styling={{
            py: [0, 0, 0, 20],
            ...theme.components.section.two.quote,
          }}
        >
          <QuoteImage content={{ ...props.quote1 }} />
        </Section>
      </GridContainer>

      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.primary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.metrics.header}</Styled.h2>
          </div>
        </Section>
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [3, 3, 4, 16],
            mb: [0],
            ...theme.components.section.two.primary,
          }}
        >
          <div className="slideUp">
            <Styled.p>{lineBreaks(props.metrics.body)}</Styled.p>
          </div>
        </Section>
      </GridContainer>

      {/* Speed */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.primary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.speed.header}</Styled.h2>
          </div>
        </Section>
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [3, 3, 4, 16],
            mb: [8, 8, 8, 10],
            ...theme.components.section.two.primary,
          }}
        >
          <div className="slideUp">
            <Styled.p>{lineBreaks(props.speed.body)}</Styled.p>
          </div>
        </Section>
      </GridContainer>

      {/* Quote 2 */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        bg={"#F8F8F8"}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            py: [0, 0, 0, 20],
            ...theme.components.section.one.quote,
          }}
        >
          <QuoteText content={{ ...props.quote2 }} />
        </Section>
        <Section
          styling={{
            py: [0, 0, 0, 20],
            ...theme.components.section.two.quote,
          }}
        >
          <QuoteImage content={{ ...props.quote2 }} />
        </Section>
      </GridContainer>

      {/* Continuing Effort */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.primary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.continuing_effort.header}</Styled.h2>
          </div>
        </Section>
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [3, 3, 4, 16],
            mb: [8, 8, 8, 12],
            ...theme.components.section.two.primary,
          }}
        >
          <TextBlockAndLinks content={{ ...props.continuing_effort }} />
        </Section>
      </GridContainer>

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
