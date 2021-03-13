/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import { rootMargin, lineBreaks } from "../../helpers/utils";
import useWindowScroll from "@react-hook/window-scroll";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { globalSlideUp } from "../../helpers/animations";
import TextParallax from "./textparallax";

const LearnMore = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, buttonText, body, desktopImage, mobileImage, url } = content;
  const animation = useAnimation();
  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start((i) => {
        return globalSlideUp.visible(i);
      });
    }
  }, [inView]);

  return (
    <InView
      variant="pages.home.learnmore"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        id="learnmore"
        className="LearnMore"
      >
        {/* <TextParallax /> */}
        <div className="LearnMore__imageWrapper noOverflow">
          <picture>
            <source media="(min-width: 800px)" srcSet={desktopImage}></source>
            <source srcSet={mobileImage}></source>
            <img
              className="LearnMore__imageWrapper-image"
              src={desktopImage}
              alt=""
            />
          </picture>
        </div>
        <motion.div ref={ref} className="LearnMore__text">
          <motion.div
            initial="hidden"
            custom={1}
            animate={animation}
            variants={globalSlideUp}
            className="LearnMore__text-header"
          >
            <Styled.h2>{header}</Styled.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            custom={2}
            animate={animation}
            variants={globalSlideUp}
            className="LearnMore__text-link"
          >
            <LearnMoreLink href={url} text={buttonText} color="black" />
          </motion.div>

          <motion.div
            initial="hidden"
            custom={3}
            animate={animation}
            variants={globalSlideUp}
            className="LearnMore__text-body"
          >
            <Styled.p>{lineBreaks(body)}</Styled.p>
          </motion.div>
        </motion.div>
      </div>
    </InView>
  );
};

export default LearnMore;
