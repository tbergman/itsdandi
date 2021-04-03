/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import Onboarding from "../../src/components/community/support/onboarding";
import GetCreative from "../../src/components/community/support/getcreative";
import TopContent from "../../src/components/community/support/topcontent";
import { subPages } from "../../src/helpers/subpages";
import pages from "../../src/helpers/community/pages";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { isServer } from "../../src/helpers/utils";

import Quotes from "../../src/components/quotes";

import MobileNav from "../../src/components/mobilenav";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import MobileMenu from "../../src/components/mobilemenu";
import { useMediaQuery } from "react-responsive";
import devices from "../../src/helpers/devices";
import { useWindowSize } from "@react-hook/window-size";

const Community = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "community",
    sub: "support",
  };
  const [width, height] = useWindowSize();
  const [staticLogo, setStaticLogo] = useState(true);
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
  const subPages_ = subPages({
    pages,
    currentIndex: 2,
    nextBg: "#A8F1F4",
    prevBg: "#FFB7B7",
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
      />
      <SubMenuDesktop
        subPages={subPages_.subPages}
        subMenuStyling={subMenuStyling}
      />
      <Header
        isDesktop={isDesktop}
        subMenuStyling={theme.components.submenu.variants.white}
        setSubMenuStyling={setSubMenuStyling}
        content={{
          ...props.header,
        }}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
        bg="#FFF"
        styling={{
          mb: [
            `calc(calc(calc(calc(100vw - 20px) * .6) *  .7) + 32px)`,
            `calc(calc(calc(calc(100vw - 20px) * .6) *  .7) + 32px)`,
            `calc(calc(calc(calc(100vw - 20px) * .6) *  .7) + 32px)`,
            `calc(calc(calc(calc(calc(${theme.colWidthDesktop} * 10) + 400px) * .45) * .5) + 92px)`,
          ],
        }}
      >
        <TopContent />
      </Header>
      <Onboarding
        isDesktop={isDesktop}
        subMenuStyling={theme.components.submenu.variants.white}
        setSubMenuStyling={setSubMenuStyling}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        content={props.onboarding}
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

      <GetCreative
        isDesktop={isDesktop}
        subMenuStyling={theme.components.submenu.variants.white}
        setSubMenuStyling={setSubMenuStyling}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        windowHeight={windowHeight}
        content={props.get_creative}
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "community_support");

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

export default Community;
