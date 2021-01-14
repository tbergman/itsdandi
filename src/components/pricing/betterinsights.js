/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Table from "./table";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../src/helpers/animations";

const BetterInsights = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  width,
  content,
}) => {
  const { body, header, head_item1, head_item2, row_data } = content;
  const animationControls = useAnimation();

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => {
        return globalSlideUp.visible(i);
      });
    }
  }, [inView]);

  return (
    <InView
      variant="pages.pricing.betterinsights"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      className="BetterInsights"
    >
      <div
        ref={ref}
        sx={{
          variant: "grid",
        }}
      >
        <div className="BetterInsights__toptext">
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={0}
            className="BetterInsights__toptext-header"
          >
            <Styled.h2 className="BetterInsights__toptext-header-text">
              {header}
            </Styled.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={1}
            className="BetterInsights__toptext-body"
          >
            <Styled.p className="BetterInsights__toptext-body-text">
              {lineBreaks(body)}
            </Styled.p>
          </motion.div>
        </div>
        <Table width={width} content={content} />
      </div>
    </InView>
  );
};

export default BetterInsights;
