/** @jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";

import { motion, useMotionValue, useTransform } from "framer-motion";

const Home = () => {
  return (
    <div
      sx={{
        variant: "wrapper",
      }}
    >
      <Navigation />
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: 200,
          top: 0,
          bottom: 200,
        }}
        animate={{
          scale: 1.5,
        }}
        transition={{
          duration: 0.8,
        }}
        sx={{
          width: "200px",
          height: "200px",
          borderRadius: "30px",
          margin: "200px auto",
          bg: "turquoise",
          transition: "background 200ms linear",
          "&:hover": {
            bg: "lightTurquoise",
          },
        }}
      ></motion.div>
      <Footer />
    </div>
  );
};

export default Home;
