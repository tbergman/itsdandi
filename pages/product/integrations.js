/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/product/integrations/header";
import Connections from "../../src/components/product/integrations/connections";
import Secure from "../../src/components/product/integrations/secure";
import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctx = useThemeUI();
  const { theme } = ctx;
  const subPages = [
    "Measure",
    "Analyze",
    "Collaborate",
    "Security",
    "Integrations",
  ];
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
      <Connections />
      <Secure />
      <SubNavigation subPages={subPages} />
      <Footer />
    </div>
  );
};

export default Product;
