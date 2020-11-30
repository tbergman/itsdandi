/** @jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Top from "../src/components/home/top";
import LearnMore from "../src/components/home/learnmore";
import Carousel from "../src/components/home/carousel";
import PayEquity from "../src/components/home/payequity";
import Partners from "../src/components/home/partners";
import AdvanceDEI from "../src/components/home/advancedei";
import Quotes from "../src/components/home/quotes";
import MarketPlacePartners from "../src/components/home/marketplacepartners";
import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../src/components/mobilenav";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      sx={{
        variant: "wrapper",
      }}
    >
      <Navigation />
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Top />
      <LearnMore />
      <Carousel />
      <PayEquity />
      <Partners />
      <AdvanceDEI />
      <Quotes />
      <MarketPlacePartners />
      <Footer />
    </div>
  );
};

export default Home;
