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
import MarketPlacePartners from "../src/components/home/marketplacepartners";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../src/components/mobilenav";

const Home = () => {
  return (
    <div
      sx={{
        variant: "wrapper",
      }}
    >
      <Navigation />
      <MobileNav />
      <Top />
      <LearnMore />
      <Carousel />
      <PayEquity />
      <Partners />
      <AdvanceDEI />
      <MarketPlacePartners />
      <Footer />
    </div>
  );
};

export default Home;
