/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Affordable = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
  content,
}) => {
  const {
    body,
    header,
    button_text,
    desktop_image,
    mobile_image,
    url,
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
      variant="pages.values.payequity.affordable"
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
          className="Affordable"
        >
          <motion.div ref={ref} className="Affordable__text">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="Affordable__text-header"
            >
              <Styled.h2 className="Affordable__text-header-text">
                {header}
              </Styled.h2>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Affordable__text-body"
            >
              <Styled.p className="Affordable__text-body-text">{body}</Styled.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={2}
              className="Affordable__text-link"
            >
              <LearnMoreLink href={url} text={button_text} color="#335AFF" />
            </motion.div>
          </motion.div>
          <div className="Affordable__graphic">
            <picture>
              <source
                media="(min-width: 800px)"
                srcSet={desktop_image}
              ></source>
              <source srcSet={mobile_image}></source>
              <img
                className="Affordable__graphic-image"
                src={desktop_image}
                alt=""
              />
            </picture>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Affordable;
