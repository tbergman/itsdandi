/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";

const Secure = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body, button_text, url } = content;
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
      variant="pages.product.integrations.secure"
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
          className="Secure"
        >
          <div className="Secure__wrapper">
            <div ref={ref} className="Secure__wrapper-text">
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={0}
                className="Secure__wrapper-text-header"
              >
                <Styled.h2 className="Secure__wrapper-text-header-text">
                  {header}
                </Styled.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={1}
                className="Secure__wrapper-text-body"
              >
                <Styled.p className="Secure__wrapper-text-body-text">
                  {lineBreaks(body)}
                </Styled.p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={2}
                className="Secure__wrapper-link"
              >
                <LearnMoreLink href={url} text={button_text} color="#335AFF" />
              </motion.div>
            </div>
          </div>

          <div className="Secure__graphic">
            <ReactSVG src="/assets/svgs/biglock.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Secure;
