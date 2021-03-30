/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import TopContent from "../../src/components/product/datacollection/topcontent";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { isServer, lineBreaks } from "../../src/helpers/utils";
import GridContainer from "../../src/components/gridcontainer";
import Section from "../../src/components/section";

import MobileNav from "../../src/components/mobilenav";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";
import FreeContainer from "../../src/components/freecontainer";
import VideoSection from "../../src/components/videosection";
import QuoteText from "../../src/components/quotetext";
import QuoteImage from "../../src/components/quoteimage";
import LearnMoreLink from "../../src/components/learnmorelink";
import SimpleList from "../../src/components/simplelist";
import LinkList from "../../src/components/linklist";
import React from "react";

const DataCollection = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "product",
    sub: "datacollection",
  };
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
  const [windowHeight, setWindowHeight] = useState(500);
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
    currentIndex: 2,
    nextBg: "yellow",
    prevBg: "turquoise",
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
        content={{
          ...props.header,
        }}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.gray}
        windowHeight={windowHeight}
        bg="#F8F8F8"
        styling={{
          mb: [12, 23],
        }}
      >
        {!isServer() && (
          <TopContent
            isDesktop={isDesktop}
            content={{
              ...props.header,
            }}
          />
        )}
      </Header>

      {/* Collect */}
      <GridContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        setSubMenuStyling={setSubMenuStyling}
        navBarStyling={theme.components.navBarVariants.white}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [8, 16],
            ...theme.components.section.one.secondary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.collect.header}</Styled.h2>
          </div>
        </Section>
        <Section
          styling={{
            mt: [3, 16],
            mb: [4, 12],
            ...theme.components.section.two.primary,
          }}
        >
          <Styled.p
            sx={{
              fontSize: ["16px", "24px !important"],
              lineHeight: ["24px", "31.2px !important"],
              mb: [3],
            }}
          >
            {props.collect.body_title}
          </Styled.p>
          <SimpleList list={props.collect.list} />
          <LinkList links={props.collect.links} />
        </Section>
      </GridContainer>

      {/* Static Image */}
      <FreeContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.default}
        navBarStyling={theme.components.navBarVariants.default}
        windowHeight={windowHeight}
        bg={theme.colors.black}
      >
        <Section
          styling={{
            py: [10],
            ...theme.components.section.fullScreen,
          }}
        >
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              sx={{
                width: ["100vw", "1200px"],
                height: ["calc(100vw * .54)", "calc(1200px * .54)"],
                position: "relative",
              }}
              className="noOverflow"
            >
              <picture className="containedPicture">
                <source
                  media="(min-width: 800px)"
                  srcSet={props.image.desktop_image}
                ></source>
                <source srcSet={props.imagemobile_image}></source>
                <img src={props.image.desktop_image} alt="" />
              </picture>
            </div>
          </div>
        </Section>
      </FreeContainer>

      {/* Quote */}
      <GridContainer
        isDesktop={isDesktop}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray2}
        windowHeight={windowHeight}
        bg={theme.colors.white}
      >
        {/* Change order depending on device */}

        <Section
          styling={{
            ...theme.components.section.one.quote,
          }}
          shouldSlideUp={true}
        >
          <QuoteText content={{ ...props.quote }} />
        </Section>
        <Section
          styling={{
            ...theme.components.section.two.quote,
          }}
        >
          <QuoteImage content={{ ...props.quote }} />
        </Section>
      </GridContainer>

      {/* Support */}
      <GridContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        setSubMenuStyling={setSubMenuStyling}
        navBarStyling={theme.components.navBarVariants.white}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
      >
        <Section
          shouldSlideUp={true}
          styling={{
            mt: [8, 16],
            ...theme.components.section.one.secondary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.support.header}</Styled.h2>
          </div>
        </Section>
        <Section
          styling={{
            mt: [3, 16],
            mb: [4, 12],
            ...theme.components.section.two.primary,
          }}
        >
          <Styled.p
            sx={{
              fontSize: ["16px", "24px !important"],
              lineHeight: ["24px", "31.2px !important"],
              mb: [3],
            }}
          >
            {props.support.body_title}
          </Styled.p>
          <SimpleList list={props.support.list} />
          <LinkList links={props.support.links} />
        </Section>
      </GridContainer>

      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "product_datacollection");

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

export default DataCollection;
