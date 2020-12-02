/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/product/measure/header";
import Metrics from "../../src/components/product/measure/metrics";
import Quote from "../../src/components/quote";
import WhyMeasure from "../../src/components/product/measure/whymeasure";
import Intersectional from "../../src/components/product/measure/intersectional";
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
      <Metrics />
      <Quote
        imageUrl={`/assets/images/tamarcus-brown.png`}
        text={`Dandi measures comp the right way. Adjusted wage gap, base, bonus & equity
`}
        name={`Name Namesson`}
        title={`Ceo, Company`}
        color={theme.colors.white}
      />
      <WhyMeasure />
      <Intersectional />
      <SubNavigation subPages={subPages} />
      <Footer />
    </div>
  );
};

export default Product;
