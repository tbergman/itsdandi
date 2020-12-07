/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/values/payequity/header";
import Compensation from "../../src/components/values/payequity/compensation";
import Reports from "../../src/components/values/payequity/reports";
import Quote from "../../src/components/quote";
import Affordable from "../../src/components/values/payequity/affordable";
import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctx = useThemeUI();
  const { theme } = ctx;
  const subPages = ["Pay Equity", "The DEI Journey", "For Your Role"];
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];
  return (
    <div
      sx={{
        bg: "#FFF",
      }}
    >
      <Navigation current="values" />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <Header />
      <Compensation />
      <Reports />
      <Quote
        imageUrl="/assets/images/tamarcus-brown.png"
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus &
            equity`}
        name={`Name Namesson`}
        title={`Title, Company`}
        bg="#FAFAFA"
      />
      <Affordable />
      <SubNavigation subPages={subPages} />
      <Footer />
    </div>
  );
};

export default Home;
