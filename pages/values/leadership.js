/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import TopImage from "../../src/components/values/leadership/topimage";
import TextModules from "../../src/components/values/leadership/textmodules";
import Quote from "../../src/components/quote";
import SubMenuMobile from "../../src/components/navigation/submenumobile";
import SubMenuDesktop from "../../src/components/navigation/submenudesktop";
import pages from "../../src/helpers/values/pages";
import { subPages } from "../../src/helpers/subpages";
import { useState, useEffect } from "react";
import Butter from "buttercms";

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
import { findLastIndex } from "ramda";

const Values = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const currentPage = {
    main: "values",
    sub: "leadership",
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
    nextBg: "blue",
    prevBg: "violet",
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
        width={width}
        staticDemoBtn={false}
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
        content={{
          header: props.header.header,
          body: props.header.body,
        }}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.white}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        bg="#FFF"
        windowHeight={windowHeight}
        styling={{
          mb: [
            `calc(calc(calc(calc(100vw - 20px) * .6) * .7) + 32px)`,
            `calc(calc(calc(calc(calc(${theme.colWidthDesktop} * 10) +  400px) * .46) * .5) + 115px)`,
            `calc(calc(calc(calc(calc(calc(${theme.colWidthDesktopBig} * 10) +  360px) + ${theme.desktopBigGutters}) * .46) * .5) + 115px)`,
            `calc(calc(calc(calc(calc(calc(${theme.colWidthDesktopMassive} * 10) +  360px) + ${theme.desktopMassiveGutters}) * .46) * .5) + 115px)`,
          ],
        }}
      >
        <TopImage
          images={{
            desktop: props.header.desktop_image,
            mobile: props.header.mobile_image,
          }}
        />
      </Header>
      <TextModules
        isDesktop={isDesktop}
        modules={props.text_modules.modules}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
      />
      <Quote
        isDesktop={isDesktop}
        setNavbarStyling={setNavbarStyling}
        navBarStyling={theme.components.navBarVariants.gray}
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={theme.components.submenu.variants.white}
        windowHeight={windowHeight}
        content={{
          ...props.quote,
        }}
        bg="yellow"
      />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const butter = Butter(process.env.BUTTER_CMS);
    const response = await butter.page.retrieve("*", "values_leadership");

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
