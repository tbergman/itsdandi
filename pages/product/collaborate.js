/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/product/collaborate/header";
import DeiWork from "../../src/components/product/collaborate/deiwork";
import Customizable from "../../src/components/product/collaborate/customizable";
import { subPages } from "../../src/helpers/product/subpages";
import pages from "../../src/helpers/product/pages";
import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";
import SubMenu from "../../src/components/submenu";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useThemeUI();
  const subPages_ = subPages({
    pages,
    currentIndex: 2,
    nextBg: "yellow",
    prevBg: "turquoise",
  });

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
      <Navigation current="product" />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <SubMenu navBarStyling={navBarStyling} subPages={subPages_.subPages} />
      <Header />
      <DeiWork />
      <Customizable />
      <SubNavigation next={subPages_.next} prev={subPages_.prev} />
      <Footer />
    </div>
  );
};

export default Product;
