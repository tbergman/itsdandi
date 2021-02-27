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
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import { useState, useEffect } from "react";
import Butter from "buttercms";
import { isServer } from "../../src/helpers/utils";

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

const Community = (props) => {
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

  const subPages_ = subPages({ pages, currentIndex: 0, nextBg: "#FFB7B7" });
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
        staticDemoBtn={true}
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
            `calc(calc(calc(calc(${theme.colWidthMob} * 3) + 40px) * .88) + 8px)`,
            16,
          ],
        }}
      >
        {!isServer() && <TopContent />}
      </Header>
      <People
        subMenuStyling={theme.components.submenu.variants.white}
        setSubMenuStyling={setSubMenuStyling}
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        windowHeight={windowHeight}
        content={{
          ...props.better,
        }}
      />

      <SubNavigation
        next={subPages_.next}
        prev={{
          name: "Pricing",
          url: "/pricing",
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
    const response = await butter.page.retrieve("*", "community_board");

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
