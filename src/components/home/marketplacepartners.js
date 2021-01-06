/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Circles from "./circles";
import LearnMoreLink from "../learnmorelink";
import { ReactSVG } from "react-svg";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useStat, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, animationControls } from "framer-motion";
import { globalSlideUp } from "../../helpers/animations";

const MarketPlacePartners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, body, buttonText, url } = content;
  const animationControls = useAnimation();
  const { inView, ref } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => globalSlideUp.visible(i));
    }
  }, [inView]);

  return (
    <InView
      variant="pages.home.marketplacepartners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="MPP"
      >
        <motion.div className="MPP__graphics">
          <div className="MPP__graphics-background">
            <div className="MPP__graphics-background-circles">
              <motion.svg
                className="MPP__graphics-background-circles-circle"
                width="463"
                height="465"
                viewBox="0 0 463 465"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M463 232.179C463 103.735 359.494 0.00488405 231.326 0.00488558L231.326 464.005C359.494 464.005 463 360.275 463 232.179Z"
                  fill="#A4F0F4"
                />
                <path
                  d="M-0.00312528 232.179C-0.00312376 360.275 103.503 464.353 231.67 464.353L231.323 0.00488282C103.503 0.00488434 -0.00312681 103.735 -0.00312528 232.179Z"
                  fill="#F9D2FF"
                />
                <path
                  d="M64.2596 296.578C64.2596 389.169 138.937 464.008 231.329 464.008L231.329 129.148C139.284 129.148 64.2596 203.987 64.2596 296.578Z"
                  fill="#335AFF"
                />
                <motion.path
                  d="M334.135 232.182C334.135 175.444 287.939 129.148 231.323 129.148L231.323 335.216C288.286 335.216 334.135 288.92 334.135 232.182Z"
                  fill="#FFD93B"
                />
              </motion.svg>
            </div>
          </div>
        </motion.div>
        <div ref={ref} className="MPP__text">
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={1}
            className="MPP__text-header"
          >
            <Styled.h2 className="MPP__text-header-text">{header}</Styled.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={2}
            className="MPP__text-body"
          >
            <Styled.p className="MPP__text-body-text">
              {lineBreaks(body)}
            </Styled.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={3}
            className="MPP__link"
          >
            <LearnMoreLink href={url} text={buttonText} color="#335AFF" />
          </motion.div>
        </div>
      </div>
    </InView>
  );
};

export default MarketPlacePartners;
