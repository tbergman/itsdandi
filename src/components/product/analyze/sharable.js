/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { framer, motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Sharable = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, body } = content;

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
      variant="pages.product.analyze.sharable"
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
          className="Sharable"
        >
          <div ref={ref} className="Sharable__text">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="Sharable__text-header"
            >
              <Styled.h2 className="Sharable__text-header-text">
                {header}
              </Styled.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Sharable__text-body"
            >
              <Styled.p className="Sharable__text-body-text">
                {lineBreaks(body)}
              </Styled.p>
            </motion.div>
          </div>
          <div className="Sharable__graphic">
            <ReactSVG src="/assets/svgs/sharable.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Sharable;
