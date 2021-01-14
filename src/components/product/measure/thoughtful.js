/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import devices from "../../../helpers/devices";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { framer, motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Thoughtful = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const {
    header,
    body_section1,
    body_section2,
    link_description,
    links,
  } = content;

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
      variant="pages.product.measure.thoughtful"
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
          className="Thoughtful"
        >
          <div className="Thoughtful__section1">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="Thoughtful__section1-header"
            >
              <Styled.h2 className="Thoughtful__section1-header-text">
                {header}
              </Styled.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Thoughtful__section1-body"
            >
              <Styled.p className="Thoughtful__section1-body-text">
                {lineBreaks(body_section1)}
              </Styled.p>
            </motion.div>
          </div>
          <div className="Thoughtful__section2">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Thoughtful__section2-body"
            >
              <Styled.p className="Thoughtful__section2-body-text">
                {lineBreaks(body_section2)}
              </Styled.p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={2}
              className="Thoughtful__section2-team"
            >
              <div className="Thoughtful__section2-team-divider">
                <span />
              </div>
              <div className="Thoughtful__section2-team-header">
                <Styled.p className="Thoughtful__section2-team-header-text">
                  {link_description}
                </Styled.p>
              </div>
              <div className="Thoughtful__section2-team-links">
                {links.map((link, i) => (
                  <LearnMoreLink
                    key={i}
                    href={link.url}
                    text={link.button_text}
                    color="#335AFF"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Thoughtful;
