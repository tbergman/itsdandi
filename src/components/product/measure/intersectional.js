/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "../../inview";
import SubInView from "../../subinview";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import { framer, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";

const Intersectional = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { body, desktop_image, mobile_image } = content;
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
      variant="pages.product.measure.intersectional"
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
          className="Intersectional"
        >
          <div className="Intersectional__graphic">
            <picture>
              <source
                media="(min-width: 800px)"
                srcSet={desktop_image}
              ></source>
              <source srcSet={mobile_image}></source>
              <img
                className="Intersectional__graphic-image"
                src={desktop_image}
                alt=""
              />
            </picture>
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={animationControls}
            variants={globalSlideUp}
            custom={0}
            className="Intersectional__text"
          >
            <Styled.p className="Intersectional__text-text">
              {lineBreaks(body)}
            </Styled.p>
          </motion.div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Intersectional;
