/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { globalSlideUp } from "../../helpers/animations";

const Carousel = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, description, items } = content;
  const animationControls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => globalSlideUp.visible(i));
    }
  }, [inView]);

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
        className="Carousel"
      >
        <motion.div
          variants={globalSlideUp}
          initial="hidden"
          animate={animationControls}
          custom={1}
          className="Carousel__toptext"
        >
          <Styled.h2 className="Carousel__toptext-header">
            {lineBreaks(header)}
          </Styled.h2>
        </motion.div>

        <CarouselMain description={description} items={items} inView={inView} />
      </div>
    </InView>
  );
};

export default Carousel;
