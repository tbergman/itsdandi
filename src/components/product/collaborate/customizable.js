/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub, lineBreaks } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Customizable = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
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
      variant="pages.product.collaborate.customizable"
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
          className="Customizable"
        >
          <div ref={ref} className="Customizable__text">
            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={0}
              className="Customizable__text-header"
            >
              <Styled.h2 className="Customizable__text-header-text">
                {header}
              </Styled.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={animationControls}
              variants={globalSlideUp}
              custom={1}
              className="Customizable__text-body"
            >
              <Styled.p className="Customizable__text-body-text">
                {lineBreaks(body)}
              </Styled.p>
            </motion.div>
          </div>
          <div className="Customizable__graphic">
            <ReactSVG src="/assets/svgs/customizable.svg" />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Customizable;
