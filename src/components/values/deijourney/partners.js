/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";

const Partners = ({
  setNavbarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  navBarStyling,
  isDesktop,
}) => {
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
      variant="pages.values.deijourney.partners"
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
          sx={{
            variant: "grid",
          }}
          className="Partners"
        >
          <div className="Partners__graphic">
            <ReactSVG src="/assets/svgs/deijourneypartnersGraphic.svg" />
          </div>
          <motion.div ref={ref} className="Partners__text">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="Partners__text-header"
            >
              <Styled.h2 className="Partners__text-header-text">
                Partners in transformation
              </Styled.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Partners__text-body"
            >
              <Styled.p className="Partners__text-body-text">
                Dandi’s Marketplace Partners are here to help you navigate the
                challenges you meet along the way.
              </Styled.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Partners__link"
            >
              <LearnMoreLink href="/" text="Learn more" color="#335AFF" />
            </motion.div>
          </motion.div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Partners;
