/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Carousel = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, description, items } = content;

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
          <Styled.h2>{lineBreaks(header)}</Styled.h2>
        </motion.div>

        <CarouselMain description={description} items={items} />
      </div>
    </InView>
  );
};

export default Carousel;
