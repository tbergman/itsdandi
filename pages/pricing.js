/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Header from "../src/components/pricing/header";
import Cost from "../src/components/pricing/cost";
import BetterInsights from "../src/components/pricing/betterinsights";
import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../src/components/mobilenav";

const Pricing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctx = useThemeUI();
  const { theme } = ctx;
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];
  return (
    <div
      sx={{
        bg: "#fff",
      }}
    >
      <Navigation />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <Header />
      <Cost />
      <BetterInsights />
      <Footer />
    </div>
  );
};

export default Pricing;
