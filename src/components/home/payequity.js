/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../helpers/animations";
import { useInView } from "react-intersection-observer";

const PayEquity = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, body, buttonText, desktopImage, mobileImage, url } = content;
  const animationControls = useAnimation();
  const { inView, ref } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => globalSlideUp.visible(i));
    }
  }, [inView]);

  return (
    <InView
      variant="pages.home.payequity"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="PayEquity"
      >
        <motion.div ref={ref} className="PayEquity__text">
          <motion.div
            variants={globalSlideUp}
            initial="hidden"
            animate={animationControls}
            custom={1}
            className="PayEquity__text-header"
          >
            <Styled.h2 className="PayEquity__text-header-text">
              {header}
            </Styled.h2>
          </motion.div>

          <motion.div
            variants={globalSlideUp}
            initial="hidden"
            animate={animationControls}
            custom={2}
            className="PayEquity__text-body"
          >
            <Styled.p className="PayEquity__text-body-text">
              {lineBreaks(body)}
            </Styled.p>
          </motion.div>

          <motion.div
            variants={globalSlideUp}
            initial="hidden"
            animate={animationControls}
            custom={3}
            className="PayEquity__text-link"
          >
            <LearnMoreLink href={url} text={buttonText} color="#335AFF" />
          </motion.div>
        </motion.div>
        <div className="PayEquity__imageWrapper">
          <picture>
            <source media="(min-width: 800px)" srcSet={desktopImage}></source>
            <source srcSet={mobileImage}></source>
            <img
              className="PayEquity__imageWrapper-image"
              src={desktopImage}
              alt=""
            />
          </picture>
        </div>
      </div>
    </InView>
  );
};

export default PayEquity;
