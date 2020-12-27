/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Carousel = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      variant="pages.home.carousel"
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        ref={ref}
        sx={{
          variant: "grid",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{
            duration: 0.35,
            type: "tween",
          }}
          className="toptext"
        >
          <Styled.h2>
            1 million insights. <br />
            And a whole lot more.
          </Styled.h2>
        </motion.div>

        <CarouselMain />
      </div>
    </InView>
  );
};

export default Carousel;
