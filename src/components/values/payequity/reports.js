/** @jsx jsx */
import { motion, useAnimation } from "framer-motion";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";
import { useInView } from "react-intersection-observer";

const Reports = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
  content,
}) => {
  const { header, body_section1, body_section2 } = content;
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
      variant="pages.values.payequity.reports"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <motion.div ref={ref} className="text">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="heading"
            >
              <Styled.h2>{header}</Styled.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="body"
            >
              <div className="section1">
                <Styled.p>{lineBreaks(body_section1)}</Styled.p>
              </div>
              <div className="section2">
                <Styled.p>{lineBreaks(body_section2)}</Styled.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Reports;
