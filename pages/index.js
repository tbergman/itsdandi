/** @jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";
import Top from "../src/components/home/top";

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
      <Footer />
    </div>
  );
};

export default Home;
