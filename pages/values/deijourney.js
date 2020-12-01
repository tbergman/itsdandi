/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/values/subnavigation";
import Header from "../../src/components/values/deijourney/header";
import GettingStarted from "../../src/components/values/deijourney/gettingstarted";

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
      <Navigation />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <Header />
      <GettingStarted />

      <SubNavigation subPages={subPages} />
      <Footer />
    </div>
  );
};

export default Home;
