/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InsightsCircle from "./insightscircle";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Insights = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body, lock_title, lock_body, button_text, url } = content;

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
      variant="pages.product.analyze.insights"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          ref={ref}
          sx={{
            variant: "grid",
          }}
        >
          <motion.div
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={0}
            className="top"
          >
            <Styled.h2>{header}</Styled.h2>
          </motion.div>

          <div className="middle">
            <div className="section1">
              <InsightsCircle />
            </div>
            <div className="section2">
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={1}
                className="text"
              >
                <Styled.p>{lineBreaks(body)}</Styled.p>
              </motion.div>
            </div>
          </div>

          <div className="bottom">
            <div className="lockWrapper">
              <ReactSVG src="/assets/svgs/lock.svg" />
            </div>
            <div className="text">
              <Styled.h3>{lock_title}</Styled.h3>
              <Styled.p>{lock_body}</Styled.p>
              <div className="link">
                <LearnMoreLink href={url} text={button_text} color="#A4F0F4" />
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Insights;
