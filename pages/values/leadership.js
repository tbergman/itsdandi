/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/header";
import TopImage from "../../src/components/values/leadership/topimage";
import TextModules from "../../src/components/values/leadership/textmodules";
import Quote from "../../src/components/quote";
import SubMenu from "../../src/components/submenu";
import { useState, useEffect } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";

const Values = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const [windowHeight, setWindowHeight] = useState(500);
  const [navBarStyling, setNavbarStyling] = useState({
    ...theme.components.navigation.white,
  });
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const subPages = [
    {
      name: "Pay Equity",
      url: "/values/equitypay",
    },
    {
      name: "The DEI Journey",
      url: "/values/deijourney",
    },
    {
      name: "For Your Role",
      url: "/values/leadership",
      current: true,
    },
  ];
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];

  const modules = [
    {
      title: `Leadership`,
      body: `CEOs, boards, and other top-level executives are increasingly being challenged to drive real action on DEI. By providing on-demand access to rich DEI insights, Dandi helps leaders build greater awareness, accountability, and alignment throughout their organizations.`,
      linkText: `Dandi helps businesses track and measure their DEI efforts.`,
      linkUrl: "/",
    },
    {
      title: `HR + Talent`,
      body: `As the teams responsible for building their company’s workforce and culture, HR and talent are often on the front lines of DEI efforts. By providing over 1 million new insights into every aspect of the talent management cycle, Dandi makes it easier to see what’s working and improve what isn’t.`,
      linkText: `Dandi provides greater insight into the talent management lifecycle.`,
      linkUrl: "/",
    },
    {
      title: `Compensation`,
      body: `Equal pay for equal work. It sounds simple, but compensation teams know that it’s a tricky thing to get right. With sophisticated wage gap analysis built right in, Dandi makes it easier to find and address pay discrepancies`,
      linkText: `Dandi helps advance pay equity`,
      linkUrl: "/",
    },
    {
      title: `Analytics`,
      body: `Often one of the most in-demand teams in a business, it can be hard for analytics teams to give DEI the attention it deserves. But with Dandi analytics added to the mix, analytics teams don’t have to choose between working on DEI and other business problems. `,
      linkText: `Dandi delivers advanced analytics with minimal investment.`,
      linkUrl: "/",
    },
  ];

  return (
    <div
      sx={{
        bg: "#FFF",
      }}
    >
      <Navigation current="values" styling={navBarStyling} />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <SubMenu subPages={subPages} navBarStyling={navBarStyling} />
      <Header
        title={`Work’s better with Dandi`}
        body={`Whether you’re a DEI practitioner or a leader in another part of the business, our tools can also help you do more every day.`}
        setNavbarStyling={setNavbarStyling}
        windowHeight={windowHeight}
        styling={{
          mb: [0, "360px"],
        }}
      >
        <TopImage />
      </Header>
      <TextModules modules={modules} />
      <Quote
        imageUrl={"/assets/images/tamarcus-brown.png"}
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity`}
        name={`Name Namesson`}
        title={`Title, Company`}
        bg={theme.colors.yellow}
      />
      <SubNavigation
        next={{
          name: "Pay Equity",
          url: "/values/equitypay",
          bg: theme.colors.blue,
          goBack: true,
        }}
        prev={{
          name: "The DEI Journey",
          url: "/values/deijourney",
          bg: theme.colors.violet,
        }}
      />
      <Footer />
    </div>
  );
};

export default Values;
