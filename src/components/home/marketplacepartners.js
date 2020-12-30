/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Circles from "./circles";
import LearnMoreLink from "../learnmorelink";
import { ReactSVG } from "react-svg";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useStat, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const MarketPlacePartners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, body, buttonText, url } = content;
  const controls = useAnimation();
  const { inView, ref } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        transition: {
          duration: 1,
          delay: 1,
        },
      });
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
        ref={ref}
        sx={{
          variant: "grid",
        }}
      >
        <motion.div className="graphics">
          <div className="background">
            <div className="circles">
              <motion.svg
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
        <div className="text">
          <Styled.h2>{header}</Styled.h2>
          <Styled.p>{lineBreaks(body)}</Styled.p>
          <div className="link">
            <LearnMoreLink href={url} text={buttonText} color="#335AFF" />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default MarketPlacePartners;
