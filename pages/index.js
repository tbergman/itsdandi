/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Top from "../src/components/home/top";
import LearnMore from "../src/components/home/learnmore";
import Carousel from "../src/components/home/carousel";
import PayEquity from "../src/components/home/payequity";
import MobileMenu from "../src/components/mobilemenu";
import Partners from "../src/components/home/partners";
import AdvanceDEI from "../src/components/home/advancedei";
import Quotes from "../src/components/quotes";
import MarketPlacePartners from "../src/components/home/marketplacepartners";
import { useMediaQuery } from "react-responsive";
import devices from "../src/helpers/devices";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { useWindowSize } from "@react-hook/window-size";
import { isServer } from "../src/helpers/utils";
import MobileNav from "../src/components/mobilenav";
import SubNavigation from "../src/components/subnavigation";

const Home = (props) => {
  const { theme } = useThemeUI();
  const isDesktop = useMediaQuery({ query: devices.desktop });
  const [width, height] = useWindowSize();
  const currentPage = {
    main: "home",
    sub: "home",
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(500);
  const [staticLogo, setStaticLogo] = useState(false);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navBarVariants.default,
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
        bg: "black",
      }}
    >
      <Navigation
        current={currentPage.main}
        navBarStyling={navBarStyling}
        staticLogo={staticLogo}
        setStaticLogo={setStaticLogo}
        width={width}
        isServer={isServer()}
        isDesktop={isDesktop}
      />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navBarStyling={navBarStyling}
        width={width}
        staticLogo={staticLogo}
        setStaticLogo={setStaticLogo}
        staticDemoBtn={false}
      />
      <MobileMenu
        menuOpen={menuOpen}
        navBarStyling={navBarStyling}
        currentPage={currentPage.main}
      />
      <Top
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.default}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        content={{
          header: props.header,
          buttonText: props.button_text,
        }}
      />

      <LearnMore
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.violet}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        content={{
          header: props.learn_more[0].fields.header,
          body: props.learn_more[0].fields.body,
          desktopImage: props.learn_more[0].fields.desktop_image,
          mobileImage: props.learn_more[0].fields.mobile_image,
          buttonText: props.learn_more[0].fields.button_text,
          url: props.learn_more[0].fields.url,
        }}
      />
      <Carousel
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.default}
        windowHeight={windowHeight}
        isDesktop={isDesktop}
        content={{
          header: props.carousel_header,
          description: props.carousel_description,
          items: props.carousel_items,
        }}
      />
      <PayEquity
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.gray}
        isDesktop={isDesktop}
        content={{
          header: props.pay_equity[0].fields.header,
          body: props.pay_equity[0].fields.body,
          buttonText: props.pay_equity[0].fields.button_text,
          desktopImage: props.pay_equity[0].fields.desktop_image,
          mobileImage: props.pay_equity[0].fields.mobile_image,
          url: props.pay_equity[0].fields.url,
        }}
      />
      <Partners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.white}
        width={width}
        isServer={isServer()}
        isDesktop={isDesktop}
        content={{
          header: props.partner_header,
          logosRow1: props.row1_logos,
          logosRow2: props.row2_logos,
        }}
      />

      <AdvanceDEI
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.lightTurquoise}
        isDesktop={isDesktop}
        content={{
          header: props.advance_dei[0].fields.header,
          body: props.advance_dei[0].fields.body,
          buttonText: props.advance_dei[0].fields.button_text,
          url: props.advance_dei[0].fields.url,
        }}
      />

      <Quotes
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.gray2}
        isDesktop={isDesktop}
        isServer={isServer()}
        content={{
          quotes: props.quotes,
        }}
      />

      <MarketPlacePartners
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        navBarStyling={theme.components.navBarVariants.white}
        isDesktop={isDesktop}
        content={{
          header: props.marketplace_partners[0].fields.header,
          body: props.marketplace_partners[0].fields.body,
          url: props.marketplace_partners[0].fields.url,
          buttonText: props.marketplace_partners[0].fields.button_text,
        }}
      />
      {/* <SubNavigation
        next={{
          name: "Why Dandi?",
          url: "values/deimetrics",
          bg: "violet",
        }}
      /> */}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);

    const response = await butter.page.retrieve("*", "home");

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

export default Home;
