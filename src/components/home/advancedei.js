/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../helpers/animations";

const AdvanceDEI = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, body, buttonText, url } = content;
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
      rootMargin={rootMargin(isDesktop, windowHeight)}
      variant="pages.home.advancedei"
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="AdvanceDEI"
      >
        <div ref={ref} className="AdvanceDEI__text">
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={1}
            className="AdvanceDEI__text-header"
          >
            <Styled.h2 className="AdvanceDEI__text-header-text">
              {header}
            </Styled.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={2}
            className="AdvanceDEI__text-body"
          >
            <Styled.p className="AdvanceDEI__text-body-text">
              {lineBreaks(body)}
            </Styled.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={3}
            className="AdvanceDEI__link"
          >
            <LearnMoreLink href={url} text={buttonText} color="#1A1A1D" />
          </motion.div>
        </div>
        <motion.div className="AdvanceDEI__graphics">
          <motion.div className="AdvanceDEI__graphics-box1"></motion.div>
          <motion.div className="AdvanceDEI__graphics-box2"></motion.div>
          <motion.div className="AdvanceDEI__graphics-box3"></motion.div>
        </motion.div>
      </div>
    </InView>
  );
};

export default AdvanceDEI;
