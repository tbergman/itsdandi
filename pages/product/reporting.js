/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/product/pages";
import TopContent from "../../src/components/product/reporting/topcontent";
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
import SimpleList from "../../src/components/simplelist";
import LinkList from "../../src/components/linklist";

const Reporting = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "product",
    sub: "reporting",
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
    currentIndex: 1,
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
          mb: [12, 12, 12, 23],
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

      {/* Dashboards */}
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
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.secondary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.dashboards.header}</Styled.h2>
          </div>
        </Section>
        <Section
          styling={{
            mt: [3, 3, 4, 16],
            mb: [8, 8, 8, 12],
            ...theme.components.section.two.primary,
          }}
        >
          <Styled.p
            sx={{
              fontSize: ["16px", "24px !important"],
              lineHeight: ["24px", "31.2px !important"],
            }}
          >
            {lineBreaks(props.dashboards.body_title)}
          </Styled.p>
          <SimpleList list={props.dashboards.list} />
        </Section>
      </GridContainer>

      {/* Video One */}
      <FreeContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        setSubMenuStyling={setSubMenuStyling}
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
          <VideoSection
            content={{
              ...props.video1,
              video_url: "/assets/videos/Reporting-1.mp4",
            }}
          />
        </Section>
      </FreeContainer>

      {/* Report Builder */}
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
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.secondary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.report_builder.header}</Styled.h2>
          </div>
        </Section>
        <Section
          styling={{
            mt: [3, 3, 4, 16],
            mb: [8, 8, 8, 12],
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
            {props.report_builder.body_title}
          </Styled.p>
          <SimpleList list={props.report_builder.list} />
          <LinkList links={props.report_builder.links} />
        </Section>
      </GridContainer>

      {/* Video Two */}
      <FreeContainer
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        setSubMenuStyling={setSubMenuStyling}
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
          <VideoSection
            content={{
              ...props.video2,
              video_url: "/assets/videos/Reporting-2.mp4",
            }}
          />
        </Section>
      </FreeContainer>

      {/* Roles & Permissions */}
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
            mt: [8, 8, 8, 16],
            ...theme.components.section.one.secondary,
          }}
        >
          <div className="slideUp">
            <Styled.h2>{props.roles.header}</Styled.h2>
          </div>
        </Section>
        <Section
          styling={{
            mt: [3, 3, 4, 16],
            mb: [8, 8, 8, 12],
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
            {props.roles.body_title}
          </Styled.p>
          <SimpleList list={props.roles.list} />
        </Section>
      </GridContainer>

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
        <Section
          shouldSlideUp={true}
          styling={{
            py: [0, 0, 0, 20],
            ...theme.components.section.one.quote,
          }}
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

      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "product_reporting");

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

export default Reporting;
